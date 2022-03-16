import Home from "../screens/Home";
import { render, screen, waitFor } from "@testing-library/react";
import * as reactRedux from "react-redux";
import "@testing-library/jest-dom";
import data from "./data.json";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "regenerator-runtime/runtime";

describe(Home.name, () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it("renders Home", () => {
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByTestId("logoHome")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("renders Home without hero", () => {
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(
      screen.getByText("Cherchez un hero ou un vilain ↑")
    ).toBeInTheDocument();
  });

  it("renders the spinner in suspense", () => {
    useSelectorMock.mockReturnValue([data]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByTestId("tail-spin-loading")).toBeInTheDocument();
  });

  it("renders Home with hero", async () => {
    useSelectorMock.mockReturnValue([data]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getAllByText(data.name)[0]).toBeInTheDocument();
    });
  });

  it("renders the error when no hero match", async () => {
    useSelectorMock.mockReturnValue(["error"]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(
        screen.getByText(
          "Il n'y pas de hero ni de vilain qui correspondent à votre recherche"
        )
      ).toBeInTheDocument();
    });
  });
});
