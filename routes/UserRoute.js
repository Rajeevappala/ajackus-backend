const {Router} = require("express");
const userModel = require("../models/userModel") 
const {getUser ,postUser ,updateUser ,deleteUser} = require("../controllers/userController")

const router = Router()
 

router.get("/users" ,getUser)
router.post("/postdata/users" , postUser)
router.put("/update/:id/users" , updateUser)
router.delete("/delete/:id/users" , deleteUser)


module.exports = router