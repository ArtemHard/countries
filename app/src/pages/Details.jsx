import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { searchByCountry } from "../constants";
import { Button } from "../components/Button";

export const Details = () => {
  const { name } = useParams();

  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  console.log(country);
  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => {
      setCountry(...data);
    });
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack />
        Назад
      </Button>
      Details {name}
    </div>
  );
};
