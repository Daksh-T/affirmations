const affirmationText = document.getElementById('affirmationText');
const decorations = document.getElementById('decorations');
const myAudio = document.getElementById('myAudio');
const currentDate = new Date();
const currentDay = currentDate.getDate();

const affirmations = {
  '2024-07-07': `You're so <span id='changeableWord-2024-07-07' class='changeableWord'>great</span>.`,
  '2024-07-08': `Sometimes you just gotta believe. I know you can <span id="changeableWord-2024-07-08" class="changeableWord">.</span>`,
  '2024-07-09': `You're super <span id="changeableWord-2024-07-09" class="changeableWord">hard-working</span> and I know you can do it.`,
  '2024-07-10': `You're working so hard. I'm <span id="changeableWord-2024-07-10" class="changeableWord">so proud</span>.`,
  '2024-07-11': `Keep going! <span id='changeableWord-2024-07-11' class='changeableWord'>You've got this!</span>.`,
  '2024-07-12': `You're doing amazing. <span id='changeableWord-2024-07-12' class='changeableWord'>It's not easy but that's why we do it!</span>`,
  '2024-07-13': `You're so <span id='changeableWord-2024-07-13' class='changeableWord'>capable</span>.`,
};

const alternateWords = {
  '2024-07-07': ['awesome', 'capable'],
  '2024-07-08': ['work wonders.', 'do it.'],
  '2024-07-09': ['capable', 'determined'],
  '2024-07-10': ['so happy', 'so inspired'],
  '2024-07-11': ['You are making amazing progress.', 'You are doing so well!'],
  '2024-07-12': ['Nobody said it would be easy.', 'I have faith in you'],
  '2024-07-13': ['amazing', 'talented', 'hard-working','studious'],
};

if (affirmations.hasOwnProperty(currentDate.toISOString().slice(0, 10))) {
  affirmationText.innerHTML = affirmations[currentDate.toISOString().slice(0, 10)];
  affirmationText.style.opacity = 1;

  const changeableWord = document.querySelector(`#changeableWord-${currentDate.toISOString().slice(0, 10)}`);
  const alternateWordsForDate = alternateWords[currentDate.toISOString().slice(0, 10)] || [];
  if (alternateWordsForDate.length > 0) {
    changeableWord.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * alternateWordsForDate.length);
      const newWord = alternateWordsForDate[randomIndex];
      changeableWord.textContent = newWord;
      changeableWord.style.animation = 'pop 0.5s ease-in-out';
      setTimeout(() => {
        changeableWord.style.animation = '';
      }, 500);
    });
  }
  
} else {
  affirmationText.textContent = 'You are amazing! You got this!!';
  affirmationText.style.opacity = 1;
}

const confettiTrigger = affirmationText.querySelector(`#changeableWord-${currentDate.toISOString().slice(0, 10)}`);
confettiTrigger.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

let partyMode = false;
document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyS') {
    if (partyMode) {
      document.body.classList.remove('disco');
      partyMode = false;
    } else {
      document.body.classList.add('disco');
      partyMode = true;
    }
  } else if (event.code === 'KeyP') {
    document.body.classList.toggle('pink-bg');
    const ribbons = document.querySelectorAll('.ribbon');
    ribbons.forEach(ribbon => ribbon.remove());
    if (document.body.classList.contains('pink-bg')) {
      const ribbon1 = document.createElement('div');
      ribbon1.textContent = '\u{1F380}'; // Unicode escape sequence for 🎀
      ribbon1.classList.add('ribbon');
      ribbon1.style.left = '10px';
      decorations.appendChild(ribbon1);
      const ribbon2 = document.createElement('div');
      ribbon2.textContent = '\u{1F380}'; // Unicode escape sequence for 🎀
      ribbon2.classList.add('ribbon');
      ribbon2.style.right = '10px';
      decorations.appendChild(ribbon2);
    }
  } else if (event.code === 'KeyD') {
    affirmationText.classList.toggle('dance');
  }
});

let clickCount = 0;
affirmationText.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 3) {
    myAudio.src = `audio/audio${currentDay}.mp3`;
    myAudio.play();
    clickCount = 0;
  }
});