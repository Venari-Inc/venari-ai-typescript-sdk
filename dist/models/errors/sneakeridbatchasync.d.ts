import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class SneakerIdBatchAsyncInferenceResponseResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdBatchAsyncInferenceResponseResponseBody);
}
/**
 * Unauthorized
 */
export declare class SneakerIdBatchAsyncInferenceResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdBatchAsyncInferenceResponseBody);
}
/**
 * Bad Request
 */
export declare class SneakerIdBatchAsyncResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdBatchAsyncResponseBody);
}
