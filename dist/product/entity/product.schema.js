"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.default.Schema({
    productName: String,
    productImage: String,
    price: Number,
    brand: String,
    manufacture: String,
    productSpec: {
        height: Number,
        width: Number,
        color: String
    },
    userReviews: [{
            comments: String,
            likes: Number,
            reply: [
                {
                    Comment: String,
                    user_Id: {
                        type: mongoose_1.default.Schema.Types.ObjectId,
                        ref: 'Login',
                    },
                    createdDate: Date,
                },
            ],
            rating: [
                {
                    rating: Number,
                    user_Id: {
                        type: mongoose_1.default.Schema.Types.ObjectId,
                        ref: 'Login',
                    },
                }
            ]
        }],
    overAllRating: Number,
});
//# sourceMappingURL=product.schema.js.map