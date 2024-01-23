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
exports.Product = exports.Upcs = exports.ColorWeights = void 0;
var utils_1 = require("../../internal/utils");
var class_transformer_1 = require("class-transformer");
var ColorWeights = /** @class */ (function (_super) {
    __extends(ColorWeights, _super);
    function ColorWeights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "color_name" }),
        __metadata("design:type", String)
    ], ColorWeights.prototype, "colorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "weight" }),
        __metadata("design:type", Number)
    ], ColorWeights.prototype, "weight", void 0);
    return ColorWeights;
}(utils_1.SpeakeasyBase));
exports.ColorWeights = ColorWeights;
var Upcs = /** @class */ (function (_super) {
    __extends(Upcs, _super);
    function Upcs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "size" }),
        __metadata("design:type", Number)
    ], Upcs.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "upc" }),
        __metadata("design:type", String)
    ], Upcs.prototype, "upc", void 0);
    return Upcs;
}(utils_1.SpeakeasyBase));
exports.Upcs = Upcs;
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "product_id" }),
        __metadata("design:type", Number)
    ], Product.prototype, "productId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "style_id" }),
        __metadata("design:type", String)
    ], Product.prototype, "styleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "product_title" }),
        __metadata("design:type", String)
    ], Product.prototype, "productTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "brand_name" }),
        __metadata("design:type", String)
    ], Product.prototype, "brandName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "silhouette" }),
        __metadata("design:type", String)
    ], Product.prototype, "silhouette", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "gender" }),
        __metadata("design:type", String)
    ], Product.prototype, "gender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "age_group" }),
        __metadata("design:type", String)
    ], Product.prototype, "ageGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "shaft_style" }),
        __metadata("design:type", String)
    ], Product.prototype, "shaftStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "upper_material" }),
        __metadata("design:type", String)
    ], Product.prototype, "upperMaterial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "release_date" }),
        __metadata("design:type", String)
    ], Product.prototype, "releaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "colorway" }),
        __metadata("design:type", String)
    ], Product.prototype, "colorway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "designer" }),
        __metadata("design:type", String)
    ], Product.prototype, "designer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cat1" }),
        __metadata("design:type", String)
    ], Product.prototype, "cat1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cat2" }),
        __metadata("design:type", String)
    ], Product.prototype, "cat2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cat3" }),
        __metadata("design:type", String)
    ], Product.prototype, "cat3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cat4" }),
        __metadata("design:type", String)
    ], Product.prototype, "cat4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: ColorWeights }),
        (0, class_transformer_1.Expose)({ name: "color_weights" }),
        (0, class_transformer_1.Type)(function () { return ColorWeights; }),
        __metadata("design:type", Array)
    ], Product.prototype, "colorWeights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: Upcs }),
        (0, class_transformer_1.Expose)({ name: "upcs" }),
        (0, class_transformer_1.Type)(function () { return Upcs; }),
        __metadata("design:type", Array)
    ], Product.prototype, "upcs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "image" }),
        __metadata("design:type", String)
    ], Product.prototype, "image", void 0);
    return Product;
}(utils_1.SpeakeasyBase));
exports.Product = Product;