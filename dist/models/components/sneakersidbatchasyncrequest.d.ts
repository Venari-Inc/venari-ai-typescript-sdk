import { SpeakeasyBase } from "../../internal/utils";
export declare class SneakersIdBatchAsyncRequest extends SpeakeasyBase {
    /**
     * User-defined flat object to be returned in the response.
     */
    custom?: Record<string, any>;
    /**
     * The confidence threshold value.
     */
    confidenceThreshold?: number;
    /**
     * A boolean flag for restrictive mode.
     */
    restrictiveMode?: boolean;
    /**
     * The URL to which the webhook will be delivered once the identification process is completed.
     */
    postbackUrl: string;
    /**
     * The sneaker's array of image URLs. Specify a maximum of 32 urls.
     */
    urls: string[];
    /**
     * The sneaker's listing id to be asociated with the array of images.
     */
    listingId: string;
}
