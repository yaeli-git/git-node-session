const express = require("express")
const verifyJWTAdmin = require("../middleware/verifyJWTadmin")
const verifyJWT = require("../middleware/verifyJWT")
const router = express.Router()

router.get("/page", (req, res) => {
    res.send("This is the Product route")
})

const productsController = require("../Controllers/ProductController")

router.get("/", verifyJWT, productsController.getAllProduct)
router.get("/:id", verifyJWT, productsController.getProductById)
router.post("/", verifyJWTAdmin, productsController.createNewProduct)
router.put("/", verifyJWTAdmin, productsController.updateProduct)
router.put("/complete/:id", verifyJWTAdmin, productsController.updateProductComplete)
router.delete("/:id", verifyJWTAdmin, productsController.deleteProduct)

module.exports = router