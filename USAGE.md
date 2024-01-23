<!-- Start SDK Example Usage [usage] -->
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