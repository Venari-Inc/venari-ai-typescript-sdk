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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SneakerIdResponse = exports.SneakerIdResponseBody = void 0;
var utils_1 = require("../../internal/utils");
var components = __importStar(require("../../models/components"));
var class_transformer_1 = require("class-transformer");
/**
 * Successful processing of image URL
 */
var SneakerIdResponseBody = /** @class */ (function (_super) {
    __extends(SneakerIdResponseBody, _super);
    function SneakerIdResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "product" }),
        (0, class_transformer_1.Type)(function () { return components.Product; }),
        __metadata("design:type", components.Product)
    ], SneakerIdResponseBody.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "custom" }),
        __metadata("design:type", Object)
    ], SneakerIdResponseBody.prototype, "custom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: components.Product }),
        (0, class_transformer_1.Expose)({ name: "variants" }),
        (0, class_transformer_1.Type)(function () { return components.Product; }),
        __metadata("design:type", Array)
    ], SneakerIdResponseBody.prototype, "variants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "confidence" }),
        __metadata("design:type", Number)
    ], SneakerIdResponseBody.prototype, "confidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "meta" }),
        (0, class_transformer_1.Type)(function () { return components.MetaData; }),
        __metadata("design:type", components.MetaData)
    ], SneakerIdResponseBody.prototype, "meta", void 0);
    return SneakerIdResponseBody;
}(utils_1.SpeakeasyBase));
exports.SneakerIdResponseBody = SneakerIdResponseBody;
var SneakerIdResponse = /** @class */ (function (_super) {
    __extends(SneakerIdResponse, _super);
    function SneakerIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SneakerIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SneakerIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SneakerIdResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SneakerIdResponseBody)
    ], SneakerIdResponse.prototype, "object", void 0);
    return SneakerIdResponse;
}(utils_1.SpeakeasyBase));
exports.SneakerIdResponse = SneakerIdResponse;
