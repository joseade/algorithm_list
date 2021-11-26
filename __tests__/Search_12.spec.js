const { findConsanguineRelationships } = require("../Search_12");

describe("Find Consanguine Relationships", () => {
  it("should find Consanguine Relationships given the information of the father and the mother", () => {
    expect(findConsanguineRelationships("A+", "A+")).toBe("{A+, A-, O+, O-}");
    expect(findConsanguineRelationships("A+", "B+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("A+", "AB+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("A+", "O+")).toBe("{A+, A-, O+, O-}");
    expect(findConsanguineRelationships("B+", "A+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("B+", "B+")).toBe("{B+, B-, O+, O-}");
    expect(findConsanguineRelationships("B+", "AB+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("B+", "O+")).toBe("{B+, B-, O+, O-}");
    expect(findConsanguineRelationships("AB+", "A+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("AB+", "B+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("AB+", "AB+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("AB+", "O+")).toBe("{A+, A-, B+, B-}");
    expect(findConsanguineRelationships("O+", "A+")).toBe("{A+, A-, O+, O-}");
    expect(findConsanguineRelationships("O+", "B+")).toBe("{B+, B-, O+, O-}");
    expect(findConsanguineRelationships("O+", "AB+")).toBe("{A+, A-, B+, B-}");
    expect(findConsanguineRelationships("O+", "O+")).toBe("{O+, O-}");

    //
    expect(findConsanguineRelationships("A-", "A+")).toBe("{A+, A-, O+, O-}");
    expect(findConsanguineRelationships("A-", "B+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("A-", "AB+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("A-", "O+")).toBe("{A+, A-, O+, O-}");
    expect(findConsanguineRelationships("B-", "A+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("B-", "B+")).toBe("{B+, B-, O+, O-}");
    expect(findConsanguineRelationships("B-", "AB+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("B-", "O+")).toBe("{B+, B-, O+, O-}");
    expect(findConsanguineRelationships("AB-", "A+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("AB-", "B+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("AB-", "AB+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("AB-", "O+")).toBe("{A+, A-, B+, B-}");
    expect(findConsanguineRelationships("O-", "A+")).toBe("{A+, A-, O+, O-}");
    expect(findConsanguineRelationships("O-", "B+")).toBe("{B+, B-, O+, O-}");
    expect(findConsanguineRelationships("O-", "AB+")).toBe("{A+, A-, B+, B-}");
    expect(findConsanguineRelationships("O-", "O+")).toBe("{O+, O-}");

    //
    expect(findConsanguineRelationships("A-", "A-")).toBe("{A-, O-}");
    expect(findConsanguineRelationships("A-", "B-")).toBe("{A-, AB-, B-, O-}");
    expect(findConsanguineRelationships("A-", "AB-")).toBe("{A-, AB-, B-}");
    expect(findConsanguineRelationships("A-", "O-")).toBe("{A-, O-}");
    expect(findConsanguineRelationships("B-", "A-")).toBe("{A-, AB-, B-, O-}");
    expect(findConsanguineRelationships("B-", "B-")).toBe("{B-, O-}");
    expect(findConsanguineRelationships("B-", "AB-")).toBe("{A-, AB-, B-}");
    expect(findConsanguineRelationships("B-", "O-")).toBe("{B-, O-}");
    expect(findConsanguineRelationships("AB-", "A-")).toBe("{A-, AB-, B-}");
    expect(findConsanguineRelationships("AB-", "B-")).toBe("{A-, AB-, B-}");
    expect(findConsanguineRelationships("AB-", "AB-")).toBe("{A-, AB-, B-}");
    expect(findConsanguineRelationships("AB-", "O-")).toBe("{A-, B-}");
    expect(findConsanguineRelationships("O-", "A-")).toBe("{A-, O-}");
    expect(findConsanguineRelationships("O-", "B-")).toBe("{B-, O-}");
    expect(findConsanguineRelationships("O-", "AB-")).toBe("{A-, B-}");
    expect(findConsanguineRelationships("O-", "O-")).toBe("{O-}");
  });

  it("Should find Consanguine Relationships given the information of the father and the son", () => {
    expect(findConsanguineRelationships("A+", false, "A+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("B+", false, "A+")).toBe(
      "{A+, A-, AB+, AB-}"
    );
    expect(findConsanguineRelationships("AB+", false, "A+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("O+", false, "A+")).toBe(
      "{A+, A-, AB+, AB-}"
    );
    expect(findConsanguineRelationships("A+", false, "B+")).toBe(
      "{AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("B+", false, "B+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("AB+", false, "B+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("O+", false, "B+")).toBe(
      "{B+, B-, AB+, AB-}"
    );
    expect(findConsanguineRelationships("A+", false, "AB+")).toBe(
      "{AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("B+", false, "AB+")).toBe(
      "{A+, A-, AB+, AB-}"
    );
    expect(findConsanguineRelationships("AB+", false, "AB+")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("O+", false, "AB+")).toBe("IMPOSSIBLE");
    expect(findConsanguineRelationships("A+", false, "O+")).toBe(
      "{A+, A-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("B+", false, "O+")).toBe(
      "{A+, A-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("AB+", false, "O+")).toBe("IMPOSSIBLE");
    expect(findConsanguineRelationships("O+", false, "O+")).toBe(
      "{A+, A-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("A-", false, "A+")).toBe(
      "{A+, AB+, B+, O+}"
    );
    expect(findConsanguineRelationships("B-", false, "A+")).toBe("{A+, AB+}");
    expect(findConsanguineRelationships("AB-", false, "A+")).toBe(
      "{A+, AB+, B+, O+}"
    );
    expect(findConsanguineRelationships("O-", false, "A+")).toBe("{A+, AB+}");
    expect(findConsanguineRelationships("A-", false, "B+")).toBe("{AB+, B+}");
    expect(findConsanguineRelationships("B-", false, "B+")).toBe(
      "{A+, AB+, B+, O+}"
    );
    expect(findConsanguineRelationships("AB-", false, "B+")).toBe(
      "{A+, AB+, B+, O+}"
    );
    expect(findConsanguineRelationships("O-", false, "B+")).toBe("{B+, AB+}");
    expect(findConsanguineRelationships("A-", false, "AB+")).toBe("{AB+, B+}");
    expect(findConsanguineRelationships("B-", false, "AB+")).toBe("{A+, AB+}");
    expect(findConsanguineRelationships("AB-", false, "AB+")).toBe(
      "{A+, AB+, B+}"
    );
    expect(findConsanguineRelationships("O-", false, "AB+")).toBe("IMPOSSIBLE");
    expect(findConsanguineRelationships("A-", false, "O+")).toBe(
      "{A+, B+, O+}"
    );
    expect(findConsanguineRelationships("B-", false, "O+")).toBe(
      "{A+, B+, O+}"
    );
    expect(findConsanguineRelationships("AB-", false, "O+")).toBe("IMPOSSIBLE");
    expect(findConsanguineRelationships("O-", false, "O+")).toBe(
      "{A+, B+, O+}"
    );
    expect(findConsanguineRelationships("A+", false, "A-")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("B+", false, "A-")).toBe(
      "{A+, A-, AB+, AB-}"
    );
    expect(findConsanguineRelationships("AB+", false, "A-")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("O+", false, "A-")).toBe(
      "{A+, A-, AB+, AB-}"
    );
    expect(findConsanguineRelationships("A+", false, "B-")).toBe(
      "{AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("B+", false, "B-")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("AB+", false, "B-")).toBe(
      "{A+, A-, AB+, AB-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("O+", false, "B-")).toBe(
      "{B+, B-, AB+, AB-}"
    );
    expect(findConsanguineRelationships("A+", false, "AB-")).toBe(
      "{AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("B+", false, "AB-")).toBe(
      "{A+, A-, AB+, AB-}"
    );
    expect(findConsanguineRelationships("AB+", false, "AB-")).toBe(
      "{A+, A-, AB+, AB-, B+, B-}"
    );
    expect(findConsanguineRelationships("O+", false, "AB-")).toBe("IMPOSSIBLE");
    expect(findConsanguineRelationships("A+", false, "O-")).toBe(
      "{A+, A-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("B+", false, "O-")).toBe(
      "{A+, A-, B+, B-, O+, O-}"
    );
    expect(findConsanguineRelationships("AB+", false, "O-")).toBe("IMPOSSIBLE");
    expect(findConsanguineRelationships("O-", false, "AB-")).toBe("IMPOSSIBLE");
    expect(findConsanguineRelationships("AB-", false, "O-")).toBe("IMPOSSIBLE");
  });
});
