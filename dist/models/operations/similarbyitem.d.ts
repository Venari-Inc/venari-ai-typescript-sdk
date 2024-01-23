import { SpeakeasyBase } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
export declare class SimilarByItemResponse extends SpeakeasyBase {
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
     * Similar items search by item.
     */
    searchSimilarByItemResults?: components.SearchSimilarByItemResults;
}
