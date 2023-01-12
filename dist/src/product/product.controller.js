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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("nestjs-keyset-paginator/dist");
const filter_dto_1 = require("./dto/filter.dto");
const product_dto_1 = require("./dto/product.dto");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createProducts(response, data) {
        try {
            let pp = await this.productService.createProducts(data);
            return response.status(common_1.HttpStatus.CREATED).json({
                sucess: true, data: [{ pp }], statuscode: '201 created'
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                sucess: false, data: [err.message], statuscode: '400 Bad_Request'
            });
        }
    }
    async getAllProduct(response, data) {
        var _a, _b;
        try {
            let pr = await this.productService.findAll(data.skip, data.limit, data === null || data === void 0 ? void 0 : data.start_key, (_a = data === null || data === void 0 ? void 0 : data.sort) === null || _a === void 0 ? void 0 : _a.field, (_b = data === null || data === void 0 ? void 0 : data.sort) === null || _b === void 0 ? void 0 : _b.order, data === null || data === void 0 ? void 0 : data.filter, data === null || data === void 0 ? void 0 : data.projection);
            return response.status(common_1.HttpStatus.CREATED).json({
                sucess: true, data: [{ pr }], statuscode: '201 ok'
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                sucess: false, data: [err.message], statuscode: '400 Bad_Request'
            });
        }
    }
    async getOneProduct(response, id) {
        console.log(id);
        try {
            let pp = await this.productService.getOneProducts(id);
            return response.status(common_1.HttpStatus.CREATED).json({
                sucess: true, data: [{ pp }], statuscode: '201 ok'
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                sucess: false, data: [err.message], statuscode: '400 Bad_Request'
            });
        }
    }
    async updateOneProduct(response, id, data) {
        try {
            let pr = await this.productService.UpdateOneProducts(id, data);
            return response.status(common_1.HttpStatus.CREATED).json({
                sucess: true, data: [{ pr }], statuscode: '201 ok'
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                sucess: false, data: [err.message], statuscode: '400 Bad_Request'
            });
        }
    }
    async deleteOneProduct(response, id) {
        try {
            let pp = await this.productService.DeleteOneProducts(id);
            return response.status(common_1.HttpStatus.CREATED).json({
                sucess: true, data: [{ pp }], statuscode: '201 ok'
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                sucess: false, data: [err.message], statuscode: '400 Bad_Request'
            });
        }
    }
    async getsearch_filter(response, filter) {
        console.log(filter);
        try {
            let pr = await this.productService.GetSearch_Filter(filter);
            return response.status(common_1.HttpStatus.CREATED).json({
                sucess: true, data: [{ pr }], statuscode: '201 ok'
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                sucess: false, data: [err.message], statuscode: '400 Bad_Request'
            });
        }
    }
    async ProductFilter_PostMethod(response, filter) {
        console.log(filter);
        try {
            let pr = await this.productService.ProductFilter_PostMethod(filter);
            return response.status(common_1.HttpStatus.CREATED).json({
                success: true, data: [{ pr }], statusCode: '201 created'
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                success: false, data: [err.message], statusCode: '400 Bad_Request'
            });
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.ProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProducts", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dist_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getOneProduct", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, product_dto_1.ProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateOneProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteOneProduct", null);
__decorate([
    (0, common_1.Get)("search/filter"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, filter_dto_1.FilterDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getsearch_filter", null);
__decorate([
    (0, common_1.Post)("search/filter"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, filter_dto_1.FilterDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "ProductFilter_PostMethod", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map