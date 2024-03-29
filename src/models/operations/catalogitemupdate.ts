/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The status of the item.
 */
export enum Status {
    Active = "active",
    Inactive = "inactive",
    Deleted = "deleted",
}

export class CatalogItemUpdateRequestBody extends SpeakeasyBase {
    /**
     * The internal product id.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "external_id" })
    externalId?: string;

    /**
     * The status of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: Status;
}

/**
 * The status of the the operation.
 */
export enum CatalogItemUpdateStatus {
    Success = "success",
}

/**
 * Successfully updated catalog item
 */
export class CatalogItemUpdateResponseBody extends SpeakeasyBase {
    /**
     * The status of the the operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: CatalogItemUpdateStatus;
}

export class CatalogItemUpdateResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Successfully updated catalog item
     */
    @SpeakeasyMetadata()
    object?: CatalogItemUpdateResponseBody;
}
