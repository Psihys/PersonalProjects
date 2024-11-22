 
  const apiKey = "febebea45ad44594a59142203242211";

  async function getWeather(city) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    } catch (error) {
      throw new Error("Error fetching weather data");
    }
  }
  
  async function getForecast(city) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`
      );
      if (!response.ok) {
        throw new Error("Error fetching forecast data");
      }
      return response.json();
    } catch (error) {
      throw new Error("Error fetching forecast data");
    }
  }
  
  function updateUI(data) {
    document.getElementById("cityName").textContent = data.location.name;
    document.getElementById("temperature").textContent = `Temperature: ${data.current.temp_c}°C`;
    document.getElementById("condition").textContent = `Condition: ${data.current.condition.text}`;
    document.getElementById("weatherIcon").src = data.current.condition.icon;
    updateBackground(data.current.condition.text.toLowerCase());
  }
  
  function updateBackground(condition) {
    const body = document.body;
    if (condition.includes("rain")) {
      body.style.background = "url('rainy.jpg') no-repeat center center/cover";
    } else if (condition.includes("cloud")) {
      body.style.background = "url('cloudy.jpg') no-repeat center center/cover";
    } else if (condition.includes("sun")) {
      body.style.background = "url('sunny.jpg') no-repeat center center/cover";
    } else {
      body.style.background = "#f0f4f8";
    }
  }
  
  function updateForecast(data) {
    const forecastContainer = document.getElementById("forecastContainer");
    forecastContainer.innerHTML = ""; // Clear previous forecast
  
    data.forecast.forecastday.forEach((day) => {
      const forecastDiv = document.createElement("div");
      forecastDiv.innerHTML = `
        <p>${new Date(day.date).toLocaleDateString()}</p>
        <p>Max: ${day.day.maxtemp_c}°C</p>
        <p>Min: ${day.day.mintemp_c}°C</p>
        <img src="${day.day.condition.icon}" alt="${day.day.condition.text}">
        <p>${day.day.condition.text}</p>
      `;
      forecastContainer.appendChild(forecastDiv);
    });
  }
  
  function toggleLoading(show) {
    const loading = document.getElementById("loading");
    loading.style.display = show ? "block" : "none";
  }
  
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", async () => {
    const city = document.getElementById("city").value;
    toggleLoading(true);
    try {
      const weatherData = await getWeather(city);
      updateUI(weatherData);
  
      const forecastData = await getForecast(city);
      updateForecast(forecastData);
    } catch (error) {
      alert(error.message);
    } finally {
      toggleLoading(false);
    }
  });
  