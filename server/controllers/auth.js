import db from "../db/index.cjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtTokens } from "../utils/jwt-helpers.js";

export const login = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    console.log(password);
    const results = await db.query(
      "SELECT * FROM  customers WHERE email = $1",
      [email]
    );
    if (results.rows.length === 0)
      return res.Status(401).json({ error: "Email est incorrect" });
    const validPassword = await bcrypt.compare(
      password,
      results.rows[0].password
    );
    if (!validPassword)
      return res.status(401).json({ error: "Mot de passe incorrect" });
    let tokens = jwtTokens(results.rows[0]);
    res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
    res.json({
      tokens: tokens,
      customers: results.rows[0],
    });
    res.json(results.rows[0]);
  } catch (error) {
    console.error(error);
  }
};

export const refresh = (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (refreshToken === null)
      return res.status(401).json({ error: "Null refresh token" });
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, user) => {
        if (error) return res.status(403).json({ error: error.message });
        let tokens = jwtTokens(user);
        res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
        res.json(tokens);
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const clear = (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res.status(200).json({ message: "refresh token deleted." });
  } catch (error) {
    console.error(error);
  }
};
