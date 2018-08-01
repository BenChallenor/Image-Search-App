const flickrKey = config.FLICKR_KEY;
const API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrKey;
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
  const url = `${API_URL}&tags=${searchTerm}&per_page=500&license=7,8,9&format=json&nojsoncallback=1`;
  loadingImage.style.display = '';
  imageSection.innerHTML = '';
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result.photos);
      return (result.photos.photo);
    });
}

function displayImages(images) {
  images.forEach(photo => {
    const imageElement = document.createElement('img');
    imageElement.src = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "z.jpg";
    imageSection.appendChild(imageElement);
  });
  loadingImage.style.display = 'none';
}
