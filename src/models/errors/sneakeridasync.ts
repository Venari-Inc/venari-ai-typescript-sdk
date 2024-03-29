/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose } from "class-transformer";

/**
 * Internal server error
 */
export class SneakerIdAsyncInferenceResponseResponseBody extends Error {
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

    constructor(err?: SneakerIdAsyncInferenceResponseResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdAsyncInferenceResponseResponseBody";
        Object.setPrototypeOf(this, SneakerIdAsyncInferenceResponseResponseBody.prototype);
    }
}

/**
 * Unauthorized
 */
export class SneakerIdAsyncInferenceResponseBody extends Error {
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

    constructor(err?: SneakerIdAsyncInferenceResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdAsyncInferenceResponseBody";
        Object.setPrototypeOf(this, SneakerIdAsyncInferenceResponseBody.prototype);
    }
}

/**
 * Bad Request
 */
export class SneakerIdAsyncResponseBody extends Error {
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

    constructor(err?: SneakerIdAsyncResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "SneakerIdAsyncResponseBody";
        Object.setPrototypeOf(this, SneakerIdAsyncResponseBody.prototype);
    }
}
