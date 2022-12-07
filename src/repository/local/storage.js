const store = (key, value) => {
  return localStorage.setItem(key, value);
};

const get = (key) => {
  return localStorage.getItem(key);
};

const storage = {
  store,
  get
};

export default storage;
