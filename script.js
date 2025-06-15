async function predictScore() {
  const hours = document.getElementById("hoursInput").value;
  const resultBox = document.getElementById("result");

  if (!hours || isNaN(hours) || hours <= 0 || hours > 24) {
    resultBox.innerHTML = "⚠️ Please enter a valid number of hours (1–24).";
    return;
  }

  resultBox.innerHTML = "⏳ Predicting...";

  try {
    const response = await fetch(`https://score-predictor-backend.onrender.com/predict?hours=${hours}`);
    const data = await response.json();

    // Cap the score at 100
    let score = data.predicted_score;
    if (score > 100) score = 100;

    resultBox.innerHTML = `🎯 Predicted Score: <span style="color: #6e8efb;">${score}</span>`;
  } catch (error) {
    resultBox.innerHTML = "❌ Unable to connect to the server.";
    console.error(error);
  }
}
