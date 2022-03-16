import { render, screen } from "@testing-library/react";
import React from "react";
import Powerstats from "../components/Powerstats";
import "@testing-library/jest-dom";
import data from "./data.json";

// eslint-disable-next-line jest/valid-title
describe(Powerstats.name, () => {
  it("renders PowersStats", () => {
    render(<Powerstats powerstats={data.powerstats} />);
    expect(screen.getByText("Intelligence")).toBeInTheDocument();
    expect(screen.getByText("Strength")).toBeInTheDocument();
    expect(screen.getByText("Speed")).toBeInTheDocument();
    expect(screen.getByText("Durability")).toBeInTheDocument();
    expect(screen.getByText("Power")).toBeInTheDocument();
    expect(screen.getByText("Combat")).toBeInTheDocument();
  });

  it("doest not render PowersStats if its null", () => {
    const modifiedData = data.powerstats;
    modifiedData.combat = "null";
    render(<Powerstats powerstats={data.powerstats} />);
    expect(screen.getByText("Intelligence")).toBeInTheDocument();
    expect(screen.getByText("Strength")).toBeInTheDocument();
    expect(screen.getByText("Speed")).toBeInTheDocument();
    expect(screen.getByText("Durability")).toBeInTheDocument();
    expect(screen.getByText("Power")).toBeInTheDocument();
    expect(screen.queryByText("Combat")).not.toBeInTheDocument();
  });
});
