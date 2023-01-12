"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
const nestjs_seeder_1 = require("nestjs-seeder");
const product_schema_1 = require("./entity/product.schema");
const product_seeder_1 = require("./product.seeder");
(0, nestjs_seeder_1.seeder)({
    imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://admin:sTFcBIxt3bCAdsDl@cluster0.4xuwuro.mongodb.net/product_admin?retryWrites=true&w=majority'),
        mongoose_1.MongooseModule.forFeature([{ name: 'Product', schema: product_schema_1.ProductSchema }])]
}).run([product_seeder_1.ProductSeeder]);
//# sourceMappingURL=seed.js.map