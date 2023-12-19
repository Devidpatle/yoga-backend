const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  selectedTime: String,
  paymentDetails: { type: Object, default: {} },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
