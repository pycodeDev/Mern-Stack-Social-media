const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  '/',
  [
    check('name', 'Isi Nama Anda')
      .not()
      .isEmpty(),
    check('email', 'Cek Format email Anda').isEmail(),
    check(
      'password',
      'Silahkan Isi Password dengan 6 karakter atau lebih'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // See if User Exist

    // Get User Gravatar

    // Encrypt Password

    // Return jsonwebtoken

    //   console.log(req.body); First Tutorial without validation check
    res.send('User route');
  }
);

module.exports = router;
