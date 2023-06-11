import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithRedux } from "../helpers/renderWithRedux";
import App from "../../App";
import { setupStore } from "../../store/store";

describe("App tests", () => {
  test("remove todo on click", () => {
    const store = setupStore();
    render(renderWithRedux(<App />, store));

    expect(screen.getAllByTestId("todo-item").length).toBe(4);

    const removeButton = screen.getByText(/clear/i);
    expect(removeButton).toBeInTheDocument();

    fireEvent.click(removeButton);

    expect(screen.getAllByTestId("todo-item").length).toBe(2);
  });

  test("try empty todo value", () => {
    const store = setupStore();
    render(renderWithRedux(<App />, store));

    expect(screen.getAllByTestId("todo-item").length).toBe(4);

    const input = screen.getByTestId("input-elem");
    expect(input).toBeInTheDocument();

    fireEvent.keyDown(input, { keyCode: 13 });

    expect(screen.getAllByTestId("todo-item").length).toBe(4);
  });

  test("add todo", () => {
    const store = setupStore();
    render(renderWithRedux(<App />, store));

    expect(screen.getAllByTestId("todo-item").length).toBe(4);

    const input = screen.getByTestId("input-elem");
    expect(input).toBeInTheDocument();

    fireEvent.input(input, { target: { value: "hello world" } });
    fireEvent.keyDown(input, { keyCode: 13 });

    expect(screen.getAllByTestId("todo-item").length).toBe(5);
  });
});
