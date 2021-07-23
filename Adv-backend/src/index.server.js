const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
var cors = require('cors')
const app = express();
const bodyParser = require("body-parser");

env.config();
// routes
app.use(cors())
const userRoutes=require("./routes/auth")



mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ammvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db connected");
  });



  app.use(bodyParser());
  app.use("/api",userRoutes)



app.listen(process.env.PORT, () => {
  console.log(`SERVER is runing ${process.env.PORT}`);
});
