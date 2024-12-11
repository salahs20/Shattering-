let cont = document.querySelector(".container");
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    let box = document.createElement("div");
    if ((row + col) % 2 == 0) {
      box.classList.add("white");
    } else {
      box.classList.add("black");
    }
    cont.appendChild(box);
  }
}
