const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User, validateRegister, validateLogin } = require("../models/user");

module.exports.registerUserCtrl = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Validation
  const { error } = validateRegister(req.body);
  if (error) {
    console.error("Validation error:", error.details[0].message);
    return res.status(400).json({ message: error.details[0].message });
  }

  // Check if user exists
  let email_exist = await User.findOne({ email });
  let phone_exist = await User.findOne({ phone });
  if (email_exist || phone_exist) {
    console.error("User already exists:", email_exist, phone_exist);
    return res
      .status(400)
      .json({ message: "This Email or Phone Already Exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create new user and save to DB
  let user = new User({ name, email, phone, password: hashPassword });
  await user.save();
  res.status(201).json({ message: "User Created, Please Login" });
});

module.exports.addNewUserCtrl = asyncHandler(async (req, res) => {
  const { name, email, phone, password, isAdmin } = req.body;

  // Check if user exists
  let email_exist = await User.findOne({ email });
  let phone_exist = await User.findOne({ phone });
  if (email_exist || phone_exist) {
    return res
      .status(404)
      .json({ message: "This Email or Phone Already Exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create new user and save to DB
  let user = new User({
    name,
    email,
    phone,
    password: hashPassword,
    isAdmin: isAdmin,
  });
  await user.save();
  res.json({ message: "User Created, Please Login" });
});

module.exports.loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validation
  const { error } = validateLogin(req.body);
  if (error) {
    return res.status(404).json({ message: error.details[0].message });
  }

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "Invalid Email or Password" });
  }

  // Check password
  const isPasswordMatch = bcrypt.compareSync(password, user.password);
  if (!isPasswordMatch) {
    return res.status(404).json({ message: "Invalid Email or Password" });
  }

  // Generate token (JWT)
  const token = user.generateAuthToken();
  res.json({
    _id: user.id,
    name: user.name,
    isAdmin: user.isAdmin,
    token,
  });
});
