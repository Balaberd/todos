import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../../components/widgets";
import { renderWithRedux } from "../helpers/renderWithRedux";
import { setupStore } from "../../store/store";

describe("Header tests", () => {
  test("Header input rendered", () => {
    const store = setupStore();
    const { getByTestId } = render(renderWithRedux(<Header />, store));
    const input = getByTestId("input-elem");
    expect(input).toBeInTheDocument();
  });
  test("Header input changed", () => {
    const store = setupStore();
    render(renderWithRedux(<Header />, store));

    const input = screen.getByPlaceholderText(/what needs to be done/i);
    expect(input).toContainHTML("");

    fireEvent.input(input, { target: { value: "hello world" } });
    expect(input).toContainHTML("hello world");
  });
  test("input is clear", () => {
    const store = setupStore();
    render(renderWithRedux(<Header />, store));

    const input = screen.getByTestId("input-elem");

    fireEvent.input(input, { target: { value: "hello world" } });
    fireEvent.keyDown(input, { charCode: 13 });

    expect(input).toContainHTML("");
  });
});
