const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a user schema
const userSchema = new mongoose.Schema({
  username: String,
  stats: Object,
});

const User = mongoose.model("User", userSchema);

app.use(express.json());

// Handle GET request for user data
app.get("/api/users/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (user) {
      res.json(user.stats);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Handle POST request to update user data
app.post("/api/users/:username", async (req, res) => {
  try {
    let user = await User.findOne({ username: req.params.username });

    if (!user) {
      // Create a new user if not found
      user = new User({
        username: req.params.username,
        stats: req.body,
      });
    } else {
      // Update existing user data
      user.stats = req.body;
    }

    await user.save();
    res.json({ message: "User data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
