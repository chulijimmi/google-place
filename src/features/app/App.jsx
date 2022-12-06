import { Container } from "@mui/material";
import React from "react";
import BaseTypography from "../../components/BaseTypography";
import BaseBox from "../../components/BaseBox";
function App() {
  return (
    <Container>
      <BaseBox style={{ width: 780, backgroundColor: "#ffffff00" }}>
        <BaseTypography variant="h1">Welcome to Google Place</BaseTypography>
        <BaseTypography variant="body2">
          Easy and Fast to find the location from your browser.
        </BaseTypography>
      </BaseBox>
    </Container>
  );
}

export default App;
