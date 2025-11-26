const jwt = require("jsonwebtoken")
const verifyJWTAdmin = (req, res, next)=>{
     const authHeader = req.headers.Authorization || req.headers.authorization
    if(!authHeader?.startsWith("Bearer ")){
        return res.status(401).json({message: "Unauhorized"})
    }
    const token = authHeader.split(" ")[1]

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET, 
        (err, decode)=>{
            if(err) return res.status(401).json({message: "Forbidden"})
            req.user = decode

            if(!req.user.roles || req.user.roles!=="Admin")
            {
                return res.status(403).json({message: "Forbidden Admin"})
            }
            next()  
            }
    )
}   

module.exports = verifyJWTAdmin