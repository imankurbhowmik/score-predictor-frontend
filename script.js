async function predictScore() {
      const hours = document.getElementById("hoursInput").value;
      const resultBox = document.getElementById("result");

      if (!hours || isNaN(hours) || hours <= 0) {
        resultBox.innerHTML = "⚠️ Please enter a valid number of hours.";
        return;
      }

      resultBox.innerHTML = "⏳ Predicting...";

      try {
        const response = await fetch(`https://score-predictor-backend.onrender.com/predict?hours=${hours}`);
        const data = await response.json();
        resultBox.innerHTML = `🎯 Predicted Score: <span style="color: #6e8efb;">${data.predicted_score}</span>`;
      } catch (error) {
        resultBox.innerHTML = "❌ Unable to connect to the server.";
        console.error(error);
      }
    }