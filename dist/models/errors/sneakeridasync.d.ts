import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class SneakerIdAsyncInferenceResponseResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdAsyncInferenceResponseResponseBody);
}
/**
 * Unauthorized
 */
export declare class SneakerIdAsyncInferenceResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdAsyncInferenceResponseBody);
}
/**
 * Bad Request
 */
export declare class SneakerIdAsyncResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdAsyncResponseBody);
}
