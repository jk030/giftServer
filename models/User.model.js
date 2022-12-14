const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const userSchema = new Schema(
  {
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  userName: { type: String, required: true },
  firstName: String,
  lastName: String,
  birthday: Date,
  religion: String,
  recipient: [{ type: Schema.Types.ObjectId, ref: "Recipient" }],
},
{
  timestamps: true,
}, 
);

const User = mongoose.model("User", userSchema);

module.exports = User