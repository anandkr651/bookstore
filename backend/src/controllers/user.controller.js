import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if ([username, email, password].some((field) => field?.trim() === "")) {
      return res.status(404).json({ message: "please fill the form" });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(404).json({ message: "User allready exist" });
    }

    const createUser = new User({
      username,
      email,
      password,
    });
    await createUser.save();

    return res.status(200).json({ message: "user created successfully",user:{
      _id:createUser._id,
      username:createUser.username,
      email:createUser.email
    }  });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
 try {
     const { email, password } = req.body;
   
     if ([email, password].some((field) => field?.trim === "")) {
       return res.status(404).json({ message: "please fill login form" });
     }
     const user = await User.findOne({ email });
     if (!user) {
       return res.status(404), json({ message: "User does not exist" });
     }
     const ispasswordvalid = await user.ispasswordCorrect(password)
     if(!ispasswordvalid){
       return res.status(404).json({message:"password is not correct"})
     }
   
     return res.status(200).json({ message: "User logged In",user:{
       _id:user._id,
       username:user.username,
       email:user.email
     } });
 } catch (error) {
    return res.status(500).json({message:"Internal server error"})
 }
};
export { registerUser, loginUser };
