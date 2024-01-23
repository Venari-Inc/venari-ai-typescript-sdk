/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose } from "class-transformer";

/**
 * Internal server error
 */
export class SneakerIdBatchAsyncInferenceResponseResponseBody extends Error {
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

    constructor(err?: SneakerIdBatchAsyncInferenceResponseResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdBatchAsyncInferenceResponseResponseBody";
        Object.setPrototypeOf(this, SneakerIdBatchAsyncInferenceResponseResponseBody.prototype);
    }
}

/**
 * Unauthorized
 */
export class SneakerIdBatchAsyncInferenceResponseBody extends Error {
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

    constructor(err?: SneakerIdBatchAsyncInferenceResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdBatchAsyncInferenceResponseBody";
        Object.setPrototypeOf(this, SneakerIdBatchAsyncInferenceResponseBody.prototype);
    }
}

/**
 * Bad Request
 */
export class SneakerIdBatchAsyncResponseBody extends Error {
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

    constructor(err?: SneakerIdBatchAsyncResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdBatchAsyncResponseBody";
        Object.setPrototypeOf(this, SneakerIdBatchAsyncResponseBody.prototype);
    }
}
