"use strict";
// const express = require("express"); -> typescript usa o esm ao invez do commonjs
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.get("/", routes_1.createCar);
app.listen(3333);
