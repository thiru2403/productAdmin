import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { UploadSchema } from './schema/upload.schema';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: 'Upload', schema: UploadSchema }]),MulterModule.register({
        dest: './files',
    })],
    controllers:[UploadController],
    providers:[UploadService]
})
export class UploadModule {}
