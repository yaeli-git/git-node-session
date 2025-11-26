const express = require("express")
const verifyJWT = require("../middleware/verifyJWT")
const router = express.Router()

router.get("/page", (req,res)=>{
res.send("This is the ShoppingCart route")
})

const shoppingCartController = require("../Controllers/ShoppingCartController")

router.use(verifyJWT)

router.get("/",shoppingCartController.getAllShoppingCart)
router.get("/:id", shoppingCartController.getShoppingCartById)
router.post("/", shoppingCartController.createNewShoppingCart)
router.put("/",shoppingCartController.updateShoppingCart)
router.put("/complete/:id",shoppingCartController.updateShoppingCartComplete)
router.delete("/:id",shoppingCartController.deleteShoppingCart)


module.exports = router