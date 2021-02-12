const baseurl = "https://api.github.com/users";

export const getUserData = (userName) => {
  return fetch(`${baseurl}/${userName}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error();
  });
};
