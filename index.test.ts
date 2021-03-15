import {toArabic, fromArabic, hasArabic} from './index';

describe("To Arabic", () => {
    it("arabic - number", () => {
        expect(toArabic(2020)).toBe("٢٠٢٠")
    })
    it("arabic - number - intOnly", () => {
        expect(toArabic(2020, true)).toBe("٢٠٢٠")
    })
    it("arabic - string", () => {
        expect(toArabic("2020")).toBe("٢٠٢٠")
    })
    it("arabic - string - intOnly", () => {
        expect(toArabic("2020", true)).toBe("٢٠٢٠")
    })
    it("arabic - string mixed", () => {
        expect(toArabic("2mr0hakim2basha0")).toBe("٢mr٠hakim٢basha٠")
    })
    it("arabic - string mixed - intOnly", () => {
        expect(toArabic("2mr0hakim2basha0", true)).toBe("٢٠٢٠")
    })
})

describe("From Arabic", () => {
    it("modern - string", () => {
        expect(fromArabic("٢٠٢٠")).toBe("2020")
    })
    it("modern - string - intOnly", () => {
        expect(fromArabic("٢٠٢٠", true)).toBe("2020")
    })
    it("modern - string mixed", () => {
        expect(fromArabic("٢mr٠hakim٢basha٠")).toBe("2mr0hakim2basha0")
    })
    it("modern - string mixed - intOnly", () => {
        expect(fromArabic("٢mr٠hakim٢basha٠", true)).toBe("2020")
    })
})

describe("Has Arabic", () => {
    it("param - arabic - string", () => {
        expect(hasArabic("٢٠٢٠")).toStrictEqual(["٢", "٠", "٢", "٠"]);
    })
    it("param - arabic - string mixed", () => {
        expect(hasArabic("٢mr٠hakim٢basha٠")).toStrictEqual(["٢", "٠", "٢", "٠"]);
    })
    it("param - modern - string", () => {
        expect(hasArabic("2020")).toBe(null);
    })
    it("param - modern - string mixed", () => {
        expect(hasArabic("2mr0hakim2basha0")).toBe(null);
    })
})
