const CHALLENGES = {
    easy: ["Ohr kratzen", "Gähnen", "Gurkensalat sagen", "Handy putzen", "Socken richten", "Wetter erwähnen", "Glas verschieben", "Nach der Uhr fragen", "Tief einatmen", "Lächeln"],
    medium: ["Im Kreis laufen", "Lied summen", "Lachen ohne Grund", "Platz tauschen", "Kompliment machen", "Wort 'quasi' nutzen", "Stift balancieren", "Gegenstand anstarren", "Déjà-vu vortäuschen", "Glas auf Boden"],
    hard: ["5 Liegestütze", "Akzent sprechen", "30 Sek. Rede", "Auf Boden setzen", "Socken an Händen", "Flüstern (1 Min)", "Geist sehen", "Name vergessen", "Tanz ohne Musik", "Unsichtbarer Hund"]
};

let score = 0;
let cards = [];
let doneChallenges = []; // Speicher für die Review-Runde
let usedTexts = new Set(); // Verhindert Dopplungen

function startGame() {
    showScreen('screen-game');
    // Initialer Stapel (je 2 pro Stufe)
    cards = [
        { type: 'easy', text: getNewQuest('easy') },
        { type: 'easy', text: getNewQuest('easy') },
        { type: 'medium', text: getNewQuest('medium') },
        { type: 'medium', text: getNewQuest('medium') },
        { type: 'hard', text: getNewQuest('hard') },
        { type: 'hard', text: getNewQuest('hard') }
    ];
    renderCards();
}

function getNewQuest(lvl) {
    const pool = CHALLENGES[lvl];
    // Filtert bereits genutzte aus
    const available = pool.filter(t => !usedTexts.has(t));
    
    // Falls Pool leer, nimm trotzdem eine random (Reset)
    const list = available.length > 0 ? available : pool;
    const picked = list[Math.floor(Math.random() * list.length)];
    
    usedTexts.add(picked);
    return picked;
}

function renderCards() {
    const container = document.getElementById('card-container');
    container.innerHTML = "";
    
    cards.slice(0, 3).forEach((card, index) => {
        const div = document.createElement('div');
        div.className = `card ${card.type}`;
        div.innerHTML = `
            <div class="card-text">${card.text}</div>
            <div class="card-ui">
                <span>❌ NEUE KARTE (-2)</span>
                <span>✅ ERLEDIGT (+Pkt)</span>
            </div>`;
        
        div.onclick = (e) => {
            if (index !== 0) return;
            const rect = div.getBoundingClientRect();
            const success = (e.clientX - rect.left) > rect.width / 2;
            handleAction(success);
        };
        container.appendChild(div);
    });
}

function handleAction(success) {
    const card = cards.shift();
    if (success) {
        score += (card.type === 'easy' ? 5 : card.type === 'medium' ? 10 : 20);
        doneChallenges.push(card); // Für Review merken
    } else {
        score -= 2;
    }
    
    cards.push({ type: card.type, text: getNewQuest(card.type) });
    updateUI();
    renderCards();
}

function updateUI() {
    document.getElementById('display-score').innerText = score;
}

function endGameRequest() {
    showScreen('screen-review');
    const list = document.getElementById('review-list');
    list.innerHTML = "";
    
    doneChallenges.forEach((card, index) => {
        const div = document.createElement('div');
        div.className = "review-item";
        div.id = `review-${index}`;
        div.innerHTML = `<span>${card.text}</span> <button onclick="toggleRemove(${index})">❌</button>`;
        list.appendChild(div);
    });
}

function toggleRemove(index) {
    const item = document.getElementById(`review-${index}`);
    const card = doneChallenges[index];
    const val = (card.type === 'easy' ? 5 : card.type === 'medium' ? 10 : 20);

    if (item.classList.contains('removed')) {
        item.classList.remove('removed');
        score += val;
    } else {
        item.classList.add('removed');
        score -= val;
    }
    updateUI();
}

function showFinalResult() {
    showScreen('screen-result');
    document.getElementById('final-score-display').innerText = score;
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
