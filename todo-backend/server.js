import "dotenv/config";
import express from "express";
import todoRouter from "./routes/todo.js";

import mongoose from "mongoose";

// database
mongoose.connect(process.env.DATABASE_URL); // connect to db
// get the connection
const db = mongoose.connection;
// error handling
db.on("error", (error) => console.error(error));
// log success message on successful connection
db.once("open", () => console.log("connected to db"));

// initialise express
const app = express();

// middleware for parsing data to JSON
app.use(express.json());

app.use("/todos", todoRouter);

// start server
app.listen("8000", () => {
  console.log("server started on localhost:" + "8000");
});
