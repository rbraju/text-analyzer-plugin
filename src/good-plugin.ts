
export interface Plugin {
    name: string;

    // Return word count
    analyze(text: string): number;
}

export class GoodPlugin implements Plugin {

    name = 'Good Plugin';

    analyze(text: string): number {
        const words = text.split(' ');
        console.log(`Analyzed text ${text}. No. of words, ${words.length}`);
        return words.length;
    }
}
