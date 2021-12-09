import incializar from "./js/render.js";
import "./js/chart.js";
import { sprites } from "./js/api.js";
const $ = (selector) => document.querySelector(selector);

const $input = $("#input");
const $btn = $("#random");
const $left = $("#left");
const $right = $("#right");
const $up = $("#up");
const $down = $("#down");
const $image = $("#image-pokemon");
const $modal = $("#modal-btn");

$input.addEventListener("change", (e) => {
  incializar($input.value);
});

$input.addEventListener("key", (e) => {
  if (e.keyCode === 13) {
    incializar($input.value);
  }
});

$btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 800);
  $input.value = random;
  incializar(random);
});

$left.addEventListener("click", () => {
  if ($input.value == "") return;
  const previu = parseInt($input.value) - 1;
  $input.value = previu;
  incializar(previu);
});
$right.addEventListener("click", () => {
  if ($input.value == "") return;
  const next = parseInt($input.value) + 1;
  $input.value = next;
  incializar(next);
});

$up.addEventListener("click", async () => {
  if ($input.value == "") return;
  const data = await sprites($input.value);
  const img = await data.back_default;
  $image.src = img;
});

$down.addEventListener("click", async () => {
  if ($input.value == "") return;
  const data = await sprites($input.value);
  const img_1 = await data.other.dream_world.front_default;
  const img_2 = await data.front_default;
  $image.src = img_1 || img_2;
});

$modal.addEventListener("click", () => {
  console.log($modal.parentNode.classList.remove("modal-active"));
  $input.value = "";
  $input.focus();
});
