import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";
import { ApplicationRoute } from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app: Application = express();

app.use([
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: true }),
]);
