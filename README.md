# daraz-scraper-api

An unofficial API scraper for Daraz to search and extract product data.

## Installation

```bash
npm install daraz-scraper-api
```

## Usage

```javascript
const { searchDaraz } = require('daraz-scraper-api');

async function run() {
    try {
        const products = await searchDaraz("smart watch");
        console.log(products);
    } catch (error) {
        console.error(error);
    }
}

run();
```

## Response Format
```json
[
  {
    "title": "Product Title",
    "price": "Rs. 1,000",
    "originalPrice": "Rs. 1,500",
    "discount": "33%",
    "rating": "4.5",
    "sold": "100",
    "location": "Colombo",
    "image": "https://...",
    "link": "https://..."
  }
]
```
