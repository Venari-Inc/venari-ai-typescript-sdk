import { SpeakeasyBase } from "../../internal/utils";
export declare class SearchSimilarByItemResultsProducts extends SpeakeasyBase {
    rank: number;
    brand?: string;
    image: string;
    price: number;
    title: string;
    status: string;
    externalId: string;
    productUrl?: string;
    productType: string;
    id: string;
    score?: number;
    altText?: string;
}
export declare class Products extends SpeakeasyBase {
    results: number;
    products: SearchSimilarByItemResultsProducts[];
}
export declare class SearchSimilarByItemResults extends SpeakeasyBase {
    products: Products;
}
