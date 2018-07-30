const form = document.querySelector("form");
const input = document.querySelector("input");
// stores input as a variable

form.addEventListener("submit", formSubmitted);
// listens for the submit event

function formSubmitted(event) {
  event.preventDefault();
  // stops form from refreshing by default the form tries to send the data somewhere
  const searchTerm = input.value;
  // gets the value of the search input
  search(searchTerm);
}
