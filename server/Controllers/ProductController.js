const Products = require("../Models/Product")

// קבלת כל המוצרים
const getAllProduct = async (req, res) => {
    const products = await Products.find().lean()
    if (!products?.length) {
        return res.status(400).json({ message: 'No products found' })
    }
    res.json(products)
}

// קבלת מוצר לפי ת.ז
const getProductById = async (req, res) => {
    const { id } = req.params
    const product = await Products.findById(id).lean()
    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }
    res.json(product)
}

// יצירת מוצר חדשה
const createNewProduct = async (req, res) => {
    const { name, codeProduct, price, category, img, discreption } = req.body
    if (!name || !codeProduct || !price || !category) {
        return res.status(400).json({ message: 'name and codeProduct and price and category are required' })
    }
    const product = await Products.create({
        name, codeProduct, price, category, img, discreption
    })
    if (product) {
        return res.status(201).json({ message: 'New product created' })
    } else {
        return res.status(400).json({ message: 'Invalid product' })
    }
}

// עידכון מוצר
const updateProduct = async (req, res) => {
    const {_id, name, codeProduct, price, category, img, discreption } = req.body
    if (!_id|| !name) {
        return res.status(400).json({ message: 'fields are required' })
    }
    const product = await Products.findById(_id).exec()
    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }
    product.name = name
    product.codeProduct = codeProduct
    product.price = price
    product.category = category
    product.img = img
    product.discreption = discreption
    const updatedProduct = await product.save()
    res.json(`'${updatedProduct.name}' updated`)
}

// עדכון שדה complete (אם קיים)
const updateProductComplete = async (req, res) => {
    const { id } = req.params
    const product = await Products.findById(id).exec()
    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }
    product.complete = !product.complete
    const updatedProduct = await product.save()
    res.json(`'${updatedProduct.name}' updated`)
}

// מחיקת מוצר
const deleteProduct = async (req, res) => {
    const { id } = req.body
    const product = await Products.findById(id).exec()
    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }
    const result = await product.deleteOne()
    const reply = `Product '${result.name}' ID ${result._id} deleted`
    res.json(reply)
}


module.exports = {
    getAllProduct,
    getProductById,
    createNewProduct,
    updateProduct,
    updateProductComplete,
    deleteProduct
}
