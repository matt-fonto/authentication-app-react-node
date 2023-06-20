const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const connectDB = require("./db/connectDB");

const app = express();
const port = process.env.PORT || 3000;

// Middleware: manipulate incoming requests before they reach the route handlers
app.use(cors()); // Allow cross-origin requests, different ports
app.use(express.json()); // Parse JSON body

// Connect to the database
connectDB();

// Routes
app.use("/api", userRouter);

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
