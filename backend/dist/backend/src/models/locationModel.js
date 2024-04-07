"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationModel = void 0;
const mongoose_1 = require("mongoose");
const locationSchema = new mongoose_1.Schema({
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
        type: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Device' }],
        required: true
    }
});
exports.locationModel = (0, mongoose_1.model)('Location', locationSchema);
