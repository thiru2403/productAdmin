import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadModule } from './upload/upload.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb+srv://admin:sTFcBIxt3bCAdsDl@cluster0.4xuwuro.mongodb.net/product_admin?retryWrites=true&w=majority'), UploadModule],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
