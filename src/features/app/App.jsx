import { Container } from "@mui/material";
import React from "react";
import BaseBox from "../../components/BaseBox";
import BaseButton from "../../components/BaseButton";

function App() {
  return (
    <React.Fragment>
      <BaseBox>
        <Container maxWidth="sm">
          <BaseButton color="primary" variant="contained" text="Find Place" />
        </Container>
      </BaseBox>
    </React.Fragment>
  );
}

export default App;
