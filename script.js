document.addEventListener("DOMContentLoaded", function() {
    const startScreen = document.getElementById("startScreen");
    const codeContainer = document.getElementById("codeContainer");
    const music = document.getElementById("backgroundMusic");

    document.getElementById("startButton").addEventListener("click", () => {
        startScreen.classList.add("hidden");
        codeContainer.classList.remove("hidden");

        music.volume = 0.5;
        music.play();
    });
});

/* Codeprüfung für alle Felder */

function checkCode(num) {
    const input = document.getElementById("code" + num);
    const msg = document.getElementById("msg" + num);

    const correctCode = "5443";

    if (input.value === correctCode) {
        msg.style.color = "#00ff8c";
        msg.textContent = "Code korrekt!";
    } else {
        msg.style.color = "#ff4444";
        msg.textContent = "Code inkorrekt!";
    }
}
