import { SpeakeasyBase } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
export declare class CatalogSearchRequest extends SpeakeasyBase {
    /**
     * The text query.
     */
    query: string;
    /**
     * The maximum number of results to return.
     */
    limit?: number;
}
export declare class CatalogSearchResponse extends SpeakeasyBase {
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
     * Search results
     */
    classes?: components.SearchResult[];
}
