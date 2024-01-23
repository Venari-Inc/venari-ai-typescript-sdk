import * as components from "../models/components";
import * as operations from "../models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosRequestConfig } from "axios";
export declare class Catalog {
    private sdkConfiguration;
    constructor(sdkConfig: SDKConfiguration);
    /**
     * Updates a catalog item status.
     */
    catalogItemUpdate(req: operations.CatalogItemUpdateRequestBody, config?: AxiosRequestConfig): Promise<operations.CatalogItemUpdateResponse>;
    /**
     * Adds an item to the catalog database.
     */
    catalogItemAdd(req: components.CatalogItem, config?: AxiosRequestConfig): Promise<operations.CatalogItemAddResponse>;
}
