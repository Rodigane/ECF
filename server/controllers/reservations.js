import db from "../db/index.cjs";

export const getReservations = async (req, res) => {
  try {
    const results = await db.query(
      "select * from reservations where suite_id = $1",
      [req.params.suite_id]
    );
    console.log(results.rows);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        reservations: results.rows,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
    });
    console.error(error);
  }
};

export const createReservation = async (req, res) => {
  const reservation = req.body;
  console.log(reservation);
  console.log(req.params.user_id);
  console.log(req.params.suite_id);

  try {
    const results = await db.query(
      "INSERT INTO reservations (start_date, end_date, options, nb_night, cost, city, suite_id, user_id) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *",
      [
        reservation.start_date,
        reservation.end_date,
        reservation.option,
        reservation.nb_night,
        reservation.cost,
        reservation.hotel,
        req.params.suite_id,
        req.params.user_id,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        reservations: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
    });
    console.error(error);
  }
};

export const getCustomerReservations = async (req, res) => {
  try {
    const results = await db.query(
      "select * from reservations where user_id = $1",
      [req.params.user_id]
    );
    console.log(req.params.user_id);
    console.log(results.rows);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        reservations: results.rows,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
    });
    console.error(error);
  }
};

export const deleteReservation = async (req, res) => {
  const reservation_id = req.params.reservation_id;
  console.log(reservation_id);
  try {
    const results = await db.query(
      "DELETE FROM reservations where reservation_id = $1",
      [reservation_id]
    );
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(400).json({
      status: "error",
    });
    console.error(error);
  }
};
