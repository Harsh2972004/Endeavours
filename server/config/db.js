const mongoose = require("mongoose");
const dotenv = require("dotenv");

//configuring dotenv
dotenv.config();

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const db = `mongodb+srv://${username}:${password}@cluster0.iivihjl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
