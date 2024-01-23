import { SpeakeasyBase } from "../../internal/utils";
export declare enum Status {
    Active = "active",
    Inactive = "inactive",
    Deleted = "deleted"
}
export declare class Images extends SpeakeasyBase {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
}
export declare enum TypeT {
    Barcode = "barcode",
    Gtin = "gtin",
    Ean = "ean"
}
export declare class ProductCode extends SpeakeasyBase {
    type?: TypeT;
    value?: string;
}
export declare class Variants extends SpeakeasyBase {
    sku: string;
    title?: string;
    price: number;
    compareAtPrice?: number;
    productCode?: ProductCode;
    position?: number;
    inventoryQuantity?: number;
    size?: string;
}
export declare class CatalogItem extends SpeakeasyBase {
    externalId: string;
    title: string;
    productType: string;
    status: Status;
    mpn?: string;
    brand?: string;
    category?: string[];
    description?: string;
    productUrl: string;
    tags?: string[];
    images: Images[];
    variants: Variants[];
}
