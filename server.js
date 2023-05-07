const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/api/users");
const thoughtRoutes = require("./routes/api/thoughts");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/api/users", usersRoutes);
app.use("/api/thoughts", thoughtRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
