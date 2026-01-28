// Quiz Mode Component
// Interactive quiz to test knowledge of stellar evolution

import { starStages, quizQuestions } from '../data/starStages.js';

let currentQuizIndex = 0;
let quizScore = 0;
const totalQuestions = quizQuestions.length;

export function initQuizMode() {
    // Quiz is initialized when switching to quiz mode
}

export function startQuiz() {
    quizScore = 0;
    currentQuizIndex = 0;
    updateScore();
    document.getElementById('quiz-progress-bar').style.width = '0%';

    renderQuestion();

    // Hide buttons
    document.getElementById('quiz-next-btn').classList.add('hidden');
    document.getElementById('quiz-restart-btn').classList.add('hidden');
}

function renderQuestion() {
    const q = quizQuestions[currentQuizIndex];
    const startStage = starStages[q.startId];

    const card = document.getElementById('quiz-card');
    card.style.opacity = '1';

    document.getElementById('quiz-image').src = startStage.img;
    document.getElementById('quiz-current-stage').textContent = startStage.title;
    document.getElementById('quiz-mass-type').textContent = q.massType;
    document.getElementById('quiz-question').textContent = q.question;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    // Reset feedback
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('quiz-next-btn').classList.add('hidden');

    // Shuffle options
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);

    shuffled.forEach(optId => {
        const optData = starStages[optId];
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.onclick = () => checkAnswer(optId, q.correctId, btn);

        btn.innerHTML = `
      <img src="${optData.img}" alt="${optData.title}" class="quiz-option-image">
      <div class="quiz-option-text">
        <span class="quiz-option-title">${optData.title}</span>
        <span class="quiz-option-hint">Select this stage</span>
      </div>
    `;
        optionsContainer.appendChild(btn);
    });

    // Update progress bar
    const progress = (currentQuizIndex / totalQuestions) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progress}%`;
}

function checkAnswer(selectedId, correctId, btnElement) {
    const feedback = document.getElementById('quiz-feedback');
    const allBtns = document.getElementById('quiz-options').children;
    const nextBtn = document.getElementById('quiz-next-btn');

    // Disable all buttons
    for (let btn of allBtns) {
        btn.disabled = true;
        btn.classList.add('quiz-option--disabled');
    }

    feedback.classList.remove('hidden', 'quiz-feedback--correct', 'quiz-feedback--incorrect');

    if (selectedId === correctId) {
        quizScore += 10;
        btnElement.classList.add('quiz-option--correct');

        feedback.classList.add('quiz-feedback--correct');
        feedback.innerHTML = `
      <span class="material-symbols-outlined">check_circle</span>
      <div>
        <h4 class="quiz-feedback-title" style="color: #22c55e;">Correct!</h4>
        <p class="quiz-feedback-text">You identified the next stage correctly.</p>
      </div>
    `;
        updateScore();
    } else {
        btnElement.classList.add('quiz-option--incorrect');

        feedback.classList.add('quiz-feedback--incorrect');
        feedback.innerHTML = `
      <span class="material-symbols-outlined">cancel</span>
      <div>
        <h4 class="quiz-feedback-title" style="color: #ef4444;">Not quite...</h4>
        <p class="quiz-feedback-text">The correct next stage was <strong style="color: white;">${starStages[correctId].title}</strong>.</p>
      </div>
    `;

        // Highlight correct answer
        for (let btn of allBtns) {
            const title = btn.querySelector('.quiz-option-title').textContent;
            if (title === starStages[correctId].title) {
                btn.classList.add('quiz-option--correct');
            }
        }
    }

    // Show Next Button or End Quiz
    if (currentQuizIndex < quizQuestions.length - 1) {
        nextBtn.classList.remove('hidden');
    } else {
        // End of Quiz
        document.getElementById('quiz-progress-bar').style.width = '100%';
        document.getElementById('quiz-restart-btn').classList.remove('hidden');

        // Append final message
        const finalDiv = document.createElement('div');
        finalDiv.className = 'quiz-complete';
        finalDiv.innerHTML = `
      <h3>Quiz Complete!</h3>
      <p>Final Score: ${quizScore} / ${totalQuestions * 10}</p>
    `;
        feedback.appendChild(finalDiv);
    }
}

export function nextQuestion() {
    const card = document.getElementById('quiz-card');
    card.style.opacity = '0';

    setTimeout(() => {
        currentQuizIndex++;
        renderQuestion();
    }, 300);
}

function updateScore() {
    const display = document.getElementById('score-display');
    display.textContent = quizScore;

    // Visual pop effect
    const scoreContainer = display.parentElement;
    scoreContainer.style.transform = 'scale(1.1)';
    setTimeout(() => {
        scoreContainer.style.transform = 'scale(1)';
    }, 200);
}

// Make functions available globally
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
