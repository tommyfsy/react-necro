import "./styles.css";
import React, { useState, useEffect } from "react";
import { Button, TextField, IconButton, Grid, Paper } from "@material-ui/core";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

export default function App() {
  // state
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [input, setInput] = useState(1);
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
  const handleClick = (e) => {
    e.preventDefault();
    setNumber(between());
    setInput(input - 1);
    setDisplay([result, ...display]);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleReset = () => {
    setDisplay([]);
    setInput(1);
    setNumber("");
  };

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={7}>
        <Paper className="App" elevation={3}>
          <h1>Test your necro luck</h1>
          <form onSubmit={handleClick}>
            <TextField
              label="stones"
              size="small"
              color="secondary"
              helperText="Enter number of stones"
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              InputLabelProps={{ shrink: true }}
              value={input}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={input < 1}
            >
              Craft Necro
            </Button>
            <IconButton color="secondary" onClick={handleReset}>
              <RotateLeftIcon />
            </IconButton>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper className="App" elevation={3}>
          <h2>Result</h2>
          {display.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}
