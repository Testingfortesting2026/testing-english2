// Cambridge YLE Pre A1 Starters - Comprehensive Vocabulary & Phrases Database
const lessons = {
  animals: {
    name: 'Animals',
    words: [
      { word: 'cat', description: 'a small furry pet', image: 'images/cat.jpg' },
      { word: 'dog', description: 'a pet that barks', image: 'images/dog.jpg' },
      { word: 'duck', description: 'a bird that swims', image: 'images/duck.jpg' },
      { word: 'bird', description: 'a flying animal', image: 'images/bird.jpg' },
      { word: 'fish', description: 'lives in water', image: 'images/fish.jpg' },
      { word: 'monkey', description: 'swings in trees', image: 'images/monkey.jpg' },
      { word: 'lion', description: 'big wild cat', image: 'images/lion.jpg' },
      { word: 'elephant', description: 'has a long trunk', image: 'images/elephant.jpg' },
      { word: 'bear', description: 'big brown animal', image: 'images/bear.jpg' },
      { word: 'panda', description: 'black and white bear', image: 'images/panda.jpg' },
      { word: 'rabbit', description: 'has long ears', image: 'images/rabbit.jpg' },
      { word: 'mouse', description: 'small gray animal', image: 'images/mouse.jpg' }
    ],
    phrases: [
      { phrase: 'I have a cat', meaning: 'ownership of pet' },
      { phrase: 'The dog is big', meaning: 'description' },
      { phrase: 'I like the monkey', meaning: 'preference' },
      { phrase: 'The bird can fly', meaning: 'ability' },
      { phrase: 'Do you like animals?', meaning: 'question' }
    ]
  },
  colors: {
    name: 'Colors',
    words: [
      { word: 'red', description: 'the color of apples' },
      { word: 'blue', description: 'the color of the sky' },
      { word: 'green', description: 'the color of grass' },
      { word: 'yellow', description: 'the color of the sun' },
      { word: 'orange', description: 'a mix of red and yellow' },
      { word: 'pink', description: 'a light red color' },
      { word: 'purple', description: 'a mix of red and blue' },
      { word: 'black', description: 'the darkest color' },
      { word: 'white', description: 'the lightest color' },
      { word: 'brown', description: 'color of chocolate' }
    ],
    phrases: [
      { phrase: 'This is red', meaning: 'identification' },
      { phrase: 'My cat is orange', meaning: 'possession description' },
      { phrase: 'The sky is blue', meaning: 'observation' },
      { phrase: 'I like blue', meaning: 'preference' },
      { phrase: 'What color is it?', meaning: 'color question' }
    ]
  },
  food: {
    name: 'Food',
    words: [
      { word: 'apple', description: 'a red or green fruit' },
      { word: 'banana', description: 'a yellow fruit' },
      { word: 'bread', description: 'made from flour' },
      { word: 'egg', description: 'white and round' },
      { word: 'milk', description: 'white drink' },
      { word: 'pizza', description: 'with cheese and tomato' },
      { word: 'rice', description: 'white grains' },
      { word: 'chicken', description: 'meat from a bird' },
      { word: 'cheese', description: 'yellow or white' },
      { word: 'water', description: 'clear drink' },
      { word: 'juice', description: 'sweet drink' },
      { word: 'cake', description: 'sweet dessert' }
    ],
    phrases: [
      { phrase: 'I like apples', meaning: 'food preference' },
      { phrase: 'Can I have milk?', meaning: 'request' },
      { phrase: 'This is pizza', meaning: 'identification' },
      { phrase: 'The cake is yellow', meaning: 'description' },
      { phrase: 'I eat bread', meaning: 'habitual action' }
    ]
  },
  toys: {
    name: 'Toys & Objects',
    words: [
      { word: 'ball', description: 'round toy to play with' },
      { word: 'doll', description: 'a toy girl figure' },
      { word: 'bear', description: 'teddy bear toy' },
      { word: 'car', description: 'toy vehicle' },
      { word: 'bicycle', description: 'has two wheels' },
      { word: 'phone', description: 'for talking' },
      { word: 'book', description: 'pages with words' },
      { word: 'pen', description: 'for writing' },
      { word: 'pencil', description: 'for drawing' },
      { word: 'toy', description: 'something to play with' }
    ],
    phrases: [
      { phrase: 'I have a ball', meaning: 'possession' },
      { phrase: 'Play with the toy', meaning: 'instruction' },
      { phrase: 'Where is my car?', meaning: 'asking location' },
      { phrase: 'The book is here', meaning: 'location description' },
      { phrase: 'Can you draw with this pen?', meaning: 'question about function' }
    ]
  },
  body: {
    name: 'Body Parts',
    words: [
      { word: 'head', description: 'top of your body' },
      { word: 'hand', description: 'at the end of arm' },
      { word: 'foot', description: 'at the end of leg' },
      { word: 'eye', description: 'for seeing' },
      { word: 'nose', description: 'for smelling' },
      { word: 'mouth', description: 'for eating' },
      { word: 'ear', description: 'for hearing' },
      { word: 'arm', description: 'above your hand' },
      { word: 'leg', description: 'for walking' },
      { word: 'tooth', description: 'in your mouth' },
      { word: 'hair', description: 'on your head' },
      { word: 'face', description: 'front of head' }
    ],
    phrases: [
      { phrase: 'Touch your head', meaning: 'instruction' },
      { phrase: 'I have two eyes', meaning: 'statement' },
      { phrase: 'My hand is small', meaning: 'description' },
      { phrase: 'I can see with my eyes', meaning: 'capability' },
      { phrase: 'What is this?', meaning: 'body part question' }
    ]
  },
  numbers: {
    name: 'Numbers',
    words: [
      { word: 'one', description: '1' },
      { word: 'two', description: '2' },
      { word: 'three', description: '3' },
      { word: 'four', description: '4' },
      { word: 'five', description: '5' },
      { word: 'six', description: '6' },
      { word: 'seven', description: '7' },
      { word: 'eight', description: '8' },
      { word: 'nine', description: '9' },
      { word: 'ten', description: '10' }
    ],
    phrases: [
      { phrase: 'I have one cat', meaning: 'quantity statement' },
      { phrase: 'Two and three is five', meaning: 'math' },
      { phrase: 'How many dogs?', meaning: 'quantity question' },
      { phrase: 'There are ten apples', meaning: 'counting' },
      { phrase: 'I am five years old', meaning: 'age' }
    ]
  },
  actions: {
    name: 'Actions/Verbs',
    words: [
      { word: 'run', description: 'move fast' },
      { word: 'jump', description: 'go up in air' },
      { word: 'sit', description: 'be on a chair' },
      { word: 'sing', description: 'make music with voice' },
      { word: 'dance', description: 'move to music' },
      { word: 'eat', description: 'put food in mouth' },
      { word: 'drink', description: 'take liquid' },
      { word: 'sleep', description: 'rest at night' },
      { word: 'play', description: 'have fun' },
      { word: 'read', description: 'look at words in book' },
      { word: 'write', description: 'make letters' },
      { word: 'walk', description: 'move on feet' }
    ],
    phrases: [
      { phrase: 'I can run', meaning: 'capability' },
      { phrase: 'She is singing', meaning: 'ongoing action' },
      { phrase: 'Let\'s dance', meaning: 'invitation' },
      { phrase: 'Can you jump?', meaning: 'ability question' },
      { phrase: 'I like to play', meaning: 'preference activity' }
    ]
  },
  prepositions: {
    name: 'Prepositions',
    words: [
      { word: 'in', description: 'inside something' },
      { word: 'on', description: 'top of something' },
      { word: 'under', description: 'below something' },
      { word: 'next to', description: 'beside' },
      { word: 'behind', description: 'at the back' },
      { word: 'in front of', description: 'at the front' }
    ],
    phrases: [
      { phrase: 'The cat is in the box', meaning: 'location' },
      { phrase: 'The book is on the table', meaning: 'position' },
      { phrase: 'The ball is under the chair', meaning: 'below position' },
      { phrase: 'I sit next to my friend', meaning: 'proximity' },
      { phrase: 'The dog is behind me', meaning: 'back position' }
    ]
  },
  family: {
    name: 'Family',
    words: [
      { word: 'mother', description: 'female parent' },
      { word: 'father', description: 'male parent' },
      { word: 'sister', description: 'female sibling' },
      { word: 'brother', description: 'male sibling' },
      { word: 'baby', description: 'very young child' },
      { word: 'grandmother', description: 'mother\'s mother' },
      { word: 'grandfather', description: 'father\'s father' },
      { word: 'aunt', description: 'parent\'s sister' },
      { word: 'uncle', description: 'parent\'s brother' },
      { word: 'cousin', description: 'relative same age' }
    ],
    phrases: [
      { phrase: 'This is my mother', meaning: 'introduction' },
      { phrase: 'My sister is five', meaning: 'family description' },
      { phrase: 'I have one brother', meaning: 'family composition' },
      { phrase: 'My father is here', meaning: 'presence' },
      { phrase: 'Do you have a sister?', meaning: 'family question' }
    ]
  },
  clothes: {
    name: 'Clothes',
    words: [
      { word: 'shirt', description: 'top clothing' },
      { word: 'pants', description: 'leg clothing' },
      { word: 'dress', description: 'girl\'s clothing' },
      { word: 'shoe', description: 'for feet' },
      { word: 'hat', description: 'for head' },
      { word: 'sock', description: 'under shoe' },
      { word: 'jacket', description: 'warm coat' },
      { word: 'skirt', description: 'girl\'s bottom wear' },
      { word: 'tie', description: 'neck clothing' },
      { word: 'glove', description: 'for hand' }
    ],
    phrases: [
      { phrase: 'I wear a red shirt', meaning: 'clothing statement' },
      { phrase: 'My shoes are blue', meaning: 'clothing color' },
      { phrase: 'Put on your hat', meaning: 'instruction' },
      { phrase: 'The dress is yellow', meaning: 'clothing description' },
      { phrase: 'What are you wearing?', meaning: 'clothing question' }
    ]
  },
  school: {
    name: 'School/Classroom',
    words: [
      { word: 'school', description: 'place to learn' },
      { word: 'teacher', description: 'person who teaches' },
      { word: 'student', description: 'person who learns' },
      { word: 'classroom', description: 'room for lessons' },
      { word: 'desk', description: 'table to work on' },
      { word: 'chair', description: 'to sit on' },
      { word: 'board', description: 'write on with chalk' },
      { word: 'map', description: 'shows countries' },
      { word: 'picture', description: 'image on wall' },
      { word: 'window', description: 'see outside through' }
    ],
    phrases: [
      { phrase: 'I go to school', meaning: 'routine' },
      { phrase: 'My teacher is nice', meaning: 'person description' },
      { phrase: 'Sit at your desk', meaning: 'instruction' },
      { phrase: 'Look at the board', meaning: 'attention direction' },
      { phrase: 'I am a student', meaning: 'identification' }
    ]
  },
  house: {
    name: 'House/Rooms',
    words: [
      { word: 'house', description: 'where people live' },
      { word: 'bedroom', description: 'room to sleep' },
      { word: 'kitchen', description: 'room to cook' },
      { word: 'bathroom', description: 'room with toilet' },
      { word: 'living room', description: 'room to relax' },
      { word: 'door', description: 'way to enter' },
      { word: 'window', description: 'glass for light' },
      { word: 'table', description: 'furniture to eat on' },
      { word: 'bed', description: 'for sleeping' },
      { word: 'sofa', description: 'for sitting' }
    ],
    phrases: [
      { phrase: 'This is my house', meaning: 'ownership' },
      { phrase: 'I sleep in the bedroom', meaning: 'room function' },
      { phrase: 'The kitchen is big', meaning: 'room description' },
      { phrase: 'Where is the bathroom?', meaning: 'location question' },
      { phrase: 'I sit on the sofa', meaning: 'action with object' }
    ]
  }
};

const state = {
  currentSkill: 'listening', // listening, reading, writing, speaking
  currentLesson: 'animals',
  currentWordIndex: 0,
  totalAsked: 0,
  correct: 0,
  mastery: {}, // per word
  topicStats: {}, // per lesson
  srsQueue: [],
  history: [],
  companionPersona: 'robot',
  activeWord: null,
  currentQuestion: null
};

const taskImage = document.getElementById('taskImage');
const startBtn = document.getElementById('startBtn');
const modeBadge = document.getElementById('modeBadge');
const taskArea = document.getElementById('taskArea');
const taskPrompt = document.getElementById('taskPrompt');
const answerInput = document.getElementById('answerInput');
const checkBtn = document.getElementById('checkBtn');
const hintNode = document.getElementById('hint');
const summary = document.getElementById('summary');
const stats = document.getElementById('stats');
const srsInfo = document.getElementById('srsInfo');
const personaSelect = document.getElementById('personaSelect');
const lessonSelect = document.getElementById('lessonSelect');
const speakAgainBtn = document.getElementById('speakAgainBtn');
const nextBtn = document.getElementById('nextBtn');


function getPreferredVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const preferPattern = /(child|kid|female|Google UK English Female|Microsoft Zira|Samantha)/i;
  let voice = voices.find(v => preferPattern.test(v.name));
  if (!voice && voices.length > 0) {
    voice = voices.find(v => /female/i.test(v.name)) || voices[0];
  }
  return voice;
}

function speak(text, rate = 1) {
  if (!('speechSynthesis' in window)) return;
  if (!text) return;

  const speakText = String(text).replace(/<[^>]+>/g, '');
  const ut = new SpeechSynthesisUtterance(speakText);
  ut.rate = Math.min(1.2, Math.max(0.7, rate));
  ut.pitch = 1.1;

  const voice = getPreferredVoice();
  if (voice) ut.voice = voice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(ut);
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    getPreferredVoice();
  };
}

function updateModeBadge() {
  const skillName = state.currentSkill.charAt(0).toUpperCase() + state.currentSkill.slice(1);
  const lessonName = lessons[state.currentLesson].name;
  modeBadge.textContent = `${skillName} • ${lessonName}`;
}

function setCompanion(text) {
  const personaName = state.companionPersona === 'cat' ? 'KittyCoach' : 'RoboBuddy';
  const emoji = state.companionPersona === 'cat' ? '🐱' : '🤖';
  companion.textContent = `${emoji} ${personaName}: ${text}`;
}

function getActiveRecord(word) {
  if (!state.mastery[word]) {
    state.mastery[word] = {
      quizCorrect: 0,
      quizAttempts: 0,
      spellingCorrect: 0,
      spellingAttempts: 0,
      failCount: 0,
      streak: 0
    };
  }
  return state.mastery[word];
}

function scheduleSRS(word) {
  if (!state.srsQueue.includes(word)) {
    state.srsQueue.push(word);
    // PoC uses 20 seconds for quick demonstration. In production: 5*60*1000
    setTimeout(() => {
      state.srsQueue = state.srsQueue.filter(w => w !== word);
      state.srsQueue.unshift(word);
      setCompanion(`Reminder: Time to review "${word}" (SRS).`);
      updateSRSStatus();
    }, 20000);
  }
}

function updateSRSStatus() {
  if (state.srsQueue.length > 0) {
    srsInfo.textContent = `SRS queue: ${state.srsQueue.join(', ')}`;
  } else {
    srsInfo.textContent = 'SRS queue is empty.';
  }
}

function getShieldPrediction() {
  const history = state.history.slice(-100);
  if (history.length === 0) return 0;
  const correctCount = history.filter(h => h.correct).length;
  const ratio = correctCount / history.length;
  return Math.min(15, Math.max(0, Math.round(ratio * 15)));
}

function recordHistory(word, isCorrect) {
  state.history.push({ word, correct: isCorrect, time: Date.now() });
  if (state.history.length > 100) state.history.shift();
}

function generateQuestion() {
  const lesson = lessons[state.currentLesson];
  
  // 30% chance of phrase question, 70% word question
  const usePhrase = Math.random() < 0.3 && lesson.phrases && lesson.phrases.length > 0;
  
  let question = {};

  if (usePhrase) {
    // Phrase-based question
    const phraseIdx = Math.floor(Math.random() * lesson.phrases.length);
    const phrase = lesson.phrases[phraseIdx];
    state.activeWord = { word: phrase.phrase, description: phrase.meaning };

    if (state.currentSkill === 'listening') {
      question = {
        type: 'phrase-mc',
        prompt: `Listen to the sentence and choose the meaning:`,
        audio: phrase.phrase,
        options: [phrase.meaning, 'question response', 'greeting', 'instruction'],
        correct: phrase.meaning
      };
    } else if (state.currentSkill === 'reading') {
      const otherPhrases = lesson.phrases.filter((_, idx) => idx !== phraseIdx).slice(0, 3);
      const options = [phrase.phrase, ...otherPhrases.map(p => p.phrase)].sort(() => Math.random() - 0.5);
      question = {
        type: 'phrase-mc',
        prompt: `Read the sentence. It means ___.`,
        text: phrase.phrase,
        options: [phrase.meaning, 'question response', 'greeting', 'instruction'],
        correct: phrase.meaning,
        isReadingMode: true
      };
    } else if (state.currentSkill === 'writing') {
      question = {
        type: 'phrase-fill',
        prompt: `Hear and type the sentence:`,
        audio: phrase.phrase,
        hint: `Starts with "${phrase.phrase.charAt(0).toUpperCase()}"`,
        correct: phrase.phrase.toLowerCase()
      };
    }
  } else {
    // Word-based question (existing logic)
    const word = lesson.words[state.currentWordIndex % lesson.words.length];
    state.activeWord = word;

    if (state.currentSkill === 'listening') {
      const wrongWords = lesson.words.filter(w => w.word !== word.word).slice(0, 3);
      const options = [word.word, ...wrongWords.map(w => w.word)].sort(() => Math.random() - 0.5);
      question = {
        type: 'multiple-choice',
        prompt: `Listen and choose the correct word:`,
        audio: word.word,
        options: options,
        correct: word.word
      };
    } else if (state.currentSkill === 'reading') {
      const wrongWords = lesson.words.filter(w => w.word !== word.word).slice(0, 3);
      const options = [word.word, ...wrongWords.map(w => w.word)].sort(() => Math.random() - 0.5);
      question = {
        type: 'multiple-choice',
        prompt: word.image ? `Look at the picture. The ___ ${word.description}.` : `Read the word. The ___ ${word.description}.`,
        text: word.word,
        options: options,
        correct: word.word,
        isReadingMode: true,
        image: word.image
      };
    } else if (state.currentSkill === 'writing') {
      question = {
        type: 'fill-blank',
        prompt: `Spelling: Hear and spell the word.`,
        audio: word.word,
        hint: `Starts with "${word.word.charAt(0).toUpperCase()}"`,
        correct: word.word.toLowerCase()
      };
    }
  }

  state.currentQuestion = question;
  return question;
}

function advanceAndRender() {
  const question = generateQuestion();
  taskPrompt.innerHTML = question.prompt;
  hintNode.textContent = '';
  
  // Clear previous inputs and options
  answerInput.value = '';
  
  // Clear all previous MC option buttons
  const quizArea = document.getElementById('quizArea');
  const oldMcOptions = quizArea.querySelectorAll('.mc-options');
  oldMcOptions.forEach(opt => opt.remove());

  // Hide image by default
  taskImage.style.display = 'none';
  taskImage.src = '';

  // Show image if available
  if (question.image) {
    taskImage.src = question.image;
    taskImage.style.display = 'block';
  }

  // Apply special styling for reading mode
  const taskCard = document.querySelector('.task-card');
  if (question.isReadingMode) {
    taskCard.classList.add('reading-mode');
  } else {
    taskCard.classList.remove('reading-mode');
  }

  if (question.type === 'multiple-choice' || question.type === 'phrase-mc') {
    // Show answer options as buttons
    answerInput.style.display = 'none';
    checkBtn.style.display = 'none';
    speakAgainBtn.style.display = 'inline-block';

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'mc-options';
    
    // Shuffle and randomize options
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(option => {
      const btn = document.createElement('button');
      btn.className = question.isReadingMode ? 'mc-option reading-option' : 'mc-option';
      btn.textContent = option;
      btn.addEventListener('click', () => {
        const isCorrect = option === question.correct;
        handleAnswer(isCorrect, option);
      });
      optionsContainer.appendChild(btn);
    });
    quizArea.appendChild(optionsContainer);

    // Play audio if listening
    if (state.currentSkill === 'listening') {
      speak(question.audio);
    }
  } else if (question.type === 'fill-blank' || question.type === 'phrase-fill') {
    // Show input field
    answerInput.style.display = 'inline-block';
    checkBtn.style.display = 'inline-block';
    speakAgainBtn.style.display = 'inline-block';
    answerInput.placeholder = 'Type or say your answer...';
    
    if (question.audio) {
      speak(question.audio);
    }
    if (question.hint) {
      hintNode.textContent = question.hint;
    }
  }

  // hide previous incorrect-review button and reset prompt style
  nextBtn.style.display = 'none';
  hintNode.classList.remove('highlight-correct');

  updateModeBadge();
  setCompanion(`Your turn! Try the ${state.currentSkill} task.`);
  taskArea.classList.remove('hidden');
}

function handleAnswer(isCorrect, userAnswer) {
  state.totalAsked += 1;
  state.skillStats[state.currentSkill].total += 1;

  if (isCorrect) {
    state.correct += 1;
    state.skillStats[state.currentSkill].correct += 1;
    recordHistory(state.activeWord.word, true);
    setCompanion('Correct! Great job! 🎉');
    hintNode.textContent = '✅ Correct!';

    // proceed automatically for quick positive reinforcement
    setTimeout(() => {
      state.currentWordIndex += 1;
      advanceAndRender();
    }, 1200);
  } else {
    recordHistory(state.activeWord.word, false);
    const correctAnswer = state.currentQuestion.correct;
    setCompanion(`Not quite. The correct answer is "${correctAnswer}". Take a moment to see it, then press Next.`);
    hintNode.innerHTML = `❌ Wrong. <span class="highlight-correct">Correct answer: ${correctAnswer}</span>`;
    hintNode.classList.add('highlight-correct');

    // Update topic stats
    if (!state.topicStats[state.currentLesson]) {
      state.topicStats[state.currentLesson] = { correct: 0, total: 0 };
    }
    state.topicStats[state.currentLesson].total += 1;
    // no correct for wrong

    refreshSummary();

    // show explicit next button for pacing
    nextBtn.style.display = 'inline-block';
    return; // wait for child to press Next
  }

  // Update topic stats (for correct)
  if (!state.topicStats[state.currentLesson]) {
    state.topicStats[state.currentLesson] = { correct: 0, total: 0 };
  }
  state.topicStats[state.currentLesson].total += 1;
  if (isCorrect) state.topicStats[state.currentLesson].correct += 1;

  refreshSummary();

  setTimeout(() => {
    state.currentWordIndex += 1;
    advanceAndRender();
  }, 1200);
}

function refreshSummary() {
  const accuracy = state.totalAsked > 0 ? Math.round((state.correct / state.totalAsked) * 100) : 0;
  const shields = getShieldPrediction();
  
  // Skill breakdown
  const skillBreakdown = Object.entries(state.skillStats).map(([skill, stats]) => {
    const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    return `${skill}: ${pct}%`;
  }).join(' | ');

  summary.textContent = `Total Asked: ${state.totalAsked}, Correct: ${state.correct}, Overall: ${accuracy}%`;
  stats.textContent = `${skillBreakdown} | Shields: ${shields}/15`;
  updateSRSStatus();
}

startBtn.addEventListener('click', () => {
  state.currentSkill = 'listening';
  state.currentLesson = 'animals';
  state.currentWordIndex = 0;
  state.totalAsked = 0;
  state.correct = 0;
  state.skillStats = {
    listening: { correct: 0, total: 0 },
    reading: { correct: 0, total: 0 },
    writing: { correct: 0, total: 0 }
  };
  state.topicStats = {};
  state.srsQueue = [];
  state.history = [];
  state.examActive = false;
  setCompanion('🎓 Let\'s learn! Starting with Listening skills.');
  advanceAndRender();
  refreshSummary();
});

document.querySelectorAll('.skill-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const skillName = btn.getAttribute('data-skill');
    state.currentSkill = skillName;
    state.currentWordIndex = 0;
    
    // Update active button styling
    document.querySelectorAll('.skill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    setCompanion(`Switching to ${skillName} mode. Let's go!`);
    updateModeBadge();
    advanceAndRender();
    refreshSummary();
  });
});

personaSelect.addEventListener('change', (evt) => {
  state.companionPersona = evt.target.value;
  setCompanion('I am ready to help from the new persona.');
});

lessonSelect.addEventListener('change', (evt) => {
  state.currentLesson = evt.target.value;
  state.currentWordIndex = 0;
  setCompanion(`Great! Now learning ${lessons[state.currentLesson].name}. Let's go!`);
  updateModeBadge();
  advanceAndRender();
  refreshSummary();
});

speakAgainBtn.addEventListener('click', () => {
  if (state.currentQuestion && state.currentQuestion.audio) {
    speak(state.currentQuestion.audio);
    setCompanion('Listen again!');
  }
});

nextBtn.addEventListener('click', () => {
  nextBtn.style.display = 'none';
  hintNode.classList.remove('highlight-correct');
  state.currentWordIndex += 1;
  advanceAndRender();
});

checkBtn.addEventListener('click', () => {
  const answer = answerInput.value.trim().toLowerCase();
  const question = state.currentQuestion;

  if (!answer) {
    setCompanion('Please type or select an answer!');
    return;
  }

  const isCorrect = answer === question.correct.toLowerCase();
  handleAnswer(isCorrect, answer);
});

window.addEventListener('load', () => {
  updateModeBadge();
  setCompanion('Press Start to begin the adaptive PoC flow.');
});
