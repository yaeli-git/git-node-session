const ShoppingCart = require("../Models/Product")

// קבלת כל המוצרים בעגלה
const getAllShoppingCart = async (req, res) => {
    const shoppingCart = await ShoppingCart.find({user: req.user._id}).lean()
    if (!shoppingCart?.length) {
        return res.status(400).json({ message: 'No ShoppingCart found' })
    }
    res.json(shoppingCart)
}


// קבלת מוצר לפי ת.ז
const getShoppingCartById = async (req, res) => {
    const { id } = req.params
    const shoppingCart = await ShoppingCart.findon({_id:id, user:req.user._id}).lean()
    if (!shoppingCart) {
        return res.status(400).json({ message: 'ShoppingCart not found' })
    }
    res.json(shoppingCart)
}

// הוספת מוצר חדש לעגלה
const createNewShoppingCart = async (req, res) => {
    const {  productId, price, count } = req.body
    if ( !productId || !price || !count) {
        return res.status(400).json({ message: 'user and productId and price and count are required' })
    }
    const shoppingCart = await ShoppingCart.create({
        user:req.user._id, productId, price, count
    })
    if (shoppingCart) {
        return res.status(201).json({ message: 'New shoppingCart created' })
    } else {
        return res.status(400).json({ message: 'Invalid shoppingCart' })
    }
}

// עידכון מוצר בעגלה
const updateShoppingCart = async (req, res) => {
    const { _id, user, productId, price, count } = req.body
    if (!_id || !user || !productId || !price) {
        return res.status(400).json({ message: 'fields are required' })
    }
    const shoppingCart = await ShoppingCart.findById(_id).exec()
    if (!shoppingCart) {
        return res.status(400).json({ message: 'shoppingCart not found' })
    }
    shoppingCart.user = user
    shoppingCart.productId = productId
    shoppingCart.price = price
    shoppingCart.count = count
    const updatedProduct = await shoppingCart.save()
    res.json(`'${updatedProduct.name}' updated`)
}

// עדכון שדה complete (אם קיים)
const updateShoppingCartComplete = async (req, res) => {
    const { id } = req.params
    const shoppingCart = await ShoppingCart.findById(id).exec()
    if (!shoppingCart) {
        return res.status(400).json({ message: 'shoppingCart not found' })
    }
    shoppingCart.complete = !shoppingCart.complete
    const updatedProduct = await shoppingCart.save()
    res.json(`'${updatedProduct.name}' updated`)
}

// מחיקת מוצר מהעגלה
const deleteShoppingCart = async (req, res) => {
    const { id } = req.body
    const shoppingCart = await ShoppingCart.findById(id).exec()
    if (!shoppingCart) {
        return res.status(400).json({ message: 'shoppingCart not found' })
    }
    const result = await shoppingCart.deleteOne()
    const reply = `shoppingCart '${result.name}' ID ${result._id} deleted`
    res.json(reply)
}


module.exports = {
    getAllShoppingCart,
    getShoppingCartById,
    createNewShoppingCart,
    updateShoppingCart,
    updateShoppingCartComplete,
    deleteShoppingCart
}
