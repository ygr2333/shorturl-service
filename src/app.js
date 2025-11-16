const express = require("express");
const cors = require("cors");
require("dotenv").config();

const shortRouter = require("./routes/short");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/short", shortRouter);

app.get("/", (req, res) => {
  res.send("ShortURL Service Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
