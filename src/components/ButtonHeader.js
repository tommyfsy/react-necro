import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";

const ButtonHeader = (props) => {
  const { input, handleClick } = props;
  return (
    <React.Fragment>
      <Grid container xs={12} justify="center">
        <Typography variant="h4" alignCenter>
          Test your necro luck
        </Typography>
      </Grid>
      <Grid container xs={12} sm={12} justify="center">
        <Box width="100%" mt="20px">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={input < 1}
            onClick={handleClick}
          >
            Necro
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default ButtonHeader;
