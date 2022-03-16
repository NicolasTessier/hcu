import { render, screen } from "@testing-library/react";
import React from "react";
import Powerbar from "../components/Powerbar";
import "@testing-library/jest-dom";

// eslint-disable-next-line jest/valid-title
describe(Powerbar.name, () => {
  it("renders Powerbar with full stat", () => {
    render(<Powerbar value={97} />);
    expect(screen.getAllByTestId("full")).toHaveLength(10);
  });

  it("renders Powerbar with empty stat", () => {
    render(<Powerbar value={2} />);
    expect(screen.getAllByTestId("empty")).toHaveLength(10);
  });

  it("renders Powerbar with balanced stat", () => {
    render(<Powerbar value={57} />);
    expect(screen.getAllByTestId("full")).toHaveLength(6);
    expect(screen.getAllByTestId("empty")).toHaveLength(4);
  });
});
