document.getElementById("dice-button").addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip;
      document.getElementById(
        "advice-number"
      ).textContent = `ADVICE #${advice.id}`;
      document.getElementById("advice-text").textContent = `"${advice.advice}"`;
    })
    .catch((error) => console.error("Error fetching advice:", error));
});
