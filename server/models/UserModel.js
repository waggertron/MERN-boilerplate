const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;


// create a schema
const userSchema = new Schema({
  name: String,
  email: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
  createdAt: { type: Date, required: true },
  updatedAt: Date,
});

// hash the password
userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) throw err;
    this.password = hash;
    console.log('hashed password: ', hash);
    next();
  });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
