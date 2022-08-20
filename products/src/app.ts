import {
  currentUser,
  errorHandler,
  NotFoundError,
} from "@microservices-ecommerce/common";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import "express-async-errors";
import { indexProductRouter } from "./routes/index";
import { createProductRouter } from "./routes/new";
import { showProductRouter } from "./routes/show";
import { updateProductRouter } from "./routes/update";

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

app.use(createProductRouter);
app.use(showProductRouter);
app.use(indexProductRouter);
app.use(updateProductRouter);

app.get("/", (req, res) => {
  res.status(200).json({ status: "Healthy" });
});

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
