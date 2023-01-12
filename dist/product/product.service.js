"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dist_1 = require("nestjs-keyset-paginator/dist");
let ProductService = class ProductService {
    constructor(ProductModel) {
        this.ProductModel = ProductModel;
    }
    async createProducts(data) {
        data.createddate = new Date();
        console.log(data);
        const product = new this.ProductModel(data);
        return await product.save();
    }
    ;
    async findAll(skip = 0, limit = 3, start_key, sort_field, sort_order, filter, projection) {
        return await (0, dist_1.paginate)(this.ProductModel, skip, limit, start_key, sort_field, sort_order, filter, projection);
    }
    async getOneProducts(id) {
        return await this.ProductModel.findById(id).exec();
    }
    async UpdateOneProducts(id, data) {
        return await this.ProductModel.findOneAndUpdate({ id: id }, data, { new: true }).exec();
    }
    async DeleteOneProducts(id) {
        return await this.ProductModel.findOneAndDelete({ _id: id }).exec();
    }
    async GetSearch_Filter(filter) {
        console.log(filter.minPrice);
        return await this.ProductModel.find(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, filter.minPrice ? { price: { $gt: filter.minPrice } } : {}), filter.maxPrice ? { price: { $lt: filter.maxPrice } } : {}), filter.brand ? { brand: filter.brand } : {}), filter.productName ? { productName: filter.productName } : {}), filter.overAllRating ? { rating: filter.overAllRating } : {})).exec();
    }
    async ProductFilter_PostMethod(filter) {
        console.log(filter.minPrice);
        return await this.ProductModel.find(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, filter.productName ? { productName: { $regex: filter.productName, $options: 'i' } } : {}), filter.minPrice ? { price: { $gt: filter.minPrice } } : {}), filter.maxPrice ? { price: { $lt: filter.maxPrice } } : {}), filter.brand ? { brand: filter.brand } : {}), filter.overAllRating ? { rating: filter.overAllRating } : {})).exec();
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map