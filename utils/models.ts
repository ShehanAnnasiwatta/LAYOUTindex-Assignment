import { DeviceType, Status } from "./enums";

export interface Device {
    serialNumber: string,
    type: DeviceType,
    image: string,
    status: Status
}

export interface Location {
    name: string,
    address: string,
    phone: number,
    devices: Device[]
}