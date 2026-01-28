
export default class TextUtil {

    public static countWords(text: string | undefined | null): number {
        if (text == null) return 0;
        return text.split(' ').length;
    }

    public static getTotalLines(text?: string | null): number {
        if (text == null) return 0;
        return text.split('\n').length;
    }
}
