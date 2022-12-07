import storage from "./storage";

const store = (data) => {
  const key = "VISITED_PLACE";
  return storage.store(key, data);
};

const googleLocalRepository = {
  store
};

export default googleLocalRepository;
