// module.exports = mongoose.model('User', UserSchema);


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   clerkUserId: { type: String, unique: true, sparse: true }, // allow null but unique if exists

//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   points: { type: Number, default: 5 },
//   avatar: { type: String, default: './assets/images/logo.png',}
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    clerkUserId: { type: String, unique: true, sparse: true },

    firstName: { type: String, required: true },
    // lastName: { type: String, required: true },
    lastName: {
      type: String,
      required: false,
      default: ''
    },

    email: { type: String, required: true, unique: true },

    // Removed password because OAuth users won't have one
    // password: { type: String, required: true },

    points: { type: Number, default: 5 },
    avatar: { type: String, default: './assets/images/logo.png' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
