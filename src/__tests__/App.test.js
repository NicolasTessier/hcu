import { render, screen } from "@testing-library/react";
import App from "./../App";
import React from "react";
import * as reactRedux from "react-redux";
import "@testing-library/jest-dom";

describe(App.name, () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
  });
  it("renders App", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByTestId("logoHome")).toBeInTheDocument();
    expect(screen.getByText("Recherche")).toBeInTheDocument();
  });
});
