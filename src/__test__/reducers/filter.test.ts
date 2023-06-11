import filterSlice, { changeFilter } from "../../store/slices/filterSlice";

describe("FilterReducers tests", () => {
  test("filter changed", () => {
    expect(filterSlice({ active: "all" }, changeFilter("active"))).toEqual({
      active: "active",
    });
  });
});
