/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose } from "class-transformer";

/**
 * Internal server error
 */
export class SneakerIdInferenceResponseResponseBody extends Error {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    constructor(err?: SneakerIdInferenceResponseResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdInferenceResponseResponseBody";
        Object.setPrototypeOf(this, SneakerIdInferenceResponseResponseBody.prototype);
    }
}

/**
 * Unauthorized
 */
export class SneakerIdInferenceResponseBody extends Error {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    constructor(err?: SneakerIdInferenceResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdInferenceResponseBody";
        Object.setPrototypeOf(this, SneakerIdInferenceResponseBody.prototype);
    }
}

/**
 * Bad Request
 */
export class SneakerIdResponseBody extends Error {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    constructor(err?: SneakerIdResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdResponseBody";
        Object.setPrototypeOf(this, SneakerIdResponseBody.prototype);
    }
}
