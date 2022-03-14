export const fetchHeroes = (query) => {
  return fetch(`/api/${process.env.REACT_APP_KEY}/search/${query}`).then(
    (response) => response.json()
  );
};
