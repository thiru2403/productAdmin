import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { filterDto, paginate, PaginationDto, projectionDto } from 'nestjs-keyset-paginator/dist';
import { FilterDTO } from './dto/filter.dto';
import { ProductDTO } from './dto/product.dto';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private ProductModel: Model<Product>){}

    async createProducts(data:ProductDTO):Promise<Product>{
        data.createddate = new Date();
        console.log(data);
        const product = new this.ProductModel(data);
            return await product.save();
       };

    async findAll( skip = 0,
        limit = 3,
        start_key?,
        sort_field?: string,
        sort_order?: number,
        filter?: filterDto[],
        projection?: projectionDto[]) {
        return await paginate(this.ProductModel,skip,limit,start_key, sort_field, sort_order, filter, projection)
      }
    
    async getOneProducts(id:string):Promise<Product>{
        
        return await this.ProductModel.findById(id).exec()
       
    }
    async UpdateOneProducts(id:string , data:ProductDTO):Promise<Product>{
        
        return await this.ProductModel.findOneAndUpdate({id:id},data,{new:true}).exec();
   
}
    async DeleteOneProducts(id:string):Promise<Product>{
        
        return await this.ProductModel.findOneAndDelete({_id:id}).exec()
 
}
    


async GetSearch_Filter(filter: FilterDTO):Promise<Product[]>{
   console.log(filter.minPrice);
   
    return await this.ProductModel.find(
        {...filter.minPrice ? {price: {$gt: filter.minPrice} } : {},
        ...filter.maxPrice ? {price: {$lt: filter.maxPrice} } : {},
        ...filter.brand ?{ brand: filter.brand}  : {},
        ...filter.productName ? {productName: filter.productName} : {},
        ...filter.overAllRating ? { rating: filter.overAllRating} : {}
       }).exec()

}
 
    
   async ProductFilter_PostMethod( filter:FilterDTO):Promise<Product[]>{
    console.log(filter.minPrice);

    return await this.ProductModel.find(        
        {
            ...filter.productName ? { productName: {$regex: filter.productName, $options: 'i'} } : {},
            ...filter.minPrice ? { price: { $gt: filter.minPrice } } : {},
            ...filter.maxPrice ? { price: { $lt: filter.maxPrice } } : {},
            ...filter.brand ? { brand: filter.brand } : {},
            ...filter.overAllRating ? { rating: filter.overAllRating } : {}
        }).exec()
   }
}

