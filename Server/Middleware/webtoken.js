const jwt = require("jsonwebtoken");

function authmiddleware(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ error: "Access denied. No token found." });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN);
    req.user = { id: decoded.userId };
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
}

module.exports = authmiddleware;
