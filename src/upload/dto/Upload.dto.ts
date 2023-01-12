import { IsNotEmpty } from "class-validator";
import mongoose from "mongoose";

export class UploadDTO{
    

    originalName: string;
    fileName: string;
    fileMimeType: string;
    filePath:string;
    fileSize:number;
    //createdDate: Date;
    
}


