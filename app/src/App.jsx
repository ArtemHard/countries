import "./App.css";
import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import axios from "axios";
import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "./constants";

function App() {
  const [countries, setCounries] = useState([]);

  console.log(countries);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCounries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
}

export default App;
