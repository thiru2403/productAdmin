import { Body, Controller, Get, Param, Post, Put, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadDTO } from './dto/Upload.dto';
import { imageFileFilter } from './file.helper';
import { Upload } from './interface/upload.document';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    constructor(private uploadService:UploadService){}

    @Post()
    @UseInterceptors(
        FileInterceptor('image', {
          storage: diskStorage({
            destination: './files',
            filename: function(req, file, cb) {
              cb(null, file.originalname)
            }
          }),
         limits: {fileSize: 2000000},
          fileFilter: imageFileFilter,
        }),
      )
      async uploadedFile(@UploadedFile() file: Express.Multer.File,@Body() data:any):Promise<Upload> {

        console.log(file,data);

        const response = {
          originalName: file.originalname,
          fileName: file.filename,
          fileMimeType:file.mimetype,
          fileSize: file.size,
          productId: data.product_Id
        };
        return await this.uploadService.uploadedFiles(response)
}

@Get()
async getAllupdate():Promise<Upload[]>{
    return await this.uploadService.getAllupdate()
}

@Put(':id')
@UseInterceptors(
  FileInterceptor('image', {
    storage: diskStorage({
      destination: './files',
      filename: function(req, file, cb) {
        cb(null, file.filename)
      }
    }),
   limits: {fileSize: 2000000},
    fileFilter: imageFileFilter,
  })
  )
async updateOneupload(@UploadedFile() file: Express.Multer.File,@Param('id') id:string):Promise<Upload>{
 
 const data = {
  originalName: file.originalname,
  fileName: file.filename,
  fileMimeType:file.mimetype,
  filePath: file.path,
  fileSize: file.size,
  
};
  return await this.uploadService.UpdateOneUpload(data,id)
}

}