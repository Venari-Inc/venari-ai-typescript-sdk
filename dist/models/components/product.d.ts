import { SpeakeasyBase } from "../../internal/utils";
export declare class ColorWeights extends SpeakeasyBase {
    colorName: string;
    weight: number;
}
export declare class Upcs extends SpeakeasyBase {
    size: number;
    upc: string;
}
export declare class Product extends SpeakeasyBase {
    productId: number;
    styleId: string;
    productTitle: string;
    brandName: string;
    silhouette?: string;
    gender: string;
    ageGroup: string;
    shaftStyle?: string;
    upperMaterial?: string;
    releaseDate?: string;
    colorway?: string;
    designer?: string;
    cat1: string;
    cat2?: string;
    cat3?: string;
    cat4?: string;
    colorWeights: ColorWeights[];
    upcs: Upcs[];
    image: string;
}
