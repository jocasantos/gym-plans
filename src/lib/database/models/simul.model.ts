import { Schema, model, models } from "mongoose";

//create a interface for the model
export interface ISimul extends Document {
    publicID: string;
    secureURL: URL;
    age: number;
    genre: string;
    weight: number;
    height: number;
    start_year: number;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const SimulSchema = new Schema({
    publicID: {type: String, required: true},
    secureURL: {type: URL, required: true},
    age: {type: Number, required: true},
    genre: {type: String, required: true},
    weight: {type: Number, required: true},
    height: {type: Number, required: true},
    start_year: {type: Number, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const Simul = models?.Simul || model('Simul', SimulSchema);

export default Simul;