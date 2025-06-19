function updateSensorData() {
  document.getElementById('heat-data').textContent = Math.floor(Math.random() * 100) + '°C';
  document.getElementById('smoke-data').textContent = Math.floor(Math.random() * 100) + ' PPM';
  document.getElementById('humidity-data').textContent = Math.floor(Math.random() * 100) + '%';
  document.getElementById('location-data').textContent = 'Lat: 12.34, Long: 56.78';
}

function checkForAlerts() {
  const alertMessage = document.getElementById('alert-message');
  const isFireDetected = Math.random() > 0.8;

  if (isFireDetected) {
    alertMessage.textContent = 'Fire detected! Please take immediate action.';
    alertMessage.style.backgroundColor = '#ffebee';
    alertMessage.style.borderLeftColor = '#ff1744';
  } else {
    alertMessage.textContent = 'No alerts at the moment.';
    alertMessage.style.backgroundColor = '#e8f5e9';
    alertMessage.style.borderLeftColor = '#4caf50';
  }
}

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 12.34, lng: 56.78 },
    zoom: 8,
  });

  new google.maps.Marker({
    position: { lat: 12.34, lng: 56.78 },
    map: map,
    title: 'Fire Location',
  });
}

window.onload = function () {
  updateSensorData();
  checkForAlerts();

  setInterval(() => {
    updateSensorData();
    checkForAlerts();
  }, 5000);
};
