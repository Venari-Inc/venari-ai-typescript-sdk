"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeQueryParams = exports.qpMetadataKey = void 0;
var utils_1 = require("./utils");
var requestbody_1 = require("./requestbody");
exports.qpMetadataKey = "queryParam";
var queryStringPrefix = "?";
var filterAndJoin = function (strings) {
    return strings.filter(function (s) { return !!s; }).join("&");
};
function serializeQueryParams(queryParams, globals) {
    var queryStringParts = [];
    if (!queryParams)
        return filterAndJoin(queryStringParts);
    var fieldNames = "__props__" in queryParams
        ? queryParams["__props__"].map(function (prop) { return prop.key; })
        : Object.getOwnPropertyNames(queryParams);
    fieldNames.forEach(function (fname) {
        var _a, _b, _c, _d, _e, _f, _g;
        var requestBodyAnn = Reflect.getMetadata(requestbody_1.requestMetadataKey, queryParams, fname);
        if (requestBodyAnn)
            return;
        var qpAnn = Reflect.getMetadata(exports.qpMetadataKey, queryParams, fname);
        if (!qpAnn)
            return { serialize: function () { return ""; } };
        var qpDecorator = (0, utils_1.parseParamDecorator)(qpAnn, fname, "form", true);
        if (!qpDecorator)
            return;
        var value = queryParams[fname];
        value = (0, utils_1.populateFromGlobals)(value, fname, "queryParam", globals);
        if (qpDecorator.Serialization === "json")
            queryStringParts.push(jsonSerializer((_a = {}, _a[qpDecorator.ParamName] = value, _a)));
        else {
            switch (qpDecorator.Style) {
                case "deepObject":
                    queryStringParts.push(deepObjectSerializer((_b = {}, _b[qpDecorator.ParamName] = value, _b)));
                    return;
                case "form":
                    if (!qpDecorator.Explode)
                        queryStringParts.push(noExplodeSerializer((_c = {}, _c[qpDecorator.ParamName] = value, _c)));
                    else
                        queryStringParts.push(formSerializerExplode((_d = {}, _d[qpDecorator.ParamName] = value, _d)));
                    return;
                case "pipeDelimited":
                    if (!qpDecorator.Explode) {
                        queryStringParts.push(noExplodeSerializer((_e = {}, _e[qpDecorator.ParamName] = value, _e), "|"));
                    }
                    else {
                        queryStringParts.push(formSerializerExplode((_f = {}, _f[qpDecorator.ParamName] = value, _f)));
                    }
                    return;
                default:
                    queryStringParts.push(formSerializerExplode((_g = {}, _g[qpDecorator.ParamName] = value, _g)));
            }
        }
    });
    return queryStringPrefix + filterAndJoin(queryStringParts);
}
exports.serializeQueryParams = serializeQueryParams;
// TODO: Add support for disabling percent encoding for reserved characters
function jsonSerializer(params) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        query.push("".concat(key, "=").concat(encodeURIComponent(JSON.stringify(value))));
    });
    return filterAndJoin(query);
}
// TODO: Add support for disabling percent encoding for reserved characters
function noExplodeSerializer(params, delimiter) {
    if (delimiter === void 0) { delimiter = ","; }
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        if (!(0, utils_1.shouldQueryParamSerialize)(value))
            return;
        if (value !== Object(value))
            query.push("".concat(key, "=").concat(encodeURIComponent((0, utils_1.valToString)(value))));
        else if (Array.isArray(value)) {
            var values = value.map(function (aValue) { return aValue; }).join(delimiter);
            query.push("".concat(key, "=").concat(encodeURIComponent(values)));
        }
        else {
            var values = Object.getOwnPropertyNames(value)
                .map(function (paramKey) {
                var qpAnn = Reflect.getMetadata(exports.qpMetadataKey, value, paramKey);
                var qpDecorator = (0, utils_1.parseParamDecorator)(qpAnn, paramKey, "form", true);
                if (qpDecorator == null)
                    return;
                var key = qpDecorator.ParamName || paramKey;
                return "".concat(key).concat(delimiter).concat((0, utils_1.valToString)(value[paramKey]));
            })
                .join(delimiter);
            query.push("".concat(key, "=").concat(encodeURIComponent(values)));
        }
    });
    return filterAndJoin(query);
}
// TODO: Add support for disabling percent encoding for reserved characters
function formSerializerExplode(params) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        if (!(0, utils_1.shouldQueryParamSerialize)(value))
            return;
        if (value !== Object(value))
            query.push("".concat(key, "=").concat(encodeURIComponent(value)));
        else if (Array.isArray(value)) {
            query.push(value
                .map(function (aValue) { return "".concat(key, "=").concat(encodeURIComponent((0, utils_1.valToString)(aValue))); })
                .join("&"));
        }
        else
            query.push(Object.getOwnPropertyNames(value)
                .map(function (paramKey) {
                var qpAnn = Reflect.getMetadata(exports.qpMetadataKey, value, paramKey);
                var qpDecorator = (0, utils_1.parseParamDecorator)(qpAnn, paramKey, "form", true);
                if (qpDecorator == null)
                    return;
                var key = qpDecorator.ParamName || paramKey;
                return "".concat(key, "=").concat(encodeURIComponent((0, utils_1.valToString)(value[paramKey])));
            })
                .join("&"));
    });
    return filterAndJoin(query);
}
// TODO: Add support for disabling percent encoding for reserved characters
function deepObjectSerializer(params) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        if (!(0, utils_1.shouldQueryParamSerialize)(value))
            return;
        if (value !== Object(value))
            query.push("".concat(key, "=").concat(encodeURIComponent(value)));
        else if (Array.isArray(value)) {
            query.push(value
                .map(function (_a) {
                var _b = __read(_a, 2), objKey = _b[0], objValue = _b[1];
                return "".concat(key, "[").concat(objKey, "]=").concat(encodeURIComponent((0, utils_1.valToString)(objValue)));
            })
                .join("&"));
        }
        else
            query.push(Object.getOwnPropertyNames(value)
                .map(function (paramKey) {
                var qpAnn = Reflect.getMetadata(exports.qpMetadataKey, value, paramKey);
                var qpDecorator = (0, utils_1.parseParamDecorator)(qpAnn, paramKey, "form", true);
                if (qpDecorator == null)
                    return;
                // For deep objects, arr is wrapped inside object
                if (Array.isArray(value[paramKey]))
                    return value[paramKey]
                        .map(function (arrValue) {
                        return "".concat(key, "[").concat(paramKey, "]=").concat(encodeURIComponent((0, utils_1.valToString)(arrValue)));
                    })
                        .join("&");
                return "".concat(key, "[").concat(paramKey, "]=").concat(encodeURIComponent((0, utils_1.valToString)(value[paramKey])));
            })
                .join("&"));
    });
    return filterAndJoin(query);
}
