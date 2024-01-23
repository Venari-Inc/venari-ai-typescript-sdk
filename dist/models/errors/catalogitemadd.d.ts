import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class CatalogItemAddCatalogResponseResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: CatalogItemAddCatalogResponseResponseBody);
}
/**
 * Unauthorized
 */
export declare class CatalogItemAddCatalogResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: CatalogItemAddCatalogResponseBody);
}
/**
 * Bad Request
 */
export declare class CatalogItemAddResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: CatalogItemAddResponseBody);
}
