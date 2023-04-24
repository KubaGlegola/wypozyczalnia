export const ItemsLoader = async () => {
  const response = await fetch(
    'https://wp.jglegola.pl/wp-json/wp/v2/items/?per_page=100'
  ).then(response => response.json());

  return response;
};
