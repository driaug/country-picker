import React, { useState } from "react";
import CountrySelector from "../components/selector";
import { COUNTRIES } from "../lib/countries";
import { SelectMenuOption } from "../lib/types";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState<SelectMenuOption["value"]>("BE");

  return (
    <div
      className={"w-screen h-screen flex flex-col justify-center items-center"}
    >
      <div className={"w-96 px-5"}>
        <label className="block text-sm font-medium text-gray-700">
          Select a country
        </label>
        <CountrySelector
          id={"country-selector"}
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          onChange={setCountry}
          selectedValue={COUNTRIES.find((option) => option.value === country)}
        />
      </div>
    </div>
  );
}
