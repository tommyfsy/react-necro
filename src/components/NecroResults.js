import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

const NecroResults = (props) => {
  const { display } = props;
  return (
    <Grid container xs={12} sm={6} justify="center">
      <Box width="90%" mt="20px">
        <Typography variant={"h5"}>Result:</Typography>
      </Box>
      <Box width="90%" maxHeight="10px">
        {display.map((d, i) => (
          <Typography key={i}>{d}</Typography>
        ))}
      </Box>
    </Grid>
  );
};

export default NecroResults;
