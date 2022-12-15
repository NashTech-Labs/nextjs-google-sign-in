import React from "react";
import Grid from "@mui/material/Grid";

function Homepage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "60vh" }}
    >
      <h1>Welcome to Homepage</h1>
    </Grid>
  );
}

export default Homepage;
