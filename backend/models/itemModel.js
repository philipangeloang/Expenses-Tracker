const mongoose = require("mongoose");
const moment = require("moment-timezone");
const datePhilippines = moment.tz(Date.now(), "China");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    trackerType: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
