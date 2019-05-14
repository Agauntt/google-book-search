const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const books = require("./routes/api-routes");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to mongoose
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/google_books", { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

// Use Routes
app.use("/api/books", books);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));