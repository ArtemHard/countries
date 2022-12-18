import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";

export const HomePage = () => {
  const [countries, setCounries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCounries(data));
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              {
                title: "Region",
                description: country.region,
              },
              {
                title: "Capital",
                description: country.capital,
              },
            ],
          };
          return <Card key={country.name} {...countryInfo} />;
        })}
      </List>
    </>
  );
};
