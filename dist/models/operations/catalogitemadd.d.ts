import { SpeakeasyBase } from "../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Successfully added item to catalog
 */
export declare class CatalogItemAddResponseBody extends SpeakeasyBase {
    /**
     * The status of the the operation.
     */
    status?: string;
}
export declare class CatalogItemAddResponse extends SpeakeasyBase {
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
     * Successfully added item to catalog
     */
    object?: CatalogItemAddResponseBody;
}
