const { reversingOddWords } = require("../Strings_06");

describe("Reversing the odd words of a string", () => {
  it("Should reverse odd words", () => {
    let str = "f";
    expect(reversingOddWords(str)).toBe("f");
    str = "eat";
    expect(reversingOddWords(str)).toBe("tae");
    str = "champions";
    expect(reversingOddWords(str)).toBe("snoipmahc");
    str = "determining";
    expect(reversingOddWords(str)).toBe("gninimreted");
  });
  it("Should reverse odd words of a string", () => {
    let str =
      "And now here is my secret a very simple secret It is only with the heart that one can see rightly what is essential is invisible to the eye";
    expect(reversingOddWords(str)).toBe(
      "dnA won here is my secret a very simple secret It is only with eht traeh that eno nac ees ylthgir what is laitnesse is elbisivni to eht eye"
    );
  });
});
