import mongoose, { Document } from 'mongoose';
export declare class Product extends Document {
    productName: string;
    productImage: String;
    price: Number;
    brand: String;
    manufacture: String;
    productSpec: {
        height: Number;
        width: Number;
        color: string;
    };
    userReviews: [
        {
            comments: String;
            likes: Number;
            reply: [
                {
                    Comment: String;
                    user_Id: {
                        type: mongoose.Schema.Types.ObjectId;
                        ref: 'Login';
                    };
                    createdDate: Date;
                }
            ];
            rating: [
                {
                    rating: Number;
                    user_Id: {
                        type: mongoose.Schema.Types.ObjectId;
                        ref: 'Login';
                    };
                }
            ];
        }
    ];
    overAllRating: Number;
}
