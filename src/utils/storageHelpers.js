// Session storage helpers
export const getFromSession = (name) => {
  const data = sessionStorage.getItem(name);
  return data;
};
export const setToSession = (name, value) => {
  const data = sessionStorage.setItem(name, value);
  return data;
};
export const clearSession = (name) => {
  const data = sessionStorage.removeItem(name);
  return data;
};

// Local storage helpers
export const getFromLocal = (value) => {
  const data = localStorage.getItem(value);
  return data;
};

export const setToLocal = (name, value) => {
  const data = localStorage.setItem(name, value);
  return data;
};
export const clearLocal = (name) => {
  const data = localStorage.removeItem(name);
  return data;
};

// Clear Both
export const earaseAll = () => {
  localStorage.clear();
  sessionStorage.clear();
};
