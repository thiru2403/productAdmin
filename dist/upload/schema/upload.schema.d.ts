import mongoose from "mongoose";
export declare const UploadSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    originalName?: string;
    fileName?: string;
    fileMimeType?: string;
    filePath?: string;
    fileSize?: number;
    createdDate?: Date;
    productId?: mongoose.Types.ObjectId;
}>;
