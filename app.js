const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Posts = require("./model/mongoscheme");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mongodb connection
let uri = process.env.MONGODB_URL // || "mongodb+srv://mysticresearcher:mysticresearcher123@cluster0.we2xn.mongodb.net/banking-demo";
console.log('uri: ', uri);
console.log('PORT: ', PORT);

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log("error connecting the mongodb" + err);
    else console.log("connection is successful.");
  }
);

//APIS

app.get("/", (req, res) => {
  console.log("inside / route")
  res.send("Welcome to nodejs + express banking app ");
});

// for new user - account opening
app.post("/new", (req, res) => {
  console.log(`please send username, password, initial_balance in post `);
  const { initial_balance } = req.body;

  if (initial_balance < 2000) {
    return res.send("You are poor to afford account in our bank");
  }
  let user = new Posts(req.body);
  user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
});

//
app.listen(PORT, (e) => {
  if (e) console.log("err occured", e);
  console.log("server started at port : ", PORT);
});

// app.post("/deposit", (req, res) => {
//   console.log("req", req.body);

//   res.send("deposit");
// });

// app.post("/withdraw", (req, res) => {
//   res.send("withdraw");
// });

// app.patch("/changeuserdetaild", (req, res) => {
//   res.send("changeuserdetaild");
// });

// app.delete("/delete", (req, res) => {
//   res.send("delete");
// });

// app.get("/checkbalance", (req, res) => {
//   res.send("checkbalance");
// });
