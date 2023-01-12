import { PaginationDto } from 'nestjs-keyset-paginator/dist';
import { FilterDTO } from './dto/filter.dto';
import { ProductDTO } from './dto/product.dto';
import { Product } from './interface/product.interface';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProducts(response: any, data: ProductDTO): Promise<Product>;
    getAllProduct(response: any, data: PaginationDto): Promise<Product[]>;
    getOneProduct(response: any, id: string): Promise<Product>;
    updateOneProduct(response: any, id: string, data: ProductDTO): Promise<Product>;
    deleteOneProduct(response: any, id: string): Promise<Product>;
    getsearch_filter(response: any, filter: FilterDTO): Promise<Product[]>;
    ProductFilter_PostMethod(response: any, filter: FilterDTO): Promise<Product>;
}
