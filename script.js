document.addEventListener("DOMContentLoaded", function() {
    const startScreen = document.getElementById("startScreen");
    const startButton = document.getElementById("startButton");
    const codeContainer = document.getElementById("codeContainer");
    const music = document.getElementById("backgroundMusic");

    // Codefeld 1
    const input1 = document.getElementById("codeInput1");
    const button1 = document.getElementById("checkButton1");
    const message1 = document.getElementById("message1");
    const correctCode1 = "5443";

    // Codefeld 2
    const input2 = document.getElementById("codeInput2");
    const button2 = document.getElementById("checkButton2");
    const message2 = document.getElementById("message2");
    const correctCode2 = "9876";

    // Startbutton klick → Musik + Codecontainer anzeigen
    startButton.addEventListener("click", function() {
        startScreen.style.display = "none";      
        codeContainer.style.display = "flex";    

        music.volume = 0.5;
        music.play();
    });

    // Allgemeine Funktion zur Codeprüfung
    function checkCode(input, message, correctCode) {
        if (input.value === correctCode) {
            message.style.color = "#00ff8c";
            message.textContent = "Code korrekt!";
        } else {
            message.style.color = "#ff4444";
            message.textContent = "Code inkorrekt!";
            input.value = "";
            input.focus();

            message.classList.add("shake");
            setTimeout(() => message.classList.remove("shake"), 500);
        }
    }

    // Eventlistener für beide Felder
    button1.addEventListener("click", () => checkCode(input1, message1, correctCode1));
    button2.addEventListener("click", () => checkCode(input2, message2, correctCode2));

    // Enter-Taste für beide Felder
    input1.addEventListener("keydown", e => { if(e.key==="Enter") button1.click(); });
    input2.addEventListener("keydown", e => { if(e.key==="Enter") button2.click(); });

    // Nur Zahlen erlauben
    input1.addEventListener("input", function() { this.value = this.value.replace(/[^0-9]/g,''); });
    input2.addEventListener("input", function() { this.value = this.value.replace(/[^0-9]/g,''); });
});
