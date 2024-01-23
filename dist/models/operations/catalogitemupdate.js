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
exports.CatalogItemUpdateResponse = exports.CatalogItemUpdateResponseBody = exports.CatalogItemUpdateStatus = exports.CatalogItemUpdateRequestBody = exports.Status = void 0;
var utils_1 = require("../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * The status of the item.
 */
var Status;
(function (Status) {
    Status["Active"] = "active";
    Status["Inactive"] = "inactive";
    Status["Deleted"] = "deleted";
})(Status = exports.Status || (exports.Status = {}));
var CatalogItemUpdateRequestBody = /** @class */ (function (_super) {
    __extends(CatalogItemUpdateRequestBody, _super);
    function CatalogItemUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "external_id" }),
        __metadata("design:type", String)
    ], CatalogItemUpdateRequestBody.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], CatalogItemUpdateRequestBody.prototype, "status", void 0);
    return CatalogItemUpdateRequestBody;
}(utils_1.SpeakeasyBase));
exports.CatalogItemUpdateRequestBody = CatalogItemUpdateRequestBody;
/**
 * The status of the the operation.
 */
var CatalogItemUpdateStatus;
(function (CatalogItemUpdateStatus) {
    CatalogItemUpdateStatus["Success"] = "success";
})(CatalogItemUpdateStatus = exports.CatalogItemUpdateStatus || (exports.CatalogItemUpdateStatus = {}));
/**
 * Successfully updated catalog item
 */
var CatalogItemUpdateResponseBody = /** @class */ (function (_super) {
    __extends(CatalogItemUpdateResponseBody, _super);
    function CatalogItemUpdateResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], CatalogItemUpdateResponseBody.prototype, "status", void 0);
    return CatalogItemUpdateResponseBody;
}(utils_1.SpeakeasyBase));
exports.CatalogItemUpdateResponseBody = CatalogItemUpdateResponseBody;
var CatalogItemUpdateResponse = /** @class */ (function (_super) {
    __extends(CatalogItemUpdateResponse, _super);
    function CatalogItemUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CatalogItemUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CatalogItemUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CatalogItemUpdateResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CatalogItemUpdateResponseBody)
    ], CatalogItemUpdateResponse.prototype, "object", void 0);
    return CatalogItemUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.CatalogItemUpdateResponse = CatalogItemUpdateResponse;