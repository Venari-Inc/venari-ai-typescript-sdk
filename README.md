# venari-ai

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add ssh://git@github.com:Venari-Inc/venari-ai-typescript-sdk.git
```

### Yarn

```bash
yarn add ssh://git@github.com:Venari-Inc/venari-ai-typescript-sdk.git
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { VenariAI } from "venari-ai";

async function run() {
    const sdk = new VenariAI({
        apiKey: "YOUR_API_KEY",
    });

    const res = await sdk.inference.sneakerId({
        custom: {
            myCustomProp: "string",
            myCustomValue: "string",
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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [inference](docs/sdks/inference/README.md)

* [sneakerId](docs/sdks/inference/README.md#sneakerid) - Single image ID.
* [sneakerIdBatch](docs/sdks/inference/README.md#sneakeridbatch) - Images batch ID.
* [sneakerIdAsync](docs/sdks/inference/README.md#sneakeridasync) - Single image async ID
* [sneakerIdBatchAsync](docs/sdks/inference/README.md#sneakeridbatchasync) - Images batch async ID.

### [search](docs/sdks/search/README.md)

* [productData](docs/sdks/search/README.md#productdata) - Search catalog product by ID.
* [catalogSearch](docs/sdks/search/README.md#catalogsearch) - Catalog text search.
* [similarByItem](docs/sdks/search/README.md#similarbyitem) - Similarity search by item.

### [catalog](docs/sdks/catalog/README.md)

* [catalogItemUpdate](docs/sdks/catalog/README.md#catalogitemupdate) - Updates a catalog item status.
* [catalogItemAdd](docs/sdks/catalog/README.md#catalogitemadd) - Adds an item to the catalog database.
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                                  | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.SneakerIdResponseBody                  | 400                                           | application/json                              |
| errors.SneakerIdInferenceResponseBody         | 403                                           | application/json                              |
| errors.SneakerIdInferenceResponseResponseBody | 500                                           | application/json                              |
| errors.SDKError                               | 4xx-5xx                                       | */*                                           |

Example

```typescript
import { VenariAI } from "venari-ai";

async function run() {
    const sdk = new VenariAI({
        apiKey: "YOUR_API_KEY",
    });

    let res;
    try {
        res = await sdk.inference.sneakerId({
            custom: {
                myCustomProp: "string",
                myCustomValue: "string",
            },
            confidenceThreshold: 25,
            restrictiveMode: false,
            url: "https://www.shutterstock.com/shutterstock/photos/647477452/display_1500/stock-photo-urban-teenager-legs-silhouette-wearing-sneakers-647477452.jpg",
            variants: false,
        });
    } catch (err) {
        if (err instanceof errors.SneakerIdResponseBody) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.SneakerIdInferenceResponseBody) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.SneakerIdInferenceResponseResponseBody) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.venari.ai` | None |

#### Example

```typescript
import { VenariAI } from "venari-ai";

async function run() {
    const sdk = new VenariAI({
        serverIdx: 0,
        apiKey: "YOUR_API_KEY",
    });

    const res = await sdk.inference.sneakerId({
        custom: {
            myCustomProp: "string",
            myCustomValue: "string",
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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { VenariAI } from "venari-ai";

async function run() {
    const sdk = new VenariAI({
        serverURL: "https://api.venari.ai",
        apiKey: "YOUR_API_KEY",
    });

    const res = await sdk.inference.sneakerId({
        custom: {
            myCustomProp: "string",
            myCustomValue: "string",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { venari-ai } from "VenariAI";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new VenariAI({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { VenariAI } from "venari-ai";

async function run() {
    const sdk = new VenariAI({
        apiKey: "YOUR_API_KEY",
    });

    const res = await sdk.inference.sneakerId({
        custom: {
            myCustomProp: "string",
            myCustomValue: "string",
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
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
