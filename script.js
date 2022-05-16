/* chama o elemeneto de video e add em uma variável */
let video = document.querySelector(".video");

/* Variáveis para esconder e mostrar os botões */
let container = document.querySelector(".container");
let controls = document.querySelector(".controls");

/*Função para voltar 10s de video */
document.querySelector("#back").addEventListener("click", () => {
  video.currentTime -= 10;
});

/*Função para passar 10s de video */
document.querySelector("#pass").addEventListener("click", () => {
  video.currentTime += 10;
});

/* Função para aumentar a velocidade do video */
document.querySelector("#increase").addEventListener("click", () => {
  video.playbackRate += 0.1;
});

/* Função para diminuir velocidade de video */
document.querySelector("#decrease").addEventListener("click", () => {
  video.playbackRate -= 0.1;
});

/* Função de play video */
document.querySelector("#playV").addEventListener("click", () => {
  video.play();
});

/* Função de pausar video com um click video */
document.querySelector("#stopV").addEventListener("click", () => {
  video.pause();
});

/* Função de stop com duble click */
document.querySelector("#stopV").addEventListener("dblclick", () => {
  video.pause();
  video.currentTime = 0;
});

/* ::::::::::::::::::::::::::::::Ocultar botões ::::::::::::::::::::::::::::: */
container.addEventListener("mouseenter", () => {
  if (controls.style.display === "none") {
    controls.style.display = "block";
  } else {
    controls.style.display = "block";
  }
});

/* ::::::::::::::::::::::::::::::Mostrar botões ::::::::::::::::::::::::::::: */
container.addEventListener("mouseleave", () => {
  if (controls.style.display === "block") {
    controls.style.display = "none";
  }
});
