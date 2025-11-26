const express = require("express")
const router = express.Router()

router.get("/page", (req,res)=>{
res.send("This is the User route")
})

const userController = require("../Controllers/UserController")

router.post("/", userController.createNewUser)

module.exports = router