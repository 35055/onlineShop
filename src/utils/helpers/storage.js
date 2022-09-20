const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);
};

export { setItem, getItem };
