import * as React from "react";
import { Container } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import BaseTypography from "../../components/BaseTypography";
import { useDispatch, useSelector } from "react-redux";
import { themeToogled } from "./settingSlice";
import BaseBox from "../../components/BaseBox";

function Setting() {
  const theme = useSelector((state) => state.setting.theme.name);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(themeToogled());
  };

  return (
    <BaseBox
      sx={{
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
        paddingTop: "15px"
      }}
    >
      <Container>
        <BaseTypography variant="h5">Setting</BaseTypography>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Theme</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={theme}
            onChange={handleChange}
          >
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          </RadioGroup>
        </FormControl>
      </Container>
    </BaseBox>
  );
}

export default Setting;
