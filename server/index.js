import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import hotelRoutes from "./routes/hotel.js";
import suiteRoutes from "./routes/suite.js";
import reservationRoutes from "./routes/reservation.js";
const app = express();
app.use(cors());
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT;

// ? middleware within express, allow you to retrieve the data of the request with req.body as an object
app.use(express.json());
app.use("/api/v1/hotels", hotelRoutes);
app.use("/api/v1/suites", suiteRoutes);
app.use("/api/v1/reservations", reservationRoutes);

// ! ************************  Routes ********************************** ! //

// * ************************  Customers ********************************** * //

// * Get a customer
app.get("/api/v1/customers/:customer_id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "sucess",
    data: {
      suite: 1,
      photo: "oui",
      description: "blabla",
      price: 12,
    },
  });
});

// * Create a new customer
app.post("/api/v1/customers/", (req, res) => {
  console.log(req.body);
});

// * Update a  customer
app.post("/api/v1/customers/:customer_id", (req, res) => {
  console.log(req.body);
});

// * Delete a  customer

app.delete("/api/v1/customers/:customer_id", (req, res) => {
  console.log(req.params);
});

// * ************************  Customers ********************************** * //
// * ************************  Reservations ********************************** * //

// * Get all reservations
app.get("/api/v1/reservations/", (req, res) => {
  console.log(req.params);
});

// * Update a  reservation
app.post("/api/v1/reservations/:reservations_id", (req, res) => {
  console.log(req.body);
});

// * Delete a  reservation
app.delete("/api/v1/reservations/:reservations_id", (req, res) => {
  console.log(req.params);
});

// * ************************  Reservations ********************************** * //
// * ************************  Managers ********************************** * //

// * Get a manager
app.get("/api/v1/managers/:manager_id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "sucess",
    data: {
      test: "ok",
    },
  });
});

// * Create a new manager
app.post("/api/v1/managers/", (req, res) => {
  console.log(req.body);
});

// * Update a  manager
app.post("/api/v1/managers/:manager_id", (req, res) => {
  console.log(req.body);
});

// * Delete a  manager

app.delete("/api/v1/managers/:manager_id", (req, res) => {
  console.log(req.params);
});

// * ************************  Managers ********************************** * //

// * ************************  Routes ********************************** * //
// ! ************************  Routes ********************************** ! //
console.log(PORT);
app.listen(PORT, () => {
  console.log(`server up and running on port : ${PORT}`);
});
