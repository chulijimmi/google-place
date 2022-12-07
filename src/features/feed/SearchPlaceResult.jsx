import {
  Chip,
  CircularProgress,
  Grid,
  ListItemText,
  MenuItem,
  MenuList,
  Paper
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import BaseBox from "../../components/BaseBox";
import { addVisits, removeVisits } from "./feedSlice";
import BaseTypography from "../../components/BaseTypography";

function SearchPlaceResult() {
  const state = useSelector((state) => state.feed);
  const showPlaces = !state.errorMessage && state.search !== "";
  const dispatch = useDispatch();
  const handleVisit = (place) => {
    dispatch(addVisits(place));
  };
  const handleDelete = (place) => {
    dispatch(removeVisits(place));
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: "10px" }}
    >
      {showPlaces && (
        <Paper
          sx={{
            padding: "10px 0px",
            alignItems: "center",
            justifyContent: "center",
            width: 400
          }}
        >
          {state.visits.length > 0 && (
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <BaseTypography variant={"h5"}>Latest Visits</BaseTypography>
              <BaseBox
                direction="row"
                sx={{
                  padding: "0px 5px",
                  textAlign: "center"
                }}
              >
                {state.visits.map((item) => (
                  <Chip
                    key={item.id}
                    label={item.description}
                    onDelete={() => handleDelete(item)}
                    size="small"
                    sx={{ margin: "3px" }}
                  />
                ))}
              </BaseBox>
            </Grid>
          )}

          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {state.loading && (
              <CircularProgress size={20} sx={{ marginTop: "10px" }} />
            )}
            {!state.loading && (
              <MenuList sx={{ width: "100%" }}>
                {state.places.map((item) => (
                  <MenuItem
                    key={item.reference}
                    onClick={() => handleVisit(item)}
                    data-testid="item-place"
                  >
                    <ListItemText>{item.description}</ListItemText>
                  </MenuItem>
                ))}
              </MenuList>
            )}
          </Grid>
        </Paper>
      )}
    </Grid>
  );
}

export default SearchPlaceResult;
