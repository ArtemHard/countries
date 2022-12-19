import React, { useEffect } from "react";
import { Search } from "./Search";
import { useState } from "react";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";
const options = [
  { value: "Африка", label: "Африка" },
  { value: "Америка", label: "Америка" },
  { value: "Азия", label: "Азия" },
  { value: "Европа", label: "Европа" },
  { value: "Океания", label: "Океания" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    let regionValue = "";
    if (region?.value === "Африка") {
      regionValue = "Africa";
    }
    if (region?.value === "Америка") {
      regionValue = "Americas";
    }
    if (region?.value === "Азия") {
      regionValue = "Asia";
    }
    if (region?.value === "Европа") {
      regionValue = "Europe";
    }
    if (region?.value === "Океания") {
      regionValue = "Oceania";
    }

    onSearch(search, regionValue);
    // eslint-disable-next-line
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder='Фильтрация по региону'
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};
