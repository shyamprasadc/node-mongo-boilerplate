const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DB } = require('../config');

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: Number, enum: Object.values(DB.CONSTANTS.USER_ROLE), required: true },
    status: { type: Number, enum: Object.values(DB.CONSTANTS.USER_STATUS), required: true },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
