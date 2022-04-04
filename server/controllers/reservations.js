/** getCustomerReservations,
  createReservation,
    deleteReservation,
 */

import db from "../db/index.cjs";

export const getReservations = async (req, res) => {
  try {
    const results = await db.query(
      "select * from reservations where suite_id = $1",
      [req.params.suite_id]
    );
    console.log(results.rows);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        reservations: results.rows,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const createReservation = async (req, res) => {
  const reservation = req.body;
  console.log(reservation.start);
  console.log(req.params.suite_id);
  console.log(req.params.customer_id);
  try {
    const results = await db.query(
      "INSERT INTO reservations (start_date, end_date, options, suite_id, customer_id) values ($1, $2, $3, $4, $5) returning *",
      [
        reservation.start_date,
        reservation.end_date,
        reservation.options,
        req.params.suite_id,
        req.params.customer_id,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        reservations: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};
