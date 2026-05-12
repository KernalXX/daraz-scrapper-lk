const { searchDaraz } = require('./index.js');

async function test() {
    console.log("Testing Daraz Scraper...");
    try {
        const data = await searchDaraz("Car");
        console.log(`Found ${data.length} results.\n`);
        
        data.forEach((item, index) => {
            if (index < 5) {
                console.log(`--- Item ${index + 1} ---`);
                console.log(`Title : ${item.title}`);
                console.log(`Price : ${item.price}`);
                console.log(`Link  : ${item.link}\n`);
            }
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

test();
