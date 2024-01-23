# Catalog
(*catalog*)

### Available Operations

* [catalogItemUpdate](#catalogitemupdate) - Updates a catalog item status.
* [catalogItemAdd](#catalogitemadd) - Adds an item to the catalog database.

## catalogItemUpdate

Updates a catalog item status.

### Example Usage

```typescript
import { VenariAI } from "venari-ai";
import { Status } from "venari-ai/dist/models/operations";

async function run() {
  const sdk = new VenariAI({
    apiKey: "YOUR_API_KEY",
  });

  const res = await sdk.catalog.catalogItemUpdate({
    externalId: "491a66ec-6cf6-4fb7-a02c-7e4caa3d1942",
    status: Status.Active,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CatalogItemUpdateRequestBody](../../models/operations/catalogitemupdaterequestbody.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CatalogItemUpdateResponse](../../models/operations/catalogitemupdateresponse.md)>**
### Errors

| Error Object                                        | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.CatalogItemUpdateResponseBody                | 400                                                 | application/json                                    |
| errors.CatalogItemUpdateCatalogResponseBody         | 403                                                 | application/json                                    |
| errors.CatalogItemUpdateCatalogResponseResponseBody | 500                                                 | application/json                                    |
| errors.SDKError                                     | 4xx-5xx                                             | */*                                                 |

## catalogItemAdd

Adds an item to the catalog database.

### Example Usage

```typescript
import { VenariAI } from "venari-ai";
import { Status, TypeT } from "venari-ai/dist/models/components";

async function run() {
  const sdk = new VenariAI({
    apiKey: "YOUR_API_KEY",
  });

  const res = await sdk.catalog.catalogItemAdd({
    externalId: "8574528356656",
    title: "1017 ALYX 9SM City Scape Tee - Black",
    productType: "T-Shirt",
    status: Status.Active,
    mpn: "mpn-123",
    brand: "Nike",
    category: [
      "Apparel",
      "Men's",
      "T-Shirts",
    ],
    description: "This is a sample description.",
    productUrl: "https://test.com/product/8574528356656",
    tags: [
      "1017-alyx-9sm",
      "8818",
      "aamts0018a001-1-bl",
      "mens",
      "tee shirt",
      "tees",
      "tops",
    ],
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0814/9627/7296/products/AAMTS0018A001-1-BL-4.jpg?v=1692374837",
        altText: "1017 ALYX 9SM City Scape Tee - Black",
        width: 2000,
        height: 2000,
      },
    ],
    variants: [
      {
        sku: "98149972",
        title: "XS",
        price: 205,
        compareAtPrice: 205,
        productCode: {
          type: TypeT.Barcode,
          value: "9893567872",
        },
        position: 1,
        inventoryQuantity: 10,
        size: "XL",
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [components.CatalogItem](../../models/components/catalogitem.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CatalogItemAddResponse](../../models/operations/catalogitemaddresponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.CatalogItemAddResponseBody                | 400                                              | application/json                                 |
| errors.CatalogItemAddCatalogResponseBody         | 403                                              | application/json                                 |
| errors.CatalogItemAddCatalogResponseResponseBody | 500                                              | application/json                                 |
| errors.SDKError                                  | 4xx-5xx                                          | */*                                              |
