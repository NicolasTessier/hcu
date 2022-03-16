import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Hero from "../components/Hero";
import "@testing-library/jest-dom";
import data from "./data.json";
import * as reactRedux from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe(Hero.name, () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it("renders Hero", () => {
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Hero hero={data} />
      </BrowserRouter>
    );
    expect(screen.getAllByText(data.name)[0]).toBeInTheDocument();
  });

  it("triggers dispatch", () => {
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Hero hero={data} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId("dispatch"));
    expect(dispatch).toHaveBeenCalled();
  });

  it("renders Hero not in favourites", () => {
    useSelectorMock.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Hero hero={data} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("star")).toHaveAttribute("fill", "white");
  });

  it("renders Hero in favourites", () => {
    useSelectorMock.mockReturnValue([data]);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <Hero hero={data} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("star")).toHaveAttribute("fill", "yellow");
  });
});
