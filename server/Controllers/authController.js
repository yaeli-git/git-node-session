const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../Models/User")
const login = async (req, res) => {

    const {userName, password} = req.body
    if(!userName || !password)
    {
        return res.status(400).json({message: "All fields arr required"})
    }
    const foundedUser = await User.findOne({userName:userName}).lean()

    if(!foundedUser || !foundedUser.active)
    {
        return res.status(401).json({message: "Unauthorized"})
    }

    const match = await bcrypt.compare(password, foundedUser.password)

    if(!match)
    {
        return res.status(401).json({message: "Unauthorized"})
    }

    const userInfo = {
        _id: foundedUser._id,
        name: foundedUser.name,
        userName: foundedUser.userName,
        roles: foundedUser.roles,
        email: foundedUser.email,
    }
    const accessToken = await jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken})
}

const register = async (req, res) => {
    
    const {userName, password, name, email, phone} = req.body
    if (!userName || !password || !name || !email || !phone)
    {
        return res.status(400).json({message: "All fields arr required"})
    }
    const duplicateUser=await User.findOne({userName:userName}).lean()
    if(duplicateUser)
    {
        return res.status(409).json({message: "Duplicate User"})
    }

    const hashPassword=await bcrypt.hash(password, 10)

    const user = await User.create({userName, password:hashPassword, name, email, phone})
    if(!user)
    {
        return res.status(400).json({message: "Bed request"})
    }

    res.json({_id: user._id, name: user.name, userName: user.userName})
}
module.exports = {login, register}