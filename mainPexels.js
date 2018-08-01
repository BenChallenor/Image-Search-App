const pexelsKey = config.PEXELS_KEY;
const DATA = 'https://api.pexels.com/v1/search?query=';
const loadingImage = document.querySelector("#loadingImage");
const imageSection = document.querySelector(".images");
const form = document.querySelector("form");
const input = document.querySelector("input");
const page = document.querySelector("#page");

loadingImage.style.display = 'none';

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = input.value;
  search(searchTerm)
    .then(displayImages);
}

function search(searchTerm) {
  const url = `${DATA}${searchTerm}&per_page=40`;
  const id = {
    headers: {
      'Authorization': pexelsKey
    }
  }
  imageSection.innerHTML = '';
  return fetch(url, id)
    .then(response => response.json())
    .then(result => {
      return result.photos;
    });
  loadingImage.style.display = '';
}

function displayImages(images) {
  console.log(images)
  images.forEach(image => {
    const imageElement = document.createElement('img');
    imageElement.src = image.src.large2x;
    imageSection.appendChild(imageElement);
  });
}
