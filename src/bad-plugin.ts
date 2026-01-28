
export class BadPlugin {

    name: string = "Bad Plugin";

    analyze(text) {
        console.log(`Analyzing text ${text}..`);
        // eval('console.log("Forbidden pattern")');
        return text.split(' ').length;
    }
}
