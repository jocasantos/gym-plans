import { Schema, model, models } from "mongoose";

//create a interface for the model
export interface ISimul extends Document {
    age: number;
    genre: string;
    height: number;
    start_age: number;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const SimulSchema = new Schema({
    age: {type: Number, required: true},
    genre: {type: String, required: true},
    height: {type: Number, required: true},
    start_age: {type: Number, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const Simul = models?.Simul || model('Simul', SimulSchema);

export default Simul;