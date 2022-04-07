import db from "../db/index.cjs";

export const getHotels = async (req, res) => {
  try {
    const results = await db.query("select * from hotels");
    console.log(results.rows);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        hotels: results.rows,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const getHotel = async (req, res) => {
  console.log(req.params.hotel_id);
  try {
    const results = await db.query("select * from hotels where hotel_id = $1", [
      req.params.hotel_id,
    ]);
    console.log(results.rows[0]);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        hotels: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const createHotel = async (req, res) => {
  console.log(req.body);
  const hotel = req.body;
  console.log("data bien reçu");
  console.log(hotel);
  try {
    const results = await db.query(
      "INSERT INTO hotels (name, city, address, description, photo, manager_id) values ($1, $2, $3, $4, $5, $6) returning *",
      [
        hotel.name,
        hotel.city,
        hotel.address,
        hotel.description,
        hotel.photo,
        hotel.manager_id,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        hotels: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateHotel = async (req, res) => {
  console.log("Data to update recieve");

  console.log(req.params.hotel_id);
  const hotel_id = req.params.hotel_id;
  const hotel = req.body.body;
  console.log(req.params.hotel_id);
  console.log("ceci est censé être le body");
  console.log(hotel);
  try {
    const results = await db.query(
      "UPDATE hotels SET name = $1, city=$2, address = $3, description = $4, photo = $5,  manager_id =$6 WHERE hotel_id = $7 RETURNING *",
      [
        hotel.name,
        hotel.city,
        hotel.address,
        hotel.description,
        hotel.photo,
        hotel.manager,
        hotel_id,
      ]
    );
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        hotels: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteHotel = async (req, res) => {
  const hotel_id = req.params.hotel_id;
  console.log(hotel_id);
  try {
    const results = await db.query("DELETE FROM hotels where hotel_id = $1", [
      hotel_id,
    ]);
    res.status(200).json(console.log("delete successfull"));
  } catch (error) {
    console.error(error);
  }
};

// * ************************  Hotels ********************************** * //
