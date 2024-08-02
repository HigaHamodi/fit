const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 10,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Generate Auth Token
UserSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      id: this._id,
      name: this.name,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET_KEY
  );
};

// User Model
const User = mongoose.model("User", UserSchema);

// Validation Register User
function validateRegister(user) {
  const schema = Joi.object({
    name: Joi.string().trim().min(2).required(),
    email: Joi.string().trim().min(7).required().email(),
    phone: Joi.string().trim().length(10).required(), // Ensure length is 10
    password: Joi.string().trim().min(6).required(),
  });
  return schema.validate(user);
}

// Validation Login User
function validateLogin(user) {
  const schema = Joi.object({
    email: Joi.string().trim().min(7).required().email(),
    password: Joi.string().trim().min(6).required(),
  });
  return schema.validate(user);
}

module.exports = { User, validateRegister, validateLogin };
