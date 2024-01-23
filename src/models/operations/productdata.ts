/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class ProductDataRequest extends SpeakeasyBase {
    /**
     * The internal product id.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product_id" })
    productId: string;

    /**
     * The inference id.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inference_id" })
    inferenceId?: string;
}

export class ProductDataResponse extends SpeakeasyBase {
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
     * Product data
     */
    @SpeakeasyMetadata()
    productWithUUID?: components.ProductWithUUID;
}
