let carousel = document.querySelector(".carousel");
let carouselLeftButton = document.querySelector(".carousel_button-left");
let carouselRightButton = document.querySelector(".carousel_button-right");

let carouselImages = [
  "./img/1.jpeg",
  "./img/2.jpeg",
  "./img/3.jpeg",
  "./img/4.jpeg",
  "./img/5.jpeg",
  "./img/6.jpeg"
];

let carouselData = {
  lastImageIndex: carouselImages.length - 1,
  listOfImages: carouselImages,
  currentImageIndex: 0
};

function changeImage() {
  let currentImageIndex = carouselData.currentImageIndex;
  carousel.style.background = `url(${
    carouselData.listOfImages[currentImageIndex]
  }) center center/ cover no-repeat`;
}

function checkWhetherTodisplayRightButton() {
  if (
    carouselData.currentImageIndex !== carouselData.lastImageIndex &&
    carouselRightButton.classList.contains("hidden")
  ) {
    carouselRightButton.classList.remove("hidden");
  }
  if (carouselData.currentImageIndex === carouselData.lastImageIndex) {
    carouselRightButton.classList.add("hidden");
  }
}

function checkWhetherTodisplayLeftButton() {
  if (
    carouselData.currentImageIndex !== 0 &&
    carouselLeftButton.classList.contains("hidden")
  ) {
    carouselLeftButton.classList.remove("hidden");
  }
  if (carouselData.currentImageIndex === 0) {
    carouselLeftButton.classList.add("hidden");
  }
}

function displayButtonAndChangeImage() {
  checkWhetherTodisplayRightButton();
  checkWhetherTodisplayLeftButton();
  changeImage();
}

function handleLeftClick() {
  carouselData.currentImageIndex--;
  displayButtonAndChangeImage();
}

function handleRightClick() {
  carouselData.currentImageIndex++;
  displayButtonAndChangeImage();
}

function updateBackgroundImage(clickType) {
  switch (clickType) {
    case "left":
      handleLeftClick();
      break;

    case "right":
      handleRightClick();
      break;
    default:
      throw new Error("wrong click type");
  }
}

carouselLeftButton.addEventListener("click", () => {
  updateBackgroundImage("left");
});

carouselRightButton.addEventListener("click", () => {
  updateBackgroundImage("right");
});
