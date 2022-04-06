import db from "../db/index.cjs";
import bcrypt from "bcrypt";

export const getCustomer = async (req, res) => {
  try {
    const results = await db.query(
      "select * from customers where customer_id = $1",
      [req.params.customer_id]
    );
    console.log(results.rows);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        customers: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const createCustomer = async (req, res) => {
  const customer = req.body;
  try {
    const hashedPassword = await bcrypt.hash(customer.password, 10);
    const results = await db.query(
      "INSERT INTO customers (name, first_name, email, password) values ($1, $2, $3, $4) returning *",
      [customer.name, customer.first_name, customer.email, hashedPassword]
    );
    console.log(results);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        customers: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};
