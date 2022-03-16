import { render, screen } from "@testing-library/react";
import Details from "../components/Details";
import "@testing-library/jest-dom";
import data from "./data.json";
import React from "react";

describe(Details.name, () => {
  it("renders details", () => {
    render(<Details hero={data} />);
    expect(screen.getAllByText(data.name)[0]).toBeInTheDocument();
    expect(
      screen.getByText("Aliasis : Insider, Matches Malone")
    ).toBeInTheDocument();
    expect(screen.getByText("Race : Human")).toBeInTheDocument();
    expect(
      screen.getByText("Alter-egos : No alter egos found.")
    ).toBeInTheDocument();
    expect(screen.getByText("Alignment : good")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Base : Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Name : Bruce Wayne")).toBeInTheDocument();
    expect(screen.getByText("Occupation : Businessman")).toBeInTheDocument();
    expect(screen.getByText("Height : 6'2, 188 cm")).toBeInTheDocument();
    expect(screen.getByText("Weight : 210 lb, 95 kg")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Place of Birth : Crest Hill, Bristol Township; Gotham County"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Publication")).toBeInTheDocument();
    expect(
      screen.getByText("First Appearance : Detective Comics #27")
    ).toBeInTheDocument();
    expect(screen.getByText("Publisher : DC Comics")).toBeInTheDocument();
    expect(screen.getByText("Powerstats")).toBeInTheDocument();
    expect(screen.getByText("Intelligence")).toBeInTheDocument();
  });

  it("does not render powerstats if there are all null", () => {
    const modifiedData = data;
    modifiedData.powerstats.combat = "null";
    modifiedData.powerstats.power = "null";
    modifiedData.powerstats.durability = "null";
    modifiedData.powerstats.intelligence = "null";
    modifiedData.powerstats.speed = "null";
    modifiedData.powerstats.strength = "null";
    render(<Details hero={data} />);
    expect(screen.queryByText("Powerstats")).not.toBeInTheDocument();
  });
});
