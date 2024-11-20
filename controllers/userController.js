const userModel = require("../models/userModel");


module.exports.getUser = async(req , res) => {
    const user = await userModel.find().sort({ createdAt: -1 });
    res.send(user)
}

module.exports.postUser = async (req, res) => {
    try {
      const { id, firstName, lastName, email, department } = req.body;
  
      // Create user
      const data = await userModel.create({ id, firstName, lastName, email, department });
      
      console.log("User Details Added Successfully");
      res.status(201).send(data);
    } catch (error) {
      console.error("Error Adding User:", error.message);
      res.status(500).send({ error: "Failed to add user details" });
    }
  };
  

module.exports.updateUser = async(req , res) => {
    const {id ,firstName , lastName , email , department} = req.body;
     userModel
    .findByIdAndUpdate( req.params.id , {id ,firstName , lastName , email , department})
    .then(() => res.send("Updated Successfully"))
    .catch((err) => console.log(err))
}


module.exports.deleteUser = async(req , res) => {
    const {_id} = req.body;
    userModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => console.log(err))
}