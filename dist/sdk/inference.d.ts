import * as components from "../models/components";
import * as operations from "../models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosRequestConfig } from "axios";
export declare class Inference {
    private sdkConfiguration;
    constructor(sdkConfig: SDKConfiguration);
    /**
     * Single image ID.
     *
     * @remarks
     * Identify one sneaker from a single image URL.
     */
    sneakerId(req: components.SneakersIdRequest, config?: AxiosRequestConfig): Promise<operations.SneakerIdResponse>;
    /**
     * Images batch ID.
     *
     * @remarks
     * Identify one sneaker from an array of image URLs.
     */
    sneakerIdBatch(req: components.SneakersIdBatchRequest, config?: AxiosRequestConfig): Promise<operations.SneakerIdBatchResponse>;
    /**
     * Single image async ID
     *
     * @remarks
     * Identify one sneaker from a single image URL and receive the response as a webhook to a provided URL.
     */
    sneakerIdAsync(req: components.SneakersIdAsyncRequest, config?: AxiosRequestConfig): Promise<operations.SneakerIdAsyncResponse>;
    /**
     * Images batch async ID.
     *
     * @remarks
     * Identify one sneaker from an array of image URLs and receive the response as a webhook to a provided URL.
     */
    sneakerIdBatchAsync(req: components.SneakersIdBatchAsyncRequest, config?: AxiosRequestConfig): Promise<operations.SneakerIdBatchAsyncResponse>;
}
