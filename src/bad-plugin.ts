
export class BadPlugin {

    name: string = "Bad Plugin";

    analyze(text: string) {
        console.log(`Analyzing text ${text}..`);
        // eval('console.log("Forbidden pattern")');
        return text.split(' ').length;
    }
}
