const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    image: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("users", UserSchema);
module.exports = Users;
