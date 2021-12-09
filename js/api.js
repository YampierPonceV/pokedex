const BASE_API = "https://pokeapi.co/api/v2/";
const $modal = document.querySelector("#modal");

const apiConection = async (pokemon) => {
  try {
    if (typeof pokemon === "string") pokemon = pokemon.toLowerCase();
    // pokemon = pokemon.toLowerCase();
    const response = await fetch(`${BASE_API}pokemon/${pokemon}`);
    const data = await response.json();

    return data;
  } catch (error) {
    $modal.classList.add("modal-active");
  }
};

const apiSpecie = async (pokemon) => {
  if (typeof pokemon === "string") pokemon = pokemon.toLowerCase();
  // pokemon = pokemon.toLowerCase();
  const response = await fetch(`${BASE_API}pokemon-species/${pokemon}`);
  const data = await response.json();
  return data;
};

const sprites = async (pokemon) => {
  if (typeof pokemon === "string") pokemon = pokemon.toLowerCase();
  // pokemon = pokemon.toLowerCase();
  const response = await fetch(`${BASE_API}pokemon/${pokemon}/`);
  const data = await response.json();
  const { sprites } = data;
  return sprites;
};

export { apiConection, apiSpecie, sprites };
