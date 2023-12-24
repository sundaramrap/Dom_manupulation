//VARIABLES
const openbtn = document.getElementById("modal-btn");
const modalConatiner = document.getElementById("modal-container");

const closeBtn = document.getElementById("close-btn");

// eventlistner

openbtn.addEventListener("click", () => {
  modalConatiner.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalConatiner.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalConatiner) {
    modalConatiner.style.display = "none";
  }
});

// applying styling to modal conatiner
