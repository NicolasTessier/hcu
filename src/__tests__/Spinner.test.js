import { render, screen } from "@testing-library/react";
import React from "react";
import Spinner from "../components/Spinner";
import "@testing-library/jest-dom";

// eslint-disable-next-line jest/valid-title
describe(Spinner.name, () => {
  it("renders Spinner", () => {
    render(<Spinner />);
    expect(screen.getByTestId("tail-spin-loading")).toBeInTheDocument();
  });
});
