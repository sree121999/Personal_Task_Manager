const jwt = require("jsonwebtoken");

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;


  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  
  const token = jwt.sign({ userId: user._id }, process.env.TOKEN, { expiresIn: "1d" });

  
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", 
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
  });

  res.json({ message: "Login successful" });
});
