const startButton = document.getElementById('startButton');
const startBox = document.getElementById('startBox');
const missionContainer = document.getElementById('missionContainer');

startButton.addEventListener('click', () => {
  startBox.style.display = 'none';       // Start-Rechteck ausblenden
  missionContainer.style.display = 'flex'; // Mission-Rechtecke einblenden
});
