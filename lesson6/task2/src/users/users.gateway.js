export const getUserData = (userName) => {
  return fetch().then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error();
  });
};
