import { SpeakeasyBase } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
export declare class ProductDataRequest extends SpeakeasyBase {
    /**
     * The internal product id.
     */
    productId: string;
    /**
     * The inference id.
     */
    inferenceId?: string;
}
export declare class ProductDataResponse extends SpeakeasyBase {
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
     * Product data
     */
    productWithUUID?: components.ProductWithUUID;
}
