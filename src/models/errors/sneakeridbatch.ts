/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose } from "class-transformer";

/**
 * Internal server error
 */
export class SneakerIdBatchInferenceResponseResponseBody extends Error {
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

    constructor(err?: SneakerIdBatchInferenceResponseResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdBatchInferenceResponseResponseBody";
        Object.setPrototypeOf(this, SneakerIdBatchInferenceResponseResponseBody.prototype);
    }
}

/**
 * Unauthorized
 */
export class SneakerIdBatchInferenceResponseBody extends Error {
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

    constructor(err?: SneakerIdBatchInferenceResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdBatchInferenceResponseBody";
        Object.setPrototypeOf(this, SneakerIdBatchInferenceResponseBody.prototype);
    }
}

/**
 * Bad Request
 */
export class SneakerIdBatchResponseBody extends Error {
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

    constructor(err?: SneakerIdBatchResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdBatchResponseBody";
        Object.setPrototypeOf(this, SneakerIdBatchResponseBody.prototype);
    }
}