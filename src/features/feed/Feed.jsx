import { useDispatch } from "react-redux";
import { setSearch } from "./feedSlice";

function Feed() {
  const dispatch = useDispatch();
  console.log("node", process.env);
  return (
    <div>
      Feed <button onClick={() => dispatch(setSearch("Ja"))}>Set Search</button>
    </div>
  );
}

export default Feed;
