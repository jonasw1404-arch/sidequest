document.addEventListener("DOMContentLoaded", function() {
    const startScreen = document.getElementById("startScreen");
    const startButton = document.getElementById("startButton");
    const mainContainer = document.getElementById("mainContainer");
    const music = document.getElementById("backgroundMusic");
    const submitButton = document.getElementById("submitCodes");
    const feedback = document.getElementById("feedback");
    const codeInputs = document.querySelectorAll(".codeInput");
    const puzzlesContainer = document.getElementById("puzzlesContainer");
    const briefingBox = document.getElementById("briefingBox");
    const auftragBox = document.getElementById("auftragBox");
    const finalSection = document.getElementById("finalSection");

    startButton.addEventListener("click", function() {
        startScreen.style.display = "none";
        mainContainer.style.display = "block";
        music.volume = 0.5;

        // Mobile Autoplay Fix
        const playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay auf Mobile verhindert, Benutzer muss einmal klicken");
            });
        }
    });

    submitButton.addEventListener("click", function() {
        let allCorrect = true;
        let feedbackMessages = [];

        codeInputs.forEach((input, index) => {
            const correctCode = input.dataset.code;
            if (input.value === correctCode) {
                feedbackMessages.push(`Rätsel ${index+1}: Bestätigung erhalten. Sektor erfolgreich entschlüsselt.`);
            } else {
                const errorMsg = Math.random() < 0.5 ?
                    "FEHLER – Übertragung ungenau. Prüfen Sie den Standort erneut, Agent." :
                    "Codesequenz ungültig. Die Zentrale fordert Präzision.";
                feedbackMessages.push(`Rätsel ${index+1}: ${errorMsg}`);
                allCorrect = false;
            }
        });

        feedback.innerHTML = feedbackMessages.join("<br>");

        if (allCorrect) {
            puzzlesContainer.style.display = "none";
            briefingBox.style.display = "none";
            auftragBox.style.display = "none";
            finalSection.style.display = "block";

            setTimeout(() => {
                alert("Terminal schließt.");
                window.close();
            }, 10000);
        }
    });
});
