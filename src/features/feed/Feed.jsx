import { Container } from "@mui/material";
import BaseBox from "../../components/BaseBox";
import SearchPlaceForm from "./SearchPlaceForm";
import SearchPlaceResult from "./SearchPlaceResult";

function Feed() {
  return (
    <BaseBox
      sx={{
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
        padding: "15px 0px"
      }}
    >
      <Container>
        <SearchPlaceForm />
        <SearchPlaceResult />
      </Container>
    </BaseBox>
  );
}

export default Feed;
