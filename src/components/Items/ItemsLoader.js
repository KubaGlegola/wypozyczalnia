export const ItemsLoader = async () => {
  const response = await fetch(
    'https://wp.jglegola.pl/wp-json/wp/v2/items'
  ).then(response => response.json());

  return response;
};
