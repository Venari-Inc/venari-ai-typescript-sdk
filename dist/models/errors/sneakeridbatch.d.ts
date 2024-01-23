import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class SneakerIdBatchInferenceResponseResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdBatchInferenceResponseResponseBody);
}
/**
 * Unauthorized
 */
export declare class SneakerIdBatchInferenceResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdBatchInferenceResponseBody);
}
/**
 * Bad Request
 */
export declare class SneakerIdBatchResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdBatchResponseBody);
}
