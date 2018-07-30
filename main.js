const API_URL = 'https://pixabay.com/api/?key=259184-e70235f90504f45f70d70e0e3';
const loadingImage = document.querySelector("#loadingImage");
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
  search(searchTerm);
}

function search(searchTerm) {
  const url = `${API_URL}&q=${searchTerm}&image_type=photo`;
  loadingImage.style.display = '';
  // shows image when page is loading
  fetch(url)
  // fetch -> promise based, needs a response
  .then(response => response.json())
  // access to the response object, this will also return a promise
  .then(result => {
    console.log(result);
  });
}
