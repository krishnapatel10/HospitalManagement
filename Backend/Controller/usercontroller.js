import User from "../Model/userModel.js";

let usercontroller = {
  async getalluser(req, res) {
    try {
      let Data = await User.find();
      res.status(200).json(Data);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
  async getuserbyid(req, res) {
    try {
      let Data = await User.findById(req.params.id);
      if (!Data) {
        res.status(404).json({ message: "user not found.." });
      }
      res.status(200).json(Data);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
  async loginuser(req, res) {
    let { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password)
      return res.status(401).json({ message: "Invalid password" });

    res.status(200).json({ message: "Login Successful", user });
  },
  async signupuser(req, res) {
    try {
      let Data = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      let newData = await Data.save();
      res.status(201).json(newData);
    } catch (error) {
      res.status(500).json({ message: "intarnal server error ", error });
    }
  },
  async updateuser(req, res) {
    try {
      let Data = User.findByIdAndUpdate(req.params.id);
      if (!Data) {
        res.status(404).json({ message: "user not found..." });
      }
      (Data.name = req.body.name || Data.name),
        (Data.email = req.body.email || Data.email),
        (Data.password = req.body.password || Data.password);

      //  let newData = await Data.save()
      res.status(200).json(newData);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
  async deleteuser(req, res) {
    try {
      let Data = await User.findByIdAndDelete(req.params.id);
      if (!Data) {
        res.status(404).json({ message: "internal server error", error });
      }
      res.status(200).json("Deleted Succesfully...");
      
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
};

export default usercontroller;
