"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = 5000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: "500kb" }));
app.get('/', (req, res) => {
    res.send('Hello');
});
app.get('/hi', (req, res) => {
    res.send('Hi');
});
app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`);
});
