const startButton = document.getElementById('startButton');
const startBox = document.getElementById('startBox');
const missionContainer = document.getElementById('missionContainer');

startButton.addEventListener('click', () => {
  startBox.style.display = 'none';
  missionContainer.style.display = 'flex';
});

// Prüfen der Codes
const buttons = document.querySelectorAll('.checkButton');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const box = button.closest('.missionBox');
    const input = box.querySelector('.codeInput');
    const result = box.querySelector('.result');
    const correctCode = input.dataset.code;

    if(input.value === correctCode) {
      result.textContent = 'Richtig!';
      result.style.color = 'lightgreen';
    } else {
      result.textContent = 'Falsch!';
      result.style.color = 'red';
    }
  });
});
