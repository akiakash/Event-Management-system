const mongoose = require("mongoose");

const PostSchema = mongoose.PostSchema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  MobileNumber: {
    type: String,
    required: true,
  },
});
