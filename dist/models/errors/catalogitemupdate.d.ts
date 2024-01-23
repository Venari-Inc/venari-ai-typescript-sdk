import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class CatalogItemUpdateCatalogResponseResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: CatalogItemUpdateCatalogResponseResponseBody);
}
/**
 * Unauthorized
 */
export declare class CatalogItemUpdateCatalogResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: CatalogItemUpdateCatalogResponseBody);
}
/**
 * Bad Request
 */
export declare class CatalogItemUpdateResponseBody extends Error {
    error?: string;
    code?: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: AxiosResponse;
    constructor(err?: CatalogItemUpdateResponseBody);
}
