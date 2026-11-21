const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },

    sku: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true
    },

    category: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    quantity: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be an integer"
        }
    },

    reorderLevel: {
        type: Number,
        required: true,
        min: 0,
        default: 10
    },

    supplier: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true
});

productSchema.virtual("stockValue").get(function () {
    return this.price * this.quantity;
});

productSchema.set("toJSON", { virtuals: true });
productSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Product", productSchema);