async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://wttr.in/${city}?format=j1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const current = data.current_condition[0];
    const output = `
      <strong>${city}</strong><br/>
      Temperature: ${current.temp_C}°C<br/>
      Feels Like: ${current.FeelsLikeC}°C<br/>
      Humidity: ${current.humidity}%<br/>
      Condition: ${current.weatherDesc[0].value}
    `;

    document.getElementById("weatherResult").innerHTML = output;
  } catch (error) {
    document.getElementById("weatherResult").innerText =
      "Error fetching weather.";
  }
}
