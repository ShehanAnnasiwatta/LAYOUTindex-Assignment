import { Schema, model } from "mongoose";
import { Location } from '../../../utils/models'

const locationSchema = new Schema<Location>({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    },
    devices: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Device' }],
        required: true
    }
})

export const locationModel = model<Location>('Location', locationSchema)