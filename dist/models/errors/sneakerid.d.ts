import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class SneakerIdInferenceResponseResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdInferenceResponseResponseBody);
}
/**
 * Unauthorized
 */
export declare class SneakerIdInferenceResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdInferenceResponseBody);
}
/**
 * Bad Request
 */
export declare class SneakerIdResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SneakerIdResponseBody);
}
