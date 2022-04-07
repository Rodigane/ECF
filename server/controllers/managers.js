import db from "../db/index.cjs";
import bcrypt from "bcrypt";

export const getManager = async (req, res) => {
  try {
    const results = await db.query("select * from users where user_id = $1", [
      req.params.user_id,
    ]);
    console.log(results.rows);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        users: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const getManagers = async (req, res) => {
  try {
    const results = await db.query(
      "select * from users where role = 'manager'"
    );
    console.log(results.rows);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        users: results.rows,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const createManager = async (req, res) => {
  const user = req.body;
  console.log(user);
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const results = await db.query(
      "INSERT INTO users (name, first_name, email, password, role, hotel_id) values ($1, $2, $3, $4, $5, $6) returning *",
      [
        user.name,
        user.first_name,
        user.email,
        hashedPassword,
        user.role,
        user.hotelId,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        users: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteManager = async (req, res) => {
  const user_id = req.params.user_id;
  console.log(user_id);
  try {
    const results = await db.query("DELETE FROM users where user_id = $1", [
      user_id,
    ]);
    res.status(200).json(console.log("delete successfull"));
  } catch (error) {
    console.error(error);
  }
};

export const updateManager = async (req, res) => {
  const user = req.body.body;
  const user_id = req.params.user_id;
  console.log(user);
  console.log(user_id);
  try {
    const results = await db.query(
      "UPDATE  users SET name = $1, first_name = $2, email = $3, role = $4, hotel_id = $5 WHERE user_id = $6 returning *",
      [user.name, user.first_name, user.email, user.role, user.hotelId, user_id]
    );
    console.log(results);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        users: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};
