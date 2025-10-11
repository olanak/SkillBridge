const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/user'); // Import the User model

// @route   POST api/users/register
// @desc    Register a new user
// @access  Public
router.post('/register', async (req, res) => {
  // 1. Destructure name, email, and password from the request body
  const { name, email, password } = req.body;

  try {
    // 2. Check if the user already exists in the database
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // 3. If user does not exist, create a new user instance
    user = new User({
      name,
      email,
      password,
    });

    // 4. Hash the password before saving
    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
    user.password = await bcrypt.hash(password, salt); // Hash the password

    // 5. Save the new user to the database
    await user.save();

    // 6. Send a success response
    res.status(201).json({ msg: 'User registered successfully' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;