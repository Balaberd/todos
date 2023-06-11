import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../../components/shared/Button/Button";

describe("Button tests", () => {
  test("Button render", () => {
    render(<Button onClick={() => {}}>click</Button>);
    const button = screen.getByRole("button");
    const buttonText = screen.getByText(/click/i);
    expect(button).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});
