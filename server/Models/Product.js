const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    codeProduct: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['Drinks',"Meat Hospitality Trays", "Quiches and Pastas", "Savory", "Salads Vegetables and Fruits", "Sweet"],
        required: true,
    },
    img: {
        type: String,
    },
    discreption: {
        type: String,
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('Product', productSchema)