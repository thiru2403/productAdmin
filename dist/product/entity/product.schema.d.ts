import mongoose from "mongoose";
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userReviews: {
        reply: {
            createdDate?: Date;
            Comment?: string;
            user_Id?: mongoose.Types.ObjectId;
        }[];
        rating: {
            user_Id?: mongoose.Types.ObjectId;
            rating?: number;
        }[];
        comments?: string;
        likes?: number;
    }[];
    productName?: string;
    productImage?: string;
    price?: number;
    brand?: string;
    manufacture?: string;
    overAllRating?: number;
    productSpec?: {
        height?: number;
        width?: number;
        color?: string;
    };
}>;
