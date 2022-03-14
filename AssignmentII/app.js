window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    '.temprature-description'
  );
  let temperatureDegree = document.querySelector(
    '.temprature-degree'
  );
  let locationTimezone = document.querySelector(
    '.location-Timezone'
  );

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      //Weather and location APIs//
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api =
        "${proxy}https://api.darksky.net/forecast/fd9d9c6418c6418c23d94745b836767721ad1/${lat},${long}";

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temperature, summary } = data.currently;  
          //Setting DOM Elements from the API

          temperatuerDegree.textContent = temperature;
          temperatureDescription.textContent= summary;
          locationTimezone.textContent = data.timezone;
        });
        //icons
    });
  }
});
