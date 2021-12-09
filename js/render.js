import { apiConection, apiSpecie } from "./api.js";
import speach from "./speach.js";
import layout from "./layout.js";
import chartJS from "./chart.js";

let myChart;

const incializar = async (pokemon) => {
  const data = await apiConection(pokemon);
  const especie = await apiSpecie(pokemon);

  const type = data.types.map((type) => type.type.name);
  const txt = especie.flavor_text_entries.find(
    (flavor) => flavor.language.name === "es"
  );

  //reder de imagenes
  const image_1 = data.sprites.front_default;
  const image_2 = data.sprites.other.dream_world.front_default;
  const front_default = image_2 || image_1;

  //pintar en el DOM
  layout(data.name, front_default, txt.flavor_text);

  //hablar
  speach(`${data.name} es un pokemón de tipo ${type}. ${txt.flavor_text}`);
  if (myChart) {
    myChart.destroy();
  }
  const stats = data.stats.map((stat) => stat.base_stat);
  myChart = chartJS(stats);
};

export default incializar;
