import todosSlice, {
  addTodo,
  removeComlited,
  toggleTodo,
} from "../../store/slices/todosSlice";

describe("TodosReducers tests", () => {
  test("toggle test", () => {
    expect(
      todosSlice(
        [{ id: 1, title: "first value", isDone: false }],
        toggleTodo(1)
      )
    ).toEqual([{ id: 1, title: "first value", isDone: true }]);
  });
  test("remove todo test", () => {
    expect(
      todosSlice(
        [
          { id: 1, title: "first", isDone: true },
          { id: 2, title: "second", isDone: false },
        ],
        removeComlited()
      )
    ).toEqual([{ id: 2, title: "second", isDone: false }]);
  });
  test("add todo test", () => {
    expect(
      todosSlice([{ id: 1, title: "first", isDone: true }], addTodo("newTodo"))
    ).toEqual([
      { id: 1, title: "first", isDone: true },
      { id: 5, title: "newTodo", isDone: false },
    ]);
  });
});
