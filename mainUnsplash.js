const unsplashKey = config.UNSPLASH_KEY;
const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=30&client_id=` + unsplashKey;
const loadingImage = document.querySelector("#loadingImage");
const imageSection = document.querySelector(".images");
const form = document.querySelector("form");
const input = document.querySelector("input");

loadingImage.style.display = 'none';

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = input.value;
  search(searchTerm)
    .then(displayImages);
}

function search(searchTerm) {
  const url = `${API_URL}&query=${searchTerm}`;
  imageSection.innerHTML = '';
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result.results;
    });
  loadingImage.style.display = '';
}

function displayImages(images) {
  images.forEach(image => {
    const imageElement = document.createElement('img');
    imageElement.src = image.urls.regular;
    imageSection.appendChild(imageElement);
  });
  loadingImage.style.display = 'none';
}
