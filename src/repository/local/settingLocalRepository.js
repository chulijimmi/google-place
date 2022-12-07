import storage from "./storage";
const key = "setting";
const get = () => storage.get(key);
const store = (data) => storage.store(key, data);
const settingLocalRepository = {
  get,
  store
};

export default settingLocalRepository;
