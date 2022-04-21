import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Bearer TOKEN
  //console.log(req.headers);
  //console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).json({ error: "Null token" });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.status(403).json({ error: error.message });
    req.user = user;
    next();
  });
};

export { authenticateToken };
