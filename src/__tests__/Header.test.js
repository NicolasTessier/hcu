import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line jest/valid-title
describe(Header.name, () => {
  it("renders the header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Recherche")).toBeInTheDocument();
    expect(screen.getByText("Favoris")).toBeInTheDocument();
  });
});
