import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import ButtonHeader from "./components/ButtonHeader";
import StoneInputField from "./components/StoneInputField";
import NecroResults from "./components/NecroResults";

export default function App() {
  // state
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [input, setInput] = useState(3);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const rng = between();
    if (rng === number) {
      setResult("You have successfully crafted Necro");
    } else {
      setResult("You failed to craft Necro");
    }
  }, [number]);

  // generate random number
  const between = () => {
    return Math.floor(Math.random() * 25 + 1);
  };

  // handle
  const handleClick = () => {
    setNumber(between());
    setInput(input - 1);
    setDisplay([result, ...display]);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleReset = () => {
    setDisplay([]);
    setInput(3);
    setNumber("");
  };

  return (
    <Container>
      <Grid container>
        <ButtonHeader input={input} handleClick={handleClick} />
        <Grid container xs={12}>
          <StoneInputField
            input={input}
            handleInputChange={handleInputChange}
            handleReset={handleReset}
          />
          <NecroResults display={display} />
        </Grid>
      </Grid>
    </Container>
  );
}
