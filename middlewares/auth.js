const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json("No Token!");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).json("Invalid Token!");
    req.user = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: "Error Token!" });
  }
};
