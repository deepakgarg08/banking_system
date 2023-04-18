const mongoose = require("mongoose");
let dbschema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  initial_balance: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("customer", dbschema);
