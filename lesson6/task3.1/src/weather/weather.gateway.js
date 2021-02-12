const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities";

export const fetchWeatherData = () => {
  return fetch(baseUrl).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error();
  });
};
