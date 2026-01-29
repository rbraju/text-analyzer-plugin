
export class BadPlugin {

    name: any = "Bad Plugin";

    analyze(text: string) {
        // eval('console.log("Forbidden pattern")');
        return text.split(' ').length;
    }
}
