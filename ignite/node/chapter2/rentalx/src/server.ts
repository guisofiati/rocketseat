import express from "express";

import { categoryRoutes } from "./routes/category.routes";
import { specificationRoutes } from "./routes/spefication.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/specifications", specificationRoutes);

app.listen(3333, () => console.log("Server running..."));
