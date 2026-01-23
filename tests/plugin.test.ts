import { GoodPlugin } from "../src/good-plugin";
import { BadPlugin } from "../src/bad-plugin";

describe("Plugin tests", () => {

    it("Good Plugin should return valid wordcount", () => {
        const plugin = new GoodPlugin();
        const count = plugin.analyze("Checkout rbr-unified-framework in github.com/rbraju");
        console.log(`Word count: ${count}`);
    });

    it("Bad plugin violates rules but still should run", () => {
        const plugin = new BadPlugin();
        const count = plugin.analyze("Cound the words from this text");
        console.log(`Word count: ${count}`);
    });
});