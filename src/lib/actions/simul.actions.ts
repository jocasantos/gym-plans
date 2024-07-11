"use server"

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils"
import User from "../database/models/user.model";
import Simul from "../database/models/simul.model";
import { redirect } from "next/navigation";
import path from "path";
import { model } from "mongoose";

const populateUser = (query: any) => query.populate({
    path: "author",
    model: User,
    select: "_id firstName lastName",
});

// ADD SIMUL
export async function addSimul({simul, userId, path}: 
AddSimulParams) {
    try {
        await connectToDatabase();

        const author = await User.findById(userId);

        if (!author) {
            throw new Error("User not found");
        }

        const newSimul = await Simul.create({
            ...simul,
            author: author._id,
        });

        revalidatePath(path);

        return JSON.parse(JSON.stringify(newSimul));
        
    } catch (error) {
        handleError(error);
    }
}

// UPDATE SIMUL
export async function updateSimul({simul, userId, path}: 
UpdateSimulParams) {
    try {
        await connectToDatabase();

        const simulToUpdate = await Simul.findById(simul._id);

        if (!simulToUpdate || simulToUpdate.author.toHexString() !== userId) {
            throw new Error("Unauthorized or simulation not found");
        }

        const updatedSimul = await Simul.findByIdAndUpdate(
            simulToUpdate._id,
            simul,
            { new: true }
        );

        revalidatePath(path);

        return JSON.parse(JSON.stringify(updateSimul));
        
    } catch (error) {
        handleError(error);
    }
}

// DELETE SIMUL
export async function deleteSimul(imageId: string) {
    try {
        await connectToDatabase();

        await Simul.findByIdAndDelete(imageId);
        
    } catch (error) {
        handleError(error);
    } finally {
        redirect("/simulacoes");
    }
}

// GET SIMUL
export async function getSimulById(imageId: string) {
    try {
        await connectToDatabase();

        const simul = await populateUser(Simul.findById(imageId));

        if (!simul) {
            throw new Error("Simulation not found");
        }

        return JSON.parse(JSON.stringify(simul));
        
    } catch (error) {
        handleError(error);
    }
}