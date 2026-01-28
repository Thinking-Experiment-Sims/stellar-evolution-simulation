// Stage Modal Component
// Displays detailed information about each stellar stage

import { starStages } from '../data/starStages.js';

export function initModal() {
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

export function openModal(id) {
    const data = starStages[id];
    if (!data) return;

    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-desc').innerHTML = data.desc;
    document.getElementById('modal-temp').textContent = data.temp;
    document.getElementById('modal-time').textContent = data.time;
    document.getElementById('modal-fact').textContent = data.fact;

    const modal = document.getElementById('info-modal');
    modal.classList.remove('hidden');

    // Focus trap for accessibility
    modal.focus();
}

export function closeModal() {
    document.getElementById('info-modal').classList.add('hidden');
}

export function closeModalOutside(event) {
    if (event.target.id === 'info-modal') {
        closeModal();
    }
}

// Make functions available globally
window.openModal = openModal;
window.closeModal = closeModal;
window.closeModalOutside = closeModalOutside;
