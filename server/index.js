import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import hotelRoutes from "./routes/hotel.js";
const app = express();
app.use(cors());
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

const PORT = process.env.PORT;

// ? middleware within express, allow you to retrieve the data of the request with req.body as an object
app.use(express.json());
app.use("/api/v1/hotels", hotelRoutes);
// ! ************************  Routes ********************************** ! //
// * ************************  Hotels ********************************** * //
/** 
// * Get all hotels 
app.get("/api/v1/hotels", async (req, res) => {
  try {
    const results = await db.query("select * from hotels", );
    console.log(results.rows);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        hotels: results.rows,
      },
    });
  } catch (error) {
    console.error(error)
  }
});

// * Get a hotel
app.get("/api/v1/hotels/:hotel_id", async (req, res) => {
  console.log(req.params.hotel_id);
 try{
  const results = await db.query("select * from hotels where hotel_id = $1",[req.params.hotel_id]);
    console.log(results.rows[0]);
    res.status(200).json({
    status: "sucess",
    results: results.rows.length,
    data: {
        hotels: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error)
  }
});

// * Create a new hotel
// returning * at the end of the query is for postgresql to return the new data inserted

app.post("/api/v1/hotels", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query
    ("INSERT INTO hotels (name, city, address, description,photos) values ($1, $2, $3, $4, $5) returning *", 
    [req.body.name, req.body.city, req.body.address, req.body.description, req.body.name.photo])
    console.log(results)
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
          hotels: results.rows[0],
        },
      });
  } catch (error) {
    console.error(error)
  }
});

// * update a hotel
app.put("/api/v1/hotels/:hotel_id", async (req, res) => {
  console.log(req.params.hotel_id);
  console.log(req.body);
  try {
    const results = await db.query
    ("UPDATE hotels SET name = $1, city=$2, address = $3, description = $4, photo = $5 WHERE id = $6 RETURNING *",
    [req.body.name, req.body.city, req.body.address, req.body.description, req.body.name.photo, req.params.hotel_id])
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
          hotels: results.rows[0],
        },
      });
  } catch (error) {
    console.error(error)
  }
});

// * delete a hotel
app.delete("/api/v1/hotels/:hotel_id",async (req, res) => {
  console.log(req.params.hotel_id);
  try {
    const results = await db.query("DELETE FROM hotels where id = $1",[req.params.hotel_id]);
    res.status(200).json(
      console.log('delete successfull')
    )
  } catch (error) {
    console.error(error)
  }
});
// * ************************  Hotels ********************************** * //
*/
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
console.log(PORT)
app.listen(PORT, () => {
  console.log(`server up and running on port : ${PORT}`);
});
