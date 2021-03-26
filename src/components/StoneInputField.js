import React from "react";
import {
  Box,
  TextField,
  IconButton,
  Grid,
  Typography
} from "@material-ui/core";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

const StoneInputField = (props) => {
  const { input, handleInputChange, handleReset } = props;
  return (
    <Grid container xs={12} sm={6} justify="center">
      <Box width="90%" mt="20px">
        <Typography variant={"h5"}>Stones:</Typography>
        <TextField
          size="small"
          color="secondary"
          helperText="Enter number of stones"
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          InputLabelProps={{ shrink: true }}
          value={input}
          onChange={handleInputChange}
        />
        <IconButton color="secondary" onClick={handleReset}>
          <RotateLeftIcon />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default StoneInputField;
