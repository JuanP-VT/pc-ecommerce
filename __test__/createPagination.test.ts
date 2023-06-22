import createPagination from "@/app/utils/createPagination";

describe("Creates pagination correctly", () => {
  it("Create pagination correctly", () => {
    const list = ["a", "b", "c", "d", "e", "f"];
    const itemsPerPages = 3;
    const pagination = createPagination(list, itemsPerPages);
    expect(pagination).toEqual([
      ["a", "b", "c"],
      ["d", "e", "f"],
    ]);
  });
  it("should return pagination with valid inputs", () => {
    const list = ["a", "b", "c", "d", "e", "f", "2", "3"];
    const pagination = createPagination(list, 3);
    expect(pagination).toEqual([
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["2", "3"],
    ]);
  });

  it("should handle unusual inputs : too many pages", () => {
    const list = ["a", "b", "c", "d", "e", "f"];
    const itemsPerPages = 20;
    const pagination = createPagination(list, itemsPerPages);
    expect(pagination).toEqual([["a", "b", "c", "d", "e", "f"]]);
  });

  it("should handle unusual inputs : 0 pages", () => {
    const list = ["a", "b", "c", "d", "e", "f"];
    const itemsPerPages = 0;
    const pagination = createPagination(list, itemsPerPages);
    expect(pagination).toEqual(["a", "b", "c", "d", "e", "f"]);
  });

  it("should handle unusual inputs : empty list", () => {
    const list = [] as any[];
    const itemsPerPages = 0;
    const pagination = createPagination(list, itemsPerPages);
    expect(pagination).toEqual([]);
  });
});
