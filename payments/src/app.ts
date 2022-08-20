import {
  currentUser,
  errorHandler,
  NotFoundError,
} from "@microservices-ecommerce/common";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import "express-async-errors";
import { createChargeRouter } from "./routes/new";

const app = express();
app.use(json());
app.set("trust proxy", true);
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);

app.get("/", (req, res) => {
  res.status(200).json({ status: "Healthy" });
});

app.use(createChargeRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
