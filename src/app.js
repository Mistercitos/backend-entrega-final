import express from "express";
import cors from "cors";
import morgan from "morgan";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

import userRouter from "./routes/users.router.js";
import adoptionRouter from "./routes/adoption.router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health-check
app.get("/", (_, res) => res.json({ message: "API OK" }));

// Routes
app.use("/api/users", userRouter);
app.use("/api/adoption", adoptionRouter);

export default app;
