import db from "../db/index.cjs";
import bcrypt from "bcrypt";

export const getCustomer = async (req, res) => {
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

export const createCustomer = async (req, res) => {
  const user = req.body;
  try {
    const hashedPassword = await bcrypt.hash(customer.password, 10);
    const results = await db.query(
      "INSERT INTO users (name, first_name, email, password) values ($1, $2, $3, $4) returning *",
      [user.name, user.first_name, user.email, hashedPassword]
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
