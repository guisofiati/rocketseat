import express from "express";

import { router } from "./routes";

const app = express();

const port = 3333;

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log(`Server running in port ${port}`));
