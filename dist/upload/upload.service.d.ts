import { Model } from 'mongoose';
import { UploadDTO } from './dto/Upload.dto';
import { Upload } from './interface/upload.document';
export declare class UploadService {
    private UploadModel;
    constructor(UploadModel: Model<Upload>);
    uploadedFiles(data: any): Promise<Upload>;
    getAllupdate(): Promise<Upload[]>;
    UpdateOneUpload(data: UploadDTO, id: string): Promise<Upload>;
}
