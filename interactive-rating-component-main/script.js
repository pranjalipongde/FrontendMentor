const mainContainer = document.querySelector(".main-container");
const thankyouContainer = document.querySelector(".thankyou-card");
const submitBtn = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
const popupMessage = document.getElementById("popup-message");

submitBtn.addEventListener("click", () => {
  const selectedRating = rating.innerHTML;
  if (selectedRating === "0") {
    popupMessage.style.display = "block";
    return;
  }
  popupMessage.style.display = "none";

  thankyouContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thankyouContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
