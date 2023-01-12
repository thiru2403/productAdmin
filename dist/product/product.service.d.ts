import { Model } from 'mongoose';
import { filterDto, projectionDto } from 'nestjs-keyset-paginator/dist';
import { FilterDTO } from './dto/filter.dto';
import { ProductDTO } from './dto/product.dto';
import { Product } from './interface/product.interface';
export declare class ProductService {
    private ProductModel;
    constructor(ProductModel: Model<Product>);
    createProducts(data: ProductDTO): Promise<Product>;
    findAll(skip?: number, limit?: number, start_key?: any, sort_field?: string, sort_order?: number, filter?: filterDto[], projection?: projectionDto[]): Promise<{
        docs: any;
        next_key: any[];
    }>;
    getOneProducts(id: string): Promise<Product>;
    UpdateOneProducts(id: string, data: ProductDTO): Promise<Product>;
    DeleteOneProducts(id: string): Promise<Product>;
    GetSearch_Filter(filter: FilterDTO): Promise<Product[]>;
    ProductFilter_PostMethod(filter: FilterDTO): Promise<Product[]>;
}
