import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import data from "./data.json";
import * as reactRedux from "react-redux";
import { BrowserRouter } from "react-router-dom";
import HeroesList from "../components/HeroesList";

describe(HeroesList.name, () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it("renders Heroeslist", () => {
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <HeroesList heroes={[data]} />
      </BrowserRouter>
    );
    expect(screen.getAllByText(data.name)[0]).toBeInTheDocument();
  });

  it("renders void Heroeslist", () => {
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <HeroesList heroes={[]} />
      </BrowserRouter>
    );
    expect(
      screen.getByText(
        "La liste de héros/vilains est vide. N'hésitez pas à la remplir !"
      )
    ).toBeInTheDocument();
  });

  it("renders Heroeslist with two hero", () => {
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    const modifiedData = data;
    modifiedData.name = "Superman";
    render(
      <BrowserRouter>
        <HeroesList heroes={[data, modifiedData]} />
      </BrowserRouter>
    );
    expect(screen.getAllByText(data.name)[0]).toBeInTheDocument();
    expect(screen.getAllByText(modifiedData.name)[0]).toBeInTheDocument();
  });
});
