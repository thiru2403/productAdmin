/// <reference types="multer" />
import { Upload } from './interface/upload.document';
import { UploadService } from './upload.service';
export declare class UploadController {
    private uploadService;
    constructor(uploadService: UploadService);
    uploadedFile(file: Express.Multer.File, data: any): Promise<Upload>;
    getAllupdate(): Promise<Upload[]>;
    updateOneupload(file: Express.Multer.File, id: string): Promise<Upload>;
}
