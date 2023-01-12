import { Model } from "mongoose";
import { Seeder } from "nestjs-seeder";
import { Product } from "./interface/product.interface";
export declare class ProductSeeder implements Seeder {
    private ProductModel;
    constructor(ProductModel: Model<Product>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
