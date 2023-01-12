import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({

    
   productName: String,
   productImage:String,
    price: Number,
    brand:String,
    manufacture: String,
    productSpec : {
                 height: Number,
                 width : Number,
                 color : String
        },

      

    userReviews : [{
            comments: String,
            likes: Number,
            reply: [
                {
                        Comment:String,
                        user_Id: {
                                type: mongoose.Schema.Types.ObjectId,
                                ref:'Login',
                            },
                          
                            createdDate: Date,
                },
            ],
          
            rating:[
                {
                rating: Number,
            

                user_Id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'Login',
                },

                }

            ]
    }],

    overAllRating:Number,
 
  });