const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    phone: String,
    Isverified: {
        type: Boolean,
        default: false
    },
    Isblocked: {
        type: Boolean,
        default: false
    },
    // agreedToTerms: { type: Boolean, default: false },
}, {
    timestamps: true, // Add createdAt and updatedAt timestamps
  });  
// Add a method to the schema to verify the provided password
userSchema.methods.authenticate = function (password) {
    // Compare the provided password with the hashed password in the database
    return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;