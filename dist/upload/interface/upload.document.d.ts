import mongoose, { Document } from 'mongoose';
export interface Upload extends Document {
    productId: {
        type: mongoose.Schema.Types.ObjectId;
        ref: 'product';
    };
    originalName: String;
    fileName: String;
    fileMimeType: String;
    filePath: String;
    fileSize: Number;
    createdDate: Date;
}
