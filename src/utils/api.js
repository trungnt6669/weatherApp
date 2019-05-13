// REPLACE YOUR_API_ID with actual ID
const id = 'a355f547eb7441f235496788801d3244';

export async function fetchWeather(query) {
  const api_call = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?${query}&units=imperial&APPID=${id}`
  );
  const response = await api_call.json();
  return response;
}
