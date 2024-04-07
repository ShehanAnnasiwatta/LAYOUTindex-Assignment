import { Schema, model } from 'mongoose'
import { Device } from '../../../utils/models'
import { DeviceType, Status } from '../../../utils/enums'

const deviceSchema = new Schema<Device>({
    serialNumber: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: DeviceType,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: Status
    }
})

export const deviceModel = model<Device>('Device', deviceSchema)
