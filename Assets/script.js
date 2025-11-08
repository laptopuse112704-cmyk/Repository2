// JavaScript Interactivity and Scene Management
let scenes = document.querySelectorAll('.scene');
let poppedBalloonsCount = 0;
let poppedWords = [];

function showScene(id) {
    scenes.forEach(scene => scene.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// --- SCENE 1: Countdown & Intro ---
function runCountdown() {
    let count = 3;
    const countdownElement = document.getElementById('countdown');
    const interval = setInterval(() => {
        countdownElement.textContent = count;
        if (count < 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none';
            document.getElementById('message-20-years').style.display = 'block';
        }
        count--;
    }, 1000);
}

function startSurprise() {
    showScene('cake-scene');
}

// --- SCENE 2: Cake Decoration ---
function decorateCake() {
    // Placeholder: Simulate decoration
    let button = document.getElementById('cake-button');
    document.getElementById('cake-display').textContent = 'Decorated Cake with Lit Candle';
    button.textContent = 'Next →';
    button.onclick = () => showScene('balloon-scene');
}

// --- SCENE 3: Balloon Pop ---
function popBalloon(balloon) {
    if (balloon.classList.contains('popped')) return;

    balloon.classList.add('popped');
    poppedBalloonsCount++;
    poppedWords.push(balloon.getAttribute('data-word'));

    document.getElementById('word-display').textContent = poppedWords.join(' ');

    if (poppedBalloonsCount === 4) {
        document.getElementById('next-button-balloons').style.display = 'block';
    }
}

function showMoments() {
    showScene('moments-scene');
}

// --- SCENE 4 & 5: Message ---
function openMessage() {
    showScene('message-scene');
}

function showGift() {
    showScene('gift-scene');
}

// --- SCENE 6: Gift ---
function openGift() {
    document.getElementById('gift-box').style.display = 'none';
    document.getElementById('final-message').style.display = 'block';
}

// Start the application
window.onload = runCountdown;