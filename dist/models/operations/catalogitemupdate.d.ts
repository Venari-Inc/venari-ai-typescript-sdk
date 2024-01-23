import { SpeakeasyBase } from "../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The status of the item.
 */
export declare enum Status {
    Active = "active",
    Inactive = "inactive",
    Deleted = "deleted"
}
export declare class CatalogItemUpdateRequestBody extends SpeakeasyBase {
    /**
     * The internal product id.
     */
    externalId?: string;
    /**
     * The status of the item.
     */
    status?: Status;
}
/**
 * The status of the the operation.
 */
export declare enum CatalogItemUpdateStatus {
    Success = "success"
}
/**
 * Successfully updated catalog item
 */
export declare class CatalogItemUpdateResponseBody extends SpeakeasyBase {
    /**
     * The status of the the operation.
     */
    status?: CatalogItemUpdateStatus;
}
export declare class CatalogItemUpdateResponse extends SpeakeasyBase {
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
     * Successfully updated catalog item
     */
    object?: CatalogItemUpdateResponseBody;
}
