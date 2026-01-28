// Pathway Diagram Component
// Renders the interactive stellar evolution diagram

import { starStages, lowMassPath, highMassPath, highMassEndings } from '../data/starStages.js';

let isHighMass = false;

export function initPathwayDiagram() {
    renderPath();
    window.addEventListener('resize', drawLines);
}

export function toggleMassPath() {
    const toggle = document.getElementById('mass-toggle');
    isHighMass = toggle.checked;

    // Update labels styling
    const lblLow = document.getElementById('label-low');
    const lblHigh = document.getElementById('label-high');

    if (isHighMass) {
        lblHigh.classList.add('mass-label--high-active');
        lblHigh.classList.remove('mass-label');
        lblLow.classList.remove('mass-label--active');
        lblLow.classList.add('mass-label');
    } else {
        lblLow.classList.add('mass-label--active');
        lblLow.classList.remove('mass-label');
        lblHigh.classList.remove('mass-label--high-active');
        lblHigh.classList.add('mass-label');
    }

    renderPath();
}

function renderPath() {
    const container = document.getElementById('stages-container');
    const svg = document.getElementById('connections');
    container.innerHTML = '';
    svg.innerHTML = '';

    let nodesToRender = [];

    if (isHighMass) {
        nodesToRender = highMassPath;
    } else {
        nodesToRender = lowMassPath;
    }

    // Render sequential nodes
    nodesToRender.forEach((stageId, index) => {
        const data = starStages[stageId];
        const node = createNodeElement(data, index);
        container.appendChild(node);
    });

    // Handle Split Ending for High Mass
    if (isHighMass) {
        const splitWrapper = document.createElement('div');
        splitWrapper.className = 'split-wrapper';

        // "OR" label
        const orLabel = document.createElement('div');
        orLabel.innerText = 'DEPENDING ON REMAINING MASS';
        orLabel.className = 'split-label';
        splitWrapper.appendChild(orLabel);

        const splitContainer = document.createElement('div');
        splitContainer.className = 'split-container';

        highMassEndings.forEach((stageId, index) => {
            const data = starStages[stageId];
            splitContainer.appendChild(createNodeElement(data, nodesToRender.length + index));
        });

        splitWrapper.appendChild(splitContainer);
        container.appendChild(splitWrapper);
    }

    // Wait for DOM layout then draw lines
    setTimeout(drawLines, 50);
}

function createNodeElement(data, index) {
    const wrapper = document.createElement('div');
    wrapper.className = 'stage-node';
    wrapper.style.animationDelay = `${index * 0.3}s`;
    wrapper.dataset.id = data.id;
    wrapper.onclick = () => window.openModal(data.id);

    // Determine size based on star type
    let sizeClass = 'stage-image-container--md';
    let glowClass = '';

    if (data.id === 'white_dwarf' || data.id === 'neutron_star' || data.id === 'black_hole') {
        sizeClass = 'stage-image-container--sm';
    } else if (data.id === 'red_giant' || data.id === 'red_supergiant') {
        sizeClass = 'stage-image-container--lg';
    }

    // Determine glow effect
    if (data.id === 'main_yellow') glowClass = 'glow-yellow';
    if (data.id === 'main_blue' || data.id === 'neutron_star') glowClass = 'glow-blue';
    if (data.id.includes('red')) glowClass = 'glow-red';
    if (data.id === 'white_dwarf') glowClass = 'glow-white';
    if (data.id === 'nebula' || data.id === 'supernova' || data.id === 'planetary_nebula') glowClass = 'glow-purple';
    if (data.id === 'black_hole') glowClass = 'glow-white';

    // Image Circle
    const circle = document.createElement('div');
    circle.className = `stage-image-container ${sizeClass} ${glowClass}`;

    const img = document.createElement('img');
    img.src = data.img;
    img.alt = data.title;
    img.className = 'stage-image';

    circle.appendChild(img);

    // Click hint overlay
    const overlay = document.createElement('div');
    overlay.className = 'stage-overlay';
    overlay.innerHTML = '<span class="material-symbols-outlined">visibility</span>';
    circle.appendChild(overlay);

    // Label
    const label = document.createElement('div');
    label.className = 'stage-label';
    label.textContent = data.title;

    wrapper.appendChild(circle);
    wrapper.appendChild(label);

    return wrapper;
}

function drawLines() {
    const svg = document.getElementById('connections');
    const nodes = Array.from(document.querySelectorAll('.stage-node'));
    const container = document.getElementById('stages-container');

    if (!container || nodes.length === 0) return;

    const containerRect = container.getBoundingClientRect();

    // Update SVG size
    svg.style.width = containerRect.width + 'px';
    svg.style.height = containerRect.height + 'px';

    let svgHTML = '';

    const getCenter = (el) => {
        const circle = el.querySelector('.stage-image-container');
        if (!circle) return { x: 0, y: 0 };
        const rect = circle.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top
        };
    };

    // Determine how many sequential lines to draw
    const limit = isHighMass ? nodes.length - 2 : nodes.length - 1;

    // Draw main sequential lines
    for (let i = 0; i < limit; i++) {
        if (nodes[i] && nodes[i + 1]) {
            const start = getCenter(nodes[i]);
            const end = getCenter(nodes[i + 1]);
            svgHTML += `<path d="M ${start.x} ${start.y} L ${end.x} ${end.y}" class="connector-line" />`;
        }
    }

    // Draw Split lines for High Mass
    if (isHighMass && nodes.length >= 3) {
        const supernovaIndex = nodes.length - 3;
        const supernova = nodes[supernovaIndex];
        const neutron = nodes[nodes.length - 2];
        const blackHole = nodes[nodes.length - 1];

        if (supernova && neutron && blackHole) {
            const start = getCenter(supernova);
            const endN = getCenter(neutron);
            const endB = getCenter(blackHole);

            svgHTML += `<path d="M ${start.x} ${start.y} L ${endN.x} ${endN.y}" class="connector-line" />`;
            svgHTML += `<path d="M ${start.x} ${start.y} L ${endB.x} ${endB.y}" class="connector-line" />`;
        }
    }

    svg.innerHTML = svgHTML;
}

// Make toggle function available globally
window.toggleMassPath = toggleMassPath;
