const mongoose = require('mongoose')
const shoppingCartSchema = new mongoose.Schema({
    user: {
        type: mongoose.ObjectId, ref: 'User',
    },
    productId: {
        type: mongoose.ObjectId, ref: 'Product',
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        min:1,
        max:10,
        default:1
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('ShoppingCart', shoppingCartSchema)