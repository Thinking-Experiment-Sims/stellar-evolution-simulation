// Main Application Entry Point
// Stellar Evolution Simulation

import './styles/main.css';
import { initPathwayDiagram } from './components/PathwayDiagram.js';
import { initModal } from './components/StageModal.js';
import { initQuizMode, startQuiz } from './components/QuizMode.js';

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initStarryBackground();
  initPathwayDiagram();
  initModal();
  initQuizMode();
});

// Create animated starry background
function initStarryBackground() {
  const container = document.getElementById('stars-bg');
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--opacity', (Math.random() * 0.7 + 0.3).toString());
    star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
    star.style.animationDelay = `${Math.random() * 3}s`;

    container.appendChild(star);
  }
}

// Mode Switching
window.switchMode = function (mode) {
  const learnBtn = document.getElementById('btn-learn');
  const quizBtn = document.getElementById('btn-quiz');
  const learnSec = document.getElementById('learn-section');
  const quizSec = document.getElementById('quiz-section');

  if (mode === 'learn') {
    learnBtn.classList.add('mode-btn--active');
    quizBtn.classList.remove('mode-btn--active');
    learnSec.classList.remove('hidden');
    quizSec.classList.add('hidden');

    // Redraw lines after showing learn section
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  } else {
    quizBtn.classList.add('mode-btn--active');
    learnBtn.classList.remove('mode-btn--active');
    learnSec.classList.add('hidden');
    quizSec.classList.remove('hidden');
    startQuiz();
  }
};
