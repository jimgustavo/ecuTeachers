const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BillingData = new Schema({
  firstName: { type: String, unique: true, required: true },
  lastName: { type: String, unique: true, required: true },
  dni: { type: Number, required: true, unique: true },
  phone: { type: Number },
  line1: { type: String },
  line2: { type: String },
  houseNumber: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = Billing = mongoose.model("billing", BillingData);
//will create a model called item following the ItemSchema
