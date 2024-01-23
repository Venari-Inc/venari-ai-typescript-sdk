"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSimilarByItemResults = exports.Products = exports.SearchSimilarByItemResultsProducts = void 0;
var utils_1 = require("../../internal/utils");
var class_transformer_1 = require("class-transformer");
var SearchSimilarByItemResultsProducts = /** @class */ (function (_super) {
    __extends(SearchSimilarByItemResultsProducts, _super);
    function SearchSimilarByItemResultsProducts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "rank" }),
        __metadata("design:type", Number)
    ], SearchSimilarByItemResultsProducts.prototype, "rank", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "brand" }),
        __metadata("design:type", String)
    ], SearchSimilarByItemResultsProducts.prototype, "brand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "image" }),
        __metadata("design:type", String)
    ], SearchSimilarByItemResultsProducts.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "price" }),
        __metadata("design:type", Number)
    ], SearchSimilarByItemResultsProducts.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], SearchSimilarByItemResultsProducts.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], SearchSimilarByItemResultsProducts.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "external_id" }),
        __metadata("design:type", String)
    ], SearchSimilarByItemResultsProducts.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "product_url" }),
        __metadata("design:type", String)
    ], SearchSimilarByItemResultsProducts.prototype, "productUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "product_type" }),
        __metadata("design:type", String)
    ], SearchSimilarByItemResultsProducts.prototype, "productType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], SearchSimilarByItemResultsProducts.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "score" }),
        __metadata("design:type", Number)
    ], SearchSimilarByItemResultsProducts.prototype, "score", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "alt_text" }),
        __metadata("design:type", String)
    ], SearchSimilarByItemResultsProducts.prototype, "altText", void 0);
    return SearchSimilarByItemResultsProducts;
}(utils_1.SpeakeasyBase));
exports.SearchSimilarByItemResultsProducts = SearchSimilarByItemResultsProducts;
var Products = /** @class */ (function (_super) {
    __extends(Products, _super);
    function Products() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "results" }),
        __metadata("design:type", Number)
    ], Products.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: SearchSimilarByItemResultsProducts }),
        (0, class_transformer_1.Expose)({ name: "products" }),
        (0, class_transformer_1.Type)(function () { return SearchSimilarByItemResultsProducts; }),
        __metadata("design:type", Array)
    ], Products.prototype, "products", void 0);
    return Products;
}(utils_1.SpeakeasyBase));
exports.Products = Products;
var SearchSimilarByItemResults = /** @class */ (function (_super) {
    __extends(SearchSimilarByItemResults, _super);
    function SearchSimilarByItemResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "products" }),
        (0, class_transformer_1.Type)(function () { return Products; }),
        __metadata("design:type", Products)
    ], SearchSimilarByItemResults.prototype, "products", void 0);
    return SearchSimilarByItemResults;
}(utils_1.SpeakeasyBase));
exports.SearchSimilarByItemResults = SearchSimilarByItemResults;