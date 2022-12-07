import { Paper, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import BaseInput from "../../components/BaseInput";
import { setSearch } from "./feedSlice";
import { useState } from "react";

function SearchPlaceForm() {
  const [place, setPlace] = useState("");
  const dispatch = useDispatch();
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setPlace(value);
    dispatch(setSearch(value));
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        component="form"
        sx={{
          padding: "10px 10px",
          display: "flex",
          alignItems: "center",
          width: 380
        }}
      >
        <BaseInput
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Place"
          onChange={handleSearchChange}
          value={place}
        />
      </Paper>
    </Grid>
  );
}

export default SearchPlaceForm;
