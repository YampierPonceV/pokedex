const speach = (texto) => {
  const $animation = document.getElementById("animation");
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "es-ES";
  utterance.rate = 0.8;
  speechSynthesis.speak(utterance);
  $animation.classList.add("circle-big-animation");

  utterance.onend = () => {
    $animation.classList.remove("circle-big-animation");
  };
};

export default speach;
