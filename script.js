let selectedRating = 0;
let ratingOutput = document.getElementById("rating");
let ratingState = document.getElementById("rating-state");
let thankYouState = document.getElementById("thank-you-state");

function selectRating(rating) {
  selectedRating = rating;
}

function changeState() {
  if (selectedRating > 0 && selectedRating <= 5) {
    ratingState.style.display = "none";
    ratingOutput.innerHTML = selectedRating; 
    thankYouState.style.display = "flex";
  }
  else {
    alert("Please give us a Rating");
  }
}