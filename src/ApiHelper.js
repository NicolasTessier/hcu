export const fetchHeroes = (params) => {
  const query = params.query;
  return fetch(`/api/${process.env.REACT_APP_KEY}/search/${query}`).then(
    (response) => response.json()
  );
};
