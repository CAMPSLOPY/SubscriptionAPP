var toggleSwitch = document.getElementById("switcher");
var card = document.querySelector(".cards");
var monthlyCard = document.querySelector(".monthly-cards");
const checkBox = document.querySelector("input[name=theme]");
const pChange = document.querySelector("#p1");
const cardBtn = document.querySelectorAll("#modal-btn");
const modal = document.querySelector("#my-modal");
const learnMore = document.querySelectorAll(".learn-more");
const closeModal = document.getElementById("modal-close");

learnMore.forEach((button) => {
  button.addEventListener("click", (e) => {
    let type = e.currentTarget.getAttribute("data-package");
    toggleModal();
    updateModal(type, "Subscribe");
  });
});

closeModal.addEventListener("click", (e) => {
  toggleModal();
});

function toggleModal(e) {
  if (modal.style.display !== "block") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

function updateModal(title) {
  document.getElementById("modal-title").textContent = title;
}

const anime = () => {
  document.documentElement.classList.add("transition");

  // this is used to set timer for the animation on the html and body
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
checkBox.addEventListener("click", function () {
  if (this.checked) {
    anime();
    document.documentElement.setAttribute("data-theme", "dark");
    // pChange.innerHTML = "change to light mode :";
  } else {
    anime();
    document.documentElement.setAttribute("data-theme", "light");
    // pChange.innerHTML= "change to dark mode :";
  }
});

toggleSwitch.addEventListener("click", function (e) {
  if (card.style.display !== "none") {
    monthlyCard.style.display = "flex";
    card.style.display = "none";
  } else {
    monthlyCard.style.display = "none";
    card.style.display = "flex";
  }
});

TweenMax.to(".overlay", 1.5, {
  delay: 1.5,
  top: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.fromTo(
  ".cards",
  3,
  { y: "100%" },
  { y: "0%" },
  {
    delay: 1.5,
    ease: Expo.ease,
  }
);
