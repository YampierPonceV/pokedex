const layout = (name, img, description) => {
  const $name = document.getElementById("name");
  const $img = document.getElementById("image-pokemon");
  const $description = document.getElementById("description");

  // console.log(name);

  $img.src == "" ? ($img.src = "/assets/loader.svg") : ($img.src = img);

  $name.innerHTML = name;
  $img.src = img;
  $description.innerHTML = description;
};

export default layout;
