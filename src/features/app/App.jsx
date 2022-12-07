import { Container } from "@mui/material";
import React from "react";
import BaseTypography from "../../components/BaseTypography";
import BaseBox from "../../components/BaseBox";
import BaseButton from "../../components/BaseButton";
import { useNavigate } from "react-router-dom";
import settingLocalRepository from "../../repository/local/settingLocalRepository";
import { useDispatch } from "react-redux";
import { setTheme } from "../setting/settingSlice";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const cache = settingLocalRepository.get();
    if (cache != null) {
      dispatch(setTheme(cache));
    }
  }, [dispatch]);
  return (
    <Container>
      <BaseBox style={{ width: 780, backgroundColor: "#ffffff00" }}>
        <BaseTypography variant="h1">Welcome to Google Place</BaseTypography>
        <BaseTypography variant="body2">
          Easy and Fast to find the location from your browser.
        </BaseTypography>
        <BaseButton onClick={() => navigate("feed")}>Feed</BaseButton>
        <BaseButton onClick={() => navigate("setting")}>Setting</BaseButton>
      </BaseBox>
    </Container>
  );
}

export default App;
