import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class CatalogSearchSearchResponseResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: CatalogSearchSearchResponseResponseBody);
}
/**
 * Unauthorized
 */
export declare class CatalogSearchSearchResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: CatalogSearchSearchResponseBody);
}
/**
 * Bad Request
 */
export declare class CatalogSearchResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: CatalogSearchResponseBody);
}
