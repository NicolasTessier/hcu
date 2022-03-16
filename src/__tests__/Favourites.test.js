import Favourites from "../screens/Favourites";
import { render, screen, waitFor } from "@testing-library/react";
import * as reactRedux from "react-redux";
import "@testing-library/jest-dom";
import data from "./data.json";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "regenerator-runtime/runtime";

describe(Favourites.name, () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it("renders Favourites", () => {
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Favourites />
      </BrowserRouter>
    );
    expect(screen.getByTestId("logoFavourites")).toBeInTheDocument();
  });

  it("renders Favourites without hero", () => {
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Favourites />
      </BrowserRouter>
    );
    expect(
      screen.getByText(
        "La liste de héros/vilains est vide. N'hésitez pas à la remplir !"
      )
    ).toBeInTheDocument();
  });

  it("renders Favourites with hero", async () => {
    useSelectorMock.mockReturnValue([data]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Favourites />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getAllByText(data.name)[0]).toBeInTheDocument();
    });
  });
});
