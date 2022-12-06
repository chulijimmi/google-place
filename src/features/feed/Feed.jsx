import { useDispatch } from "react-redux";
import { setSearch } from "./feedSlice";

function Feed() {
  const dispatch = useDispatch();
  return (
    <div>
      Feed <button onClick={() => dispatch(setSearch("Ja"))}>Set Search</button>
    </div>
  );
}

export default Feed;
