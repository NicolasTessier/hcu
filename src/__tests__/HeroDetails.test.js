import HeroDetails from "../screens/HeroDetails";
import { render, screen, waitFor } from "@testing-library/react";
import * as reactRedux from "react-redux";
import "@testing-library/jest-dom";
import data from "./data.json";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe(HeroDetails.name, () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it("renders HeroDetails spinner", () => {
    useSelectorMock.mockReturnValue(data);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <BrowserRouter>
        <HeroDetails />
      </BrowserRouter>
    );
    expect(screen.getByTestId("tail-spin-loading")).toBeInTheDocument();
  });

  it.skip("renders HeroDetails details", () => {
    //give up impossible de changer le useRef pour avoir les détails
  });
});
