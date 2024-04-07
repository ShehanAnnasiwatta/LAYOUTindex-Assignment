"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../../utils/enums");
const deviceSchema = new mongoose_1.Schema({
    serialNumber: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: enums_1.DeviceType,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: enums_1.Status
    }
});
exports.deviceModel = (0, mongoose_1.model)('Device', deviceSchema);
