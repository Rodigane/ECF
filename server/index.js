import express, { json } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import hotelRoutes from "./routes/hotel.js";
import suiteRoutes from "./routes/suite.js";
import reservationRoutes from "./routes/reservation.js";
import customersRoutes from "./routes/customers.js";
import authRoutes from "./routes/auth.js";
import managersRoutes from "./routes/managers.js";
import mailRoutes from "./routes/mail.js";

const app = express();
const corsOptions = { credentials: true, origin: process.env.URL || "*" };

app.use(cors(corsOptions));
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT;

// ? middleware within express, allow you to retrieve the data of the request with req.body as an object
app.use(express.json());
app.use("/api/v1/hotels", hotelRoutes);
app.use("/api/v1/suites", suiteRoutes);
app.use("/api/v1/reservations", reservationRoutes);
app.use("/api/v1/customers", customersRoutes);
app.use("/api/v1/login", authRoutes);
app.use("/api/v1/managers", managersRoutes);
app.use("/api/v1/contact", mailRoutes);
app.use(cookieParser());

console.log(PORT);
app.listen(PORT, () => {
  console.log(`server up and running on port : ${PORT}`);
});
