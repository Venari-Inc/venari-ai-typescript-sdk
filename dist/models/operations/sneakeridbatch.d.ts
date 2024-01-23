import { SpeakeasyBase } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
/**
 * Successful processing of batch of image URLs
 */
export declare class SneakerIdBatchResponseBody extends SpeakeasyBase {
    product: components.Product;
    /**
     * User-defined flat object to be returned in the response.
     */
    custom?: Record<string, any>;
    variants?: components.Product[];
    /**
     * The inference confidence value.
     */
    confidence: number;
    meta: components.MetaData;
}
export declare class SneakerIdBatchResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: AxiosResponse;
    /**
     * Successful processing of batch of image URLs
     */
    object?: SneakerIdBatchResponseBody;
}
