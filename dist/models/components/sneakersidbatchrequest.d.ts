import { SpeakeasyBase } from "../../internal/utils";
export declare class SneakersIdBatchRequest extends SpeakeasyBase {
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
     * The sneaker's array of image URLs. Specify a maximum of 32 urls.
     */
    urls: string[];
    /**
     * The sneaker's listing id to be asociated with the array of images.
     */
    listingId: string;
    /**
     * Whether to include sneaker variants.
     */
    variants?: boolean;
}
