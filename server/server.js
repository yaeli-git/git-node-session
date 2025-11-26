require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const PORT = process.env.PORT || 5000
const app = express()
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("This is home page")
})

app.use("/api/Product", require("./Routes/ProductRouter"))
app.use("/api/ShoppingCart", require("./Routes/ShoppingCartRouter"))
app.use("/api/User", require("./Routes/UserRouter"))
app.use("/api/Auth", require("./Routes/authRouter"))


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
mongoose.connection.on('error', err => {
    console.log(err)
})


