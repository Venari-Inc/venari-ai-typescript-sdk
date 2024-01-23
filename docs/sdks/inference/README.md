# Inference
(*inference*)

### Available Operations

* [sneakerId](#sneakerid) - Single image ID.
* [sneakerIdBatch](#sneakeridbatch) - Images batch ID.
* [sneakerIdAsync](#sneakeridasync) - Single image async ID
* [sneakerIdBatchAsync](#sneakeridbatchasync) - Images batch async ID.

## sneakerId

Identify one sneaker from a single image URL.

### Example Usage

```typescript
import { VenariAI } from "venari-ai";

async function run() {
  const sdk = new VenariAI({
    apiKey: "YOUR_API_KEY",
  });

  const res = await sdk.inference.sneakerId({
    custom: {
      "myCustomProp": "string",
      "myCustomValue": "string",
    },
    confidenceThreshold: 25,
    restrictiveMode: false,
    url: "https://www.shutterstock.com/shutterstock/photos/647477452/display_1500/stock-photo-urban-teenager-legs-silhouette-wearing-sneakers-647477452.jpg",
    variants: false,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [components.SneakersIdRequest](../../models/components/sneakersidrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.SneakerIdResponse](../../models/operations/sneakeridresponse.md)>**
### Errors

| Error Object                                  | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.SneakerIdResponseBody                  | 400                                           | application/json                              |
| errors.SneakerIdInferenceResponseBody         | 403                                           | application/json                              |
| errors.SneakerIdInferenceResponseResponseBody | 500                                           | application/json                              |
| errors.SDKError                               | 4xx-5xx                                       | */*                                           |

## sneakerIdBatch

Identify one sneaker from an array of image URLs.

### Example Usage

```typescript
import { VenariAI } from "venari-ai";

async function run() {
  const sdk = new VenariAI({
    apiKey: "YOUR_API_KEY",
  });

  const res = await sdk.inference.sneakerIdBatch({
    custom: {
      "myCustomProp": "string",
      "myCustomValue": "string",
    },
    confidenceThreshold: 25,
    restrictiveMode: false,
    urls: [
      "https://www.shutterstock.com/shutterstock/photos/647477452/display_1500/stock-photo-urban-teenager-legs-silhouette-wearing-sneakers-647477452.jpg",
      "https://www.shutterstock.com/shutterstock/photos/647477452/display_1500/stock-photo-urban-teenager-legs-silhouette-wearing-sneakers-647477452.jpg",
    ],
    listingId: "cool-sneaker-abc-123",
    variants: false,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [components.SneakersIdBatchRequest](../../models/components/sneakersidbatchrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.SneakerIdBatchResponse](../../models/operations/sneakeridbatchresponse.md)>**
### Errors

| Error Object                                       | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.SneakerIdBatchResponseBody                  | 400                                                | application/json                                   |
| errors.SneakerIdBatchInferenceResponseBody         | 403                                                | application/json                                   |
| errors.SneakerIdBatchInferenceResponseResponseBody | 500                                                | application/json                                   |
| errors.SDKError                                    | 4xx-5xx                                            | */*                                                |

## sneakerIdAsync

Identify one sneaker from a single image URL and receive the response as a webhook to a provided URL.

### Example Usage

```typescript
import { VenariAI } from "venari-ai";

async function run() {
  const sdk = new VenariAI({
    apiKey: "YOUR_API_KEY",
  });

  const res = await sdk.inference.sneakerIdAsync({
    custom: {
      "myCustomProp": "string",
      "myCustomValue": "string",
    },
    confidenceThreshold: 25,
    restrictiveMode: false,
    url: "https://www.shutterstock.com/shutterstock/photos/647477452/display_1500/stock-photo-urban-teenager-legs-silhouette-wearing-sneakers-647477452.jpg",
    postbackUrl: "https://my-postback-url.com/product/123456",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [components.SneakersIdAsyncRequest](../../models/components/sneakersidasyncrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.SneakerIdAsyncResponse](../../models/operations/sneakeridasyncresponse.md)>**
### Errors

| Error Object                                       | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.SneakerIdAsyncResponseBody                  | 400                                                | application/json                                   |
| errors.SneakerIdAsyncInferenceResponseBody         | 403                                                | application/json                                   |
| errors.SneakerIdAsyncInferenceResponseResponseBody | 500                                                | application/json                                   |
| errors.SDKError                                    | 4xx-5xx                                            | */*                                                |

## sneakerIdBatchAsync

Identify one sneaker from an array of image URLs and receive the response as a webhook to a provided URL.

### Example Usage

```typescript
import { VenariAI } from "venari-ai";

async function run() {
  const sdk = new VenariAI({
    apiKey: "YOUR_API_KEY",
  });

  const res = await sdk.inference.sneakerIdBatchAsync({
    custom: {
      "myCustomProp": "string",
      "myCustomValue": "string",
    },
    confidenceThreshold: 25,
    restrictiveMode: false,
    postbackUrl: "https://my-postback-url.com/product/123456",
    urls: [
      "https://www.shutterstock.com/shutterstock/photos/647477452/display_1500/stock-photo-urban-teenager-legs-silhouette-wearing-sneakers-647477452.jpg",
      "https://www.shutterstock.com/shutterstock/photos/647477452/display_1500/stock-photo-urban-teenager-legs-silhouette-wearing-sneakers-647477452.jpg",
    ],
    listingId: "cool-sneaker-abc-123",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [components.SneakersIdBatchAsyncRequest](../../models/components/sneakersidbatchasyncrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.SneakerIdBatchAsyncResponse](../../models/operations/sneakeridbatchasyncresponse.md)>**
### Errors

| Error Object                                            | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.SneakerIdBatchAsyncResponseBody                  | 400                                                     | application/json                                        |
| errors.SneakerIdBatchAsyncInferenceResponseBody         | 403                                                     | application/json                                        |
| errors.SneakerIdBatchAsyncInferenceResponseResponseBody | 500                                                     | application/json                                        |
| errors.SDKError                                         | 4xx-5xx                                                 | */*                                                     |
