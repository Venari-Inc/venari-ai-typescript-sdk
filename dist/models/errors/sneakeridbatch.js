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
exports.SneakerIdBatchResponseBody = exports.SneakerIdBatchInferenceResponseBody = exports.SneakerIdBatchInferenceResponseResponseBody = void 0;
var utils_1 = require("../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * Internal server error
 */
var SneakerIdBatchInferenceResponseResponseBody = /** @class */ (function (_super) {
    __extends(SneakerIdBatchInferenceResponseResponseBody, _super);
    function SneakerIdBatchInferenceResponseResponseBody(err) {
        var _this = _super.call(this) || this;
        if (err) {
            Object.assign(_this, err);
            _this.message = JSON.stringify((0, class_transformer_1.classToPlain)(err, { exposeUnsetFields: false, excludeExtraneousValues: true }));
        }
        _this.name = "SneakerIdBatchInferenceResponseResponseBody";
        Object.setPrototypeOf(_this, SneakerIdBatchInferenceResponseResponseBody.prototype);
        return _this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], SneakerIdBatchInferenceResponseResponseBody.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], SneakerIdBatchInferenceResponseResponseBody.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Exclude)(),
        __metadata("design:type", Object)
    ], SneakerIdBatchInferenceResponseResponseBody.prototype, "rawResponse", void 0);
    return SneakerIdBatchInferenceResponseResponseBody;
}(Error));
exports.SneakerIdBatchInferenceResponseResponseBody = SneakerIdBatchInferenceResponseResponseBody;
/**
 * Unauthorized
 */
var SneakerIdBatchInferenceResponseBody = /** @class */ (function (_super) {
    __extends(SneakerIdBatchInferenceResponseBody, _super);
    function SneakerIdBatchInferenceResponseBody(err) {
        var _this = _super.call(this) || this;
        if (err) {
            Object.assign(_this, err);
            _this.message = JSON.stringify((0, class_transformer_1.classToPlain)(err, { exposeUnsetFields: false, excludeExtraneousValues: true }));
        }
        _this.name = "SneakerIdBatchInferenceResponseBody";
        Object.setPrototypeOf(_this, SneakerIdBatchInferenceResponseBody.prototype);
        return _this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], SneakerIdBatchInferenceResponseBody.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], SneakerIdBatchInferenceResponseBody.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Exclude)(),
        __metadata("design:type", Object)
    ], SneakerIdBatchInferenceResponseBody.prototype, "rawResponse", void 0);
    return SneakerIdBatchInferenceResponseBody;
}(Error));
exports.SneakerIdBatchInferenceResponseBody = SneakerIdBatchInferenceResponseBody;
/**
 * Bad Request
 */
var SneakerIdBatchResponseBody = /** @class */ (function (_super) {
    __extends(SneakerIdBatchResponseBody, _super);
    function SneakerIdBatchResponseBody(err) {
        var _this = _super.call(this) || this;
        if (err) {
            Object.assign(_this, err);
            _this.message = JSON.stringify((0, class_transformer_1.classToPlain)(err, { exposeUnsetFields: false, excludeExtraneousValues: true }));
        }
        _this.name = "SneakerIdBatchResponseBody";
        Object.setPrototypeOf(_this, SneakerIdBatchResponseBody.prototype);
        return _this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], SneakerIdBatchResponseBody.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], SneakerIdBatchResponseBody.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Exclude)(),
        __metadata("design:type", Object)
    ], SneakerIdBatchResponseBody.prototype, "rawResponse", void 0);
    return SneakerIdBatchResponseBody;
}(Error));
exports.SneakerIdBatchResponseBody = SneakerIdBatchResponseBody;
