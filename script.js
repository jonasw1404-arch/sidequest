document.addEventListener("DOMContentLoaded", function() {
    const startScreen = document.getElementById("startScreen");
    const startButton = document.getElementById("startButton");
    const codeContainer = document.getElementById("codeContainer");
    const button = document.getElementById("checkButton");
    const input = document.getElementById("codeInput");
    const message = document.getElementById("message");
    const music = document.getElementById("backgroundMusic");

    // Startbutton klick → Musik + Codecontainer anzeigen
    startButton.addEventListener("click", function() {
        startScreen.style.display = "none";       // Startscreen ausblenden
        codeContainer.style.display = "block";    // Codeeingabe anzeigen

        music.volume = 0.5;
        music.play();
    });

    // Codeprüfung
    button.addEventListener("click", function() {
        if (input.value === "5443") {
            message.style.color = "#00ff8c";
            message.textContent = "Du hast es geschafft!";
        } else {
            message.style.color = "#ff4444";
            message.textContent = "Falsches Passwort — versuch es nochmal.";
            input.value = "";
            input.focus();
        }
    });

    // Enter-Taste unterstützt
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            button.click();
        }
    });
});
