import TextUtil from "../src/TextUtil";

describe("TextUtil", () => {
    describe("countWords", () => {
        test.each([
            { text: "hello world", expected: 2, description: "simple two words" },
            { text: "hello", expected: 1, description: "single word" },
            { text: "", expected: 1, description: "empty string (split returns array with one empty element)" },
            { text: "   ", expected: 4, description: "multiple spaces" },
            { text: "hello world test", expected: 3, description: "three words" },
            { text: "hello  world", expected: 3, description: "double space between words" },
            { text: "  hello  world  ", expected: 7, description: "spaces at start and end" },
            { text: "one\ntwo three", expected: 2, description: "text with newlines" },
            { text: "word1 word2\nword3 word4", expected: 3, description: "multiple words with newline" },
            { text: undefined, expected: 0, description: "undefined input" },
            { text: null, expected: 0, description: "null input" },
        ])("should return $expected for $description", ({ text, expected }) => {
            expect(TextUtil.countWords(text)).toBe(expected);
        });
    });

    describe("getTotalLines", () => {
        test.each([
            { text: "hello", expected: 1, description: "single line without newline" },
            { text: "hello\nworld", expected: 2, description: "two lines" },
            { text: "line1\nline2\nline3", expected: 3, description: "three lines" },
            { text: "", expected: 1, description: "empty string (split returns array with one empty element)" },
            { text: "\n", expected: 2, description: "single newline character" },
            { text: "\n\n", expected: 3, description: "two newlines" },
            { text: "hello\n\nworld", expected: 3, description: "text with empty line" },
            { text: "\nhello\nworld\n", expected: 4, description: "newline at start and end" },
            { text: "line1\nline2\nline3\nline4\nline5", expected: 5, description: "five lines" },
            { text: "no newlines here just text", expected: 1, description: "text without newlines" },
            { text: undefined, expected: 0, description: "undefined input" },
            { text: null, expected: 0, description: "null input" },
        ])("should return $expected for $description", ({ text, expected }) => {
            expect(TextUtil.getTotalLines(text)).toBe(expected);
        });
    });
});
