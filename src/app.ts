import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";
import { ApplicationRoute } from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import helmet from "helmet";
const app: Application = express();
//* middleware--------
app.use([
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: true }),
]);

//*This Middleware help to Cross-Site Scripting(XSS) Protection
// app.use(helmet.xssFilter());

// //* Request Limitation
// app.use(RequestLimit);
// Application Route---------------
app.use("/api/v1", ApplicationRoute);

//Root Route-----------
app.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send({
    StatusCodes: 404,
  });
});

// Application Route---------------
app.use("/api/v1", ApplicationRoute);

//Root Route-----------
app.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send({
    StatusCodes: 404,
  });
});

// Handle Not Found API -------
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).send({
    success: false,
  });
  next();
});

// handle global error
app.use(globalErrorHandler);
