import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { ALL_COUNTRIES } from "../constants";
import { useNavigate } from "react-router-dom";

export const HomePage = ({ countries, setCountries }) => {
  const navigate = useNavigate();

  const [filtredCountries, setFiltredCountries] = useState(countries);

  useEffect(() => {
    setFiltredCountries(countries);
  }, [countries]);

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, [countries, setCountries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filtredCountries.map((country) => {
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
          return (
            <Card
              key={country.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${country.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};
