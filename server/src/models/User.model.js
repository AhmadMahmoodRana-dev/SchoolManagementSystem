import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Principal', 'Management Staff', 'Teacher', "Accountant","Store Manager","Others","Students","Admin"], default: 'Teacher' }, // Use roles matching the employee's
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  registrationNo:{type:String}
  
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const User = mongoose.model("User", userSchema);
