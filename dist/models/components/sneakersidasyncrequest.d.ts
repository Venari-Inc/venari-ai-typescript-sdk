import { SpeakeasyBase } from "../../internal/utils";
export declare class SneakersIdAsyncRequest extends SpeakeasyBase {
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
     * The sneaker's image URL.
     */
    url: string;
    /**
     * The URL to which the webhook will be delivered once the identification process is completed.
     */
    postbackUrl: string;
}
