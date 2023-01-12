
import mongoose from "mongoose";

export  const UploadSchema = new mongoose.Schema({
   
    productId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product',
    },
    originalName: String,
    fileName: String,
    fileMimeType: String,
    filePath:String,
    fileSize: Number,
    createdDate: Date,

    

})