const startButton = document.getElementById('startButton');
const startBox = document.getElementById('startBox');
const missionContainer = document.getElementById('missionContainer');
const bgMusic = document.getElementById('bgMusic');
const puzzleContainer = document.getElementById('puzzleContainer');

// Einstellige Codes für Rätsel
const puzzleCodes = ['1','2','3','4','5'];

startButton.addEventListener('click', () => {
  startBox.style.display = 'none';
  missionContainer.style.display = 'flex';
  bgMusic.volume = 0.3;
  bgMusic.play().catch(err => console.log(err));

  // 5 Rätsel-Kästchen erzeugen
  for (let i = 0; i < 5; i++) {
    const box = document.createElement('div');
    box.className = 'puzzleBox';
    box.innerHTML = `
      <h3>Rätsel ${i+1}</h3>
      <p>Kurzbeschreibung Rätsel ${i+1}</p>
      <div class="puzzleImage"></div>
      <div class="puzzleInput">
        <input type="text" maxlength="1" id="input${i}">
        <button id="btn${i}">OK</button>
      </div>
      <div class="puzzleResult" id="result${i}"></div>
    `;
    puzzleContainer.appendChild(box);

    const btn = document.getElementById(`btn${i}`);
    const input = document.getElementById(`input${i}`);
    const result = document.getElementById(`result${i}`);

    btn.addEventListener('click', () => {
      if (input.value === puzzleCodes[i]) {
        result.textContent = 'Richtig';
        result.style.color = '#0a4fa3';
      } else {
        result.textContent = 'Falsch';
        result.style.color = 'red';
      }
    });
  }
});
