import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class ProductDataSearchResponseResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: ProductDataSearchResponseResponseBody);
}
/**
 * Unauthorized
 */
export declare class ProductDataSearchResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: ProductDataSearchResponseBody);
}
/**
 * Bad Request
 */
export declare class ProductDataResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: ProductDataResponseBody);
}
