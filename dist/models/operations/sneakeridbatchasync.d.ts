import { SpeakeasyBase } from "../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Successfully queued inference
 */
export declare class SneakerIdBatchAsyncResponseBody extends SpeakeasyBase {
    id: string;
    internalId: string;
}
export declare class SneakerIdBatchAsyncResponse extends SpeakeasyBase {
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
     * Successfully queued inference
     */
    object?: SneakerIdBatchAsyncResponseBody;
}
