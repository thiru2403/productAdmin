"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UploadSchema = new mongoose_1.default.Schema({
    productId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'product',
    },
    originalName: String,
    fileName: String,
    fileMimeType: String,
    filePath: String,
    fileSize: Number,
    createdDate: Date,
});
//# sourceMappingURL=upload.schema.js.map