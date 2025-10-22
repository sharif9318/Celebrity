const container = document.querySelector(".container");
for (var i = 0; i <= 50; i++) {
  const block = document.createElement("div");
  block.classList.add("blockclass");
  container.appendChild(block);
}
function animateBlocks() {
  anime({
    targets: ".blockclass",
    translateX: function () {
      return anime.random(-700, 700);
    },
    translateY: function () {
      return anime.random(-200, 200);
    },
    scale: function () {
      return anime.random(-10, 10);
    },
    easing: "linear",
    duration: 2000,
    delay: anime.stagger(10),
    complete: animateBlocks,
  });
}

animateBlocks();
