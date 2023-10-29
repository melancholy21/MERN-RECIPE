const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./utils/database");
const UserRouter = require("./routers/UserRouter");
//* CONFIGURATION
const app = express();
dotenv.config();

//* DATABASE
connectDB();

//* MIDDLEWARE
app.use(express.json());
app.use(cors());

//* ROUTES
app.use("/", UserRouter);

//* LISTENING
const PORT = 4200;
app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
