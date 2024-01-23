import * as utils from "../internal/utils";
import * as components from "../models/components";
import { Catalog } from "./catalog";
import { Inference } from "./inference";
import { Search } from "./search";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.venari.ai"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    apiKey?: string;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};
export declare class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: components.Security | (() => Promise<components.Security>);
    serverURL: string;
    serverDefaults: any;
    language: string;
    openapiDocVersion: string;
    sdkVersion: string;
    genVersion: string;
    userAgent: string;
    retryConfig?: utils.RetryConfig;
    constructor(init?: Partial<SDKConfiguration>);
}
/**
 * Venari AI Sneaker Inference API: The Venari AI Sneaker Inference API allows you to submit images, either as single requests or in batches, and receive inference results specifying which sneaker is present in the picture. The API also supports asynchronous requests using webhooks for improved flexibility and responsiveness.
 *
 * @remarks
 *
 * ## Base URL
 *
 * The base URL for accessing the Venari AI Sneaker Inference API is `https://api.venari.ai/`.
 *
 * ## Authentication
 *
 * To use the API, you need to include an API key in the request headers:
 *
 * ```plaintext
 * X-Api-Key: YOUR_API_KEY
 * ```
 */
export declare class VenariAI {
    inference: Inference;
    search: Search;
    catalog: Catalog;
    private sdkConfiguration;
    constructor(props?: SDKProps);
}
