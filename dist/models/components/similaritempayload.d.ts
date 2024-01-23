import { SpeakeasyBase } from "../../internal/utils";
/**
 * Payload for similar item search.
 */
export declare class SimilarItemPayload extends SpeakeasyBase {
    /**
     * The external id of the item to search for.
     */
    externalId: string;
    /**
     * The minimum score of the results to return.
     */
    minScore?: number;
}
