const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// 1. Watering control
function wateringControl() {
  if (temperature > 80) {
    console.log("Watering on");
  } else {
    console.log("Watering off");
  }
}

// 2. Garden lights control
function gardenLightsControl() {
  if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("Lights on");
  } else {
    console.log("Lights off");
  }
}

// 3. Soil moisture control
function soilMoistureControl() {
  while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);
  }
}
wateringControl();
gardenLightsControl();
soilMoistureControl();

module.exports = {
  wateringControl,
  gardenLightsControl,
  soilMoistureControl
};