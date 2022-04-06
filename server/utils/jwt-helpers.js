import jwt from "jsonwebtoken";

function jwtTokens({ customer_id, customer_name, customer_email }) {
  const customer = { customer_id, customer_name, customer_email };
  const accessToken = jwt.sign(customer, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5m",
  });
  const refreshToken = jwt.sign(customer, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  return { accessToken, refreshToken };
}

export { jwtTokens };
