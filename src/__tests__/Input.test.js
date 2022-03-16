import { render, screen } from "@testing-library/react";
import React from "react";
import Input from "../components/Input";
import "@testing-library/jest-dom";

// eslint-disable-next-line jest/valid-title
describe(Input.name, () => {
  it("renders Input", () => {
    const funct = jest.fn();
    render(<Input value="test" onChange={funct} />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });
});
