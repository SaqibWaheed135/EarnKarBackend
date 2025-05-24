// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// // Register
// // Register
// router.post('/register', async (req, res) => {
//   const { name, email, password, profilePic } = req.body;

//   try {
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ msg: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       profilePic: profilePic || undefined, // Let Mongoose apply default
//       // Do NOT manually set points unless you want to override default
//     });

//     await user.save();

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         points: user.points,
//         profilePic: user.profilePic,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// });





// // Login
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     let user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         points: user.points || 5,           // default points if somehow missing
//         profilePic: user.profilePic || '',  // default empty string if missing
//       },
//     });
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });




// module.exports = router;


const express = require('express');
const router = express.Router();
const { signup, login, getProfile, updateProfile, uploadProfileImage, reward, clerkUserHandler} = require('../controller/authController');
const protect = require('../middleware/authmiddlerware');

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);  // <-- this must exist
router.put('/profile/image', protect, uploadProfileImage);
router.post('/reward', reward);
router.post('/clerk-user',clerkUserHandler)
//router.put('/profile', protect, updateProfile);


module.exports = router;
