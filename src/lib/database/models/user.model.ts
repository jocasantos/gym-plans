import { Schema, model, models } from "mongoose";

//create a interface for the model
/* export interface IUser extends Document {
    clerkId: string;
    email: string;
    firstName: string;
    lastName: string;
    creditBalance: number;
} */

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    photo: {type: String, required: true},
    creditBalance: {type: Number, default: 1},
})

const User = models?.User || model('User', UserSchema);

export default User;