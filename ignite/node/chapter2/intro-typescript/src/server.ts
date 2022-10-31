// const express = require("express"); -> typescript usa o esm ao invez do commonjs

import express from "express";
import { createCar } from "./routes";

const app = express();

app.get("/", createCar);

app.listen(3333);
