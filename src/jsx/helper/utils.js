export const setCurrentUser = (user) => {
  try {
    if (user) {
      localStorage.setItem('@user', JSON.stringify(user));
    } else {
      localStorage.removeItem('@user');
    }
  } catch (error) {
    // console.log(">>>>: src/helpers/Utils.js : setCurrentUser -> error", error)
  }
};

export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      localStorage.getItem('@user') !== null
        ? JSON.parse(localStorage.getItem('@user'))
        : null;
  } catch (error) {
    user = null;
  }
  return user;
};

export const useQueryParams = () => {
  // const windowUrl = window.location.search;
  // const params = new URLSearchParams(windowUrl);
  const params = new URLSearchParams(
    window ? window.location.search : {}
  );
  return params;

};