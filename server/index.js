const express = require("express");

const app = express();
const PORT = 3005;

// ? middleware within express, allow you to retrieve the data of the request with req.body as an object
app.use(express.json());

// ! ************************  Routes ********************************** ! //
// * ************************  Hotels ********************************** * //

// * Get all hotels
app.get("/api/v1/hotels", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      hotels: ["Berck", "Pulnoy", "Pezenas"],
    },
  });
});

// * Get a hotel
app.get("/api/v1/hotels/:hotel_id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "sucess",
    data: {
      hotel: req.params,
    },
  });
});

// * Create a new hotel

app.post("/api/v1/hotels", (req, res) => {
  console.log(req);
});

// * update a hotel
app.put("/api/v1/hotels/:hotel_id", (req, res) => {
  console.log(req.params.hotel_id);
  console.log(req.body);
});

// * delete a hotel
app.delete("/api/v1/hotels/:hotel_id", (req, res) => {
  console.log(req.params.hotel_id);
});
// * ************************  Hotels ********************************** * //
// * ************************  Suites ********************************** * //

// * Get all suites
app.get("/api/v1/hotels/:hotel_id/suites", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      suites: [1, 2, 3],
    },
  });
});

// * Get a suite
app.get("/api/v1/hotels/:hotel_id/suites/:suite_id", (req, res) => {
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

// * Create a new suite

app.post("/api/v1/hotels/:hotel_id/suites", (req, res) => {
  console.log(req);
});

// * update a hotel
app.put("/api/v1/hotels/:hotel_id/suites/:suite_id", (req, res) => {
  console.log(req.params.hotel_id);
  console.log(req.body);
});

// * delete a hotel
app.delete("/api/v1/hotels/:hotel_id/suites/:suite_id", (req, res) => {
  console.log(req.params.hotel_id);
});

// * ************************  Suites ********************************** * //
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

app.listen(PORT, () => {
  console.log(`server up and running on port : ${PORT}`);
});
