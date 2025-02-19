import mongooes from "mongoose";
import bcrypt from "bcrypt"

const userSchema = mongooes.Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.ispasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password)
}
export const User = mongooes.model("User", userSchema);
