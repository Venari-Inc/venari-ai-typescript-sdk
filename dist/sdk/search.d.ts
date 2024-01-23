import * as components from "../models/components";
import * as operations from "../models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosRequestConfig } from "axios";
export declare class Search {
    private sdkConfiguration;
    constructor(sdkConfig: SDKConfiguration);
    /**
     * Search catalog product by ID.
     *
     * @remarks
     * Search product details by internal product uuid.
     */
    productData(productId: string, inferenceId?: string, config?: AxiosRequestConfig): Promise<operations.ProductDataResponse>;
    /**
     * Catalog text search.
     *
     * @remarks
     * Search product details by text query.
     */
    catalogSearch(query: string, limit?: number, config?: AxiosRequestConfig): Promise<operations.CatalogSearchResponse>;
    /**
     * Similarity search by item.
     */
    similarByItem(req: components.SimilarItemPayload, config?: AxiosRequestConfig): Promise<operations.SimilarByItemResponse>;
}
