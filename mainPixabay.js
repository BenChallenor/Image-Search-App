const pixabayKey = config.PIXABAY_KEY;
const API_URL = 'https://pixabay.com/api/?key=' + pixabayKey;
const loadingImage = document.querySelector("#loadingImage");
const imageSection = document.querySelector(".images");
const form = document.querySelector("form");
const input = document.querySelector("input");
// stores input as a variable

loadingImage.style.display = 'none';
// loadingImage doesnt show by default

form.addEventListener("submit", formSubmitted);
// listens for the submit event

function formSubmitted(event) {
  event.preventDefault();
  // stops form from refreshing by default the form tries to send the data somewhere
  const searchTerm = input.value;
  // gets the value of the search input
  search(searchTerm)
    .then(displayImages);
}

function search(searchTerm) {
  const url = `${API_URL}&q=${searchTerm}&per_page=200&image_type=photo`;
  loadingImage.style.display = '';
  // shows image when page is loading
  imageSection.innerHTML = '';
  // clears the page before search
  return fetch(url)
    // by returning fetch - search now returns a promise
    // fetch -> promise based, needs a response
    .then(response => response.json())
    // access to the response object, this will also return a promise
    .then(result => {
      // console.log(result);
      return result.hits;
      // promise returns hits array
    });
}

function displayImages(images) {
  images.forEach(image => {
    // console.log(image.largeImageURL);
    // itterates over each array
    const imageElement = document.createElement('img');
    // create img tag
    imageElement.src = image.largeImageURL;
    // sets the url
    imageSection.appendChild(imageElement);
  });
  loadingImage.style.display = 'none';
  // loading image goes away once images are received
}
