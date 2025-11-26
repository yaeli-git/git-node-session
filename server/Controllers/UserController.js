const User = require("../Models/User")
const bcrypt = require("bcrypt")

const createNewUser = async (req, res) => {
    const {userName, password, name, email, phone, roles} = req.body
    if (!userName || !password || !name || !email || !phone || !roles) {
        return res.status(400).json({ message: 'fields are required' })
    }
    const hashPassword=await bcrypt.hash(password, 10)

    const user = await User.create({userName, password:hashPassword, name, email, phone, roles})
    if(!user)
    {
        return res.status(400).json({message: "Bed request"})
    }

    res.json({_id: user._id, name: user.name, userName: user.userName})

}
module.exports = {createNewUser}