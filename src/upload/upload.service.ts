import { Injectable, Req, UploadedFiles } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { UploadDTO } from './dto/Upload.dto';
import { Upload } from './interface/upload.document';
@Injectable()
export class UploadService {
    constructor(@InjectModel('Upload') private UploadModel: Model<Upload>) {}


    async uploadedFiles(data):Promise<Upload>{
      data.createdDate = new Date();
      console.log(data);
     const st = new this.UploadModel(data)
     console.log(st);
     
     return st.save();
    }

     async getAllupdate():Promise<Upload[]>{
        return await this.UploadModel.find().exec()
     }

     async UpdateOneUpload(data:UploadDTO,id:string):Promise<Upload>{
      return await this.UploadModel.findOneAndUpdate({id:id},data,{new:true}).exec()
   }
}
