import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class SimilarByItemSearchResponseResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SimilarByItemSearchResponseResponseBody);
}
/**
 * Unauthorized
 */
export declare class SimilarByItemSearchResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SimilarByItemSearchResponseBody);
}
/**
 * Bad Request
 */
export declare class SimilarByItemResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: SimilarByItemResponseBody);
}
