# Search
(*search*)

### Available Operations

* [productData](#productdata) - Search catalog product by ID.
* [catalogSearch](#catalogsearch) - Catalog text search.
* [similarByItem](#similarbyitem) - Similarity search by item.

## productData

Search product details by internal product uuid.

### Example Usage

```typescript
import { VenariAI } from "venari-ai";
import { ProductDataRequest } from "venari-ai/dist/models/operations";

async function run() {
  const sdk = new VenariAI({
    apiKey: "YOUR_API_KEY",
  });
const productId: string = "26d17f72-44e8-467a-8931-8867e11075a4";
const inferenceId: string = "491a66ec-6cf6-4fb7-a02c-7e4caa3d1942";

  const res = await sdk.search.productData(productId, inferenceId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `productId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The internal product id.                                     | 26d17f72-44e8-467a-8931-8867e11075a4                         |
| `inferenceId`                                                | *string*                                                     | :heavy_minus_sign:                                           | The inference id.                                            | 491a66ec-6cf6-4fb7-a02c-7e4caa3d1942                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ProductDataResponse](../../models/operations/productdataresponse.md)>**
### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.ProductDataResponseBody               | 400                                          | application/json                             |
| errors.ProductDataSearchResponseBody         | 403                                          | application/json                             |
| errors.ProductDataSearchResponseResponseBody | 500                                          | application/json                             |
| errors.SDKError                              | 4xx-5xx                                      | */*                                          |

## catalogSearch

Search product details by text query.

### Example Usage

```typescript
import { VenariAI } from "venari-ai";
import { CatalogSearchRequest } from "venari-ai/dist/models/operations";

async function run() {
  const sdk = new VenariAI({
    apiKey: "YOUR_API_KEY",
  });
const query: string = "red air jordan";
const limit: number = 10;

  const res = await sdk.search.catalogSearch(query, limit);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `query`                                                      | *string*                                                     | :heavy_check_mark:                                           | The text query.                                              | red air jordan                                               |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The maximum number of results to return.                     | 10                                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CatalogSearchResponse](../../models/operations/catalogsearchresponse.md)>**
### Errors

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.CatalogSearchResponseBody               | 400                                            | application/json                               |
| errors.CatalogSearchSearchResponseBody         | 403                                            | application/json                               |
| errors.CatalogSearchSearchResponseResponseBody | 500                                            | application/json                               |
| errors.SDKError                                | 4xx-5xx                                        | */*                                            |

## similarByItem

Similarity search by item.

### Example Usage

```typescript
import { VenariAI } from "venari-ai";

async function run() {
  const sdk = new VenariAI({
    apiKey: "YOUR_API_KEY",
  });

  const res = await sdk.search.similarByItem({
    externalId: "26d17f72-44e8-467a-8931-8867e11075a4",
    minScore: 0.5,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [components.SimilarItemPayload](../../models/components/similaritempayload.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.SimilarByItemResponse](../../models/operations/similarbyitemresponse.md)>**
### Errors

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.SimilarByItemResponseBody               | 400                                            | application/json                               |
| errors.SimilarByItemSearchResponseBody         | 403                                            | application/json                               |
| errors.SimilarByItemSearchResponseResponseBody | 500                                            | application/json                               |
| errors.SDKError                                | 4xx-5xx                                        | */*                                            |
