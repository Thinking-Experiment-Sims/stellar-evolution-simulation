// Star Stages Data Module
// Contains all information about each stage of stellar evolution

export const starStages = {
    nebula: {
        id: 'nebula',
        title: 'Nebula',
        img: './images/nebula.png',
        temp: '10-50 K',
        time: 'Millions of years',
        desc: `A <strong>nebula</strong> is a giant cloud of gas and dust in space, often called a "stellar nursery." 
           These cosmic clouds are primarily composed of hydrogen and helium, with traces of heavier elements. 
           When regions of a nebula become dense enough, gravity begins to pull the material together, 
           initiating the birth of a new star. The Orion Nebula is one of the most famous examples visible from Earth.`,
        fact: 'The word "nebula" comes from Latin, meaning "cloud" or "mist." Some nebulae are so large that light takes years to cross them!'
    },

    protostar: {
        id: 'protostar',
        title: 'Protostar',
        img: './images/protostar.png',
        temp: '2,000-3,000 K',
        time: '100,000 - 1 million years',
        desc: `A <strong>protostar</strong> forms when gravity causes a region of the nebula to collapse. 
           As material falls inward, the core heats up from the release of gravitational energy. 
           The protostar isn't yet a true star because nuclear fusion hasn't begun in its core. 
           It's surrounded by a rotating disk of gas and dust from which planets may eventually form.`,
        fact: 'A protostar can be 100 times larger than our Sun, but it will shrink dramatically as it evolves!'
    },

    main_yellow: {
        id: 'main_yellow',
        title: 'Main Sequence (Sun-like)',
        img: './images/main_yellow.png',
        temp: '5,500-6,000 K',
        time: '~10 billion years',
        desc: `A <strong>yellow main sequence star</strong> like our Sun is in the most stable phase of stellar life. 
           In the core, hydrogen atoms fuse into helium, releasing enormous amounts of energy. 
           This fusion creates an outward pressure that perfectly balances the inward pull of gravity, 
           keeping the star stable for billions of years. Our Sun is about halfway through this phase.`,
        fact: 'Our Sun converts about 600 million tons of hydrogen into helium every second, yet it has enough fuel to last another 5 billion years!'
    },

    main_blue: {
        id: 'main_blue',
        title: 'Main Sequence (Massive)',
        img: './images/main_blue.png',
        temp: '20,000-50,000 K',
        time: '~10 million years',
        desc: `<strong>Massive blue stars</strong> are the giants of the main sequence, with masses 10-100 times greater than our Sun. 
           Their extreme mass creates incredible pressure and temperature in their cores, causing fusion to occur much faster. 
           This makes them incredibly luminous—some shine millions of times brighter than the Sun—but their fuel burns out quickly.`,
        fact: 'Blue giant stars are so hot that if one replaced our Sun, Earth would be vaporized instantly! They can be visible from millions of light-years away.'
    },

    red_giant: {
        id: 'red_giant',
        title: 'Red Giant',
        img: './images/red_giant.png',
        temp: '3,500-4,500 K',
        time: '~1 billion years',
        desc: `When a Sun-like star exhausts its hydrogen fuel, the core contracts while outer layers expand dramatically, 
           creating a <strong>red giant</strong>. The star can swell to 100-200 times its original size! 
           The surface cools and turns red, while helium fusion begins in the core. 
           When our Sun becomes a red giant in about 5 billion years, it will engulf Mercury and Venus.`,
        fact: 'The red giant Betelgeuse in Orion is so large that if it replaced our Sun, its surface would extend past Jupiter!'
    },

    red_supergiant: {
        id: 'red_supergiant',
        title: 'Red Supergiant',
        img: './images/red_supergiant.png',
        temp: '3,200-4,000 K',
        time: 'A few million years',
        desc: `Massive stars expand into <strong>red supergiants</strong>—the largest stars in the universe. 
           These cosmic behemoths can be 1,000 times larger than our Sun! 
           Inside, layers of different elements fuse in shells around the core: hydrogen, helium, carbon, oxygen, 
           and eventually iron. Once iron forms, the star is on borrowed time—a supernova is imminent.`,
        fact: 'Red supergiants are so large and diffuse that their outer atmospheres are less dense than the best vacuum we can create on Earth!'
    },

    planetary_nebula: {
        id: 'planetary_nebula',
        title: 'Planetary Nebula',
        img: './images/planetary_nebula.png',
        temp: 'Core: 100,000+ K',
        time: '~20,000 years',
        desc: `A <strong>planetary nebula</strong> forms when a red giant gently sheds its outer layers into space. 
           The exposed hot core illuminates this expanding shell of gas, creating spectacular rings and patterns. 
           Despite the name, these have nothing to do with planets—early astronomers thought they looked like distant planets through telescopes.`,
        fact: 'The Ring Nebula (M57) is a famous planetary nebula that looks like a colorful cosmic donut. It\'s about 2,000 light-years from Earth!'
    },

    supernova: {
        id: 'supernova',
        title: 'Supernova',
        img: './images/supernova.png',
        temp: 'Billions of K',
        time: 'Seconds to weeks',
        desc: `A <strong>supernova</strong> is one of the most violent events in the universe. 
           When a massive star's iron core collapses, the resulting explosion briefly outshines entire galaxies! 
           The shockwave blasts the star's outer layers into space at 10,000+ km/s, creating heavy elements 
           like gold, silver, and uranium. These elements eventually become part of new stars and planets.`,
        fact: 'In 1054 AD, Chinese astronomers recorded a supernova so bright it was visible during the day for 23 days! The remnant is now the Crab Nebula.'
    },

    white_dwarf: {
        id: 'white_dwarf',
        title: 'White Dwarf',
        img: './images/white_dwarf.png',
        temp: '8,000-40,000 K',
        time: 'Trillions of years',
        desc: `A <strong>white dwarf</strong> is the dense, Earth-sized core left behind after a Sun-like star sheds its outer layers. 
           No fusion occurs—it simply glows from residual heat, slowly cooling over trillions of years. 
           The matter is so compressed that a teaspoon would weigh about 5 tons on Earth! 
           Eventually, it will fade to become a cold, invisible "black dwarf."`,
        fact: 'White dwarfs are made of "degenerate matter" where electrons are squeezed so close together that quantum mechanics prevents further collapse!'
    },

    neutron_star: {
        id: 'neutron_star',
        title: 'Neutron Star',
        img: './images/neutron_star.png',
        temp: '600,000+ K',
        time: 'Billions of years',
        desc: `When a star 8-20 times the Sun's mass goes supernova, the core collapses into a <strong>neutron star</strong>. 
           These city-sized objects pack more mass than our Sun into a sphere just 20 km across! 
           The density is so extreme that all protons and electrons merge into neutrons. 
           Many rotate rapidly as pulsars, beaming radiation like cosmic lighthouses.`,
        fact: 'A sugar-cube-sized piece of neutron star material would weigh about 1 billion tons—as much as Mount Everest!'
    },

    black_hole: {
        id: 'black_hole',
        title: 'Black Hole',
        img: './images/black_hole.png',
        temp: 'N/A (Event Horizon)',
        time: 'Potentially forever',
        desc: `When stars more massive than 20 Suns explode, not even neutron degeneracy pressure can stop the collapse. 
           The core crushes into a <strong>black hole</strong>—a point of infinite density where gravity is so strong 
           that nothing, not even light, can escape once it crosses the event horizon. 
           The boundary around a black hole distorts space and time in extreme ways.`,
        fact: 'If our Sun became a black hole (it can\'t), it would only be about 6 km across, but Earth would continue orbiting normally!'
    }
};

// Pathway definitions
export const lowMassPath = ['nebula', 'protostar', 'main_yellow', 'red_giant', 'planetary_nebula', 'white_dwarf'];
export const highMassPath = ['nebula', 'protostar', 'main_blue', 'red_supergiant', 'supernova'];
export const highMassEndings = ['neutron_star', 'black_hole'];

// Quiz questions
export const quizQuestions = [
    {
        startId: 'nebula',
        massType: 'All Stars',
        question: 'Every star begins its life in a stellar nursery. What is the next stage as gravity pulls dust together?',
        correctId: 'protostar',
        options: ['protostar', 'white_dwarf', 'black_hole']
    },
    {
        startId: 'protostar',
        massType: 'Low Mass Star (Like Sun)',
        question: 'The protostar heats up enough to start fusion. What stable stage does it enter?',
        correctId: 'main_yellow',
        options: ['main_yellow', 'red_supergiant', 'neutron_star']
    },
    {
        startId: 'main_yellow',
        massType: 'Sun-like Star',
        question: 'After billions of years, the hydrogen fuel runs out. The star expands and cools. What does it become?',
        correctId: 'red_giant',
        options: ['supernova', 'red_giant', 'black_hole']
    },
    {
        startId: 'red_giant',
        massType: 'Sun-like Star',
        question: 'The outer layers puff away gently into space, creating a beautiful glowing shell. What is this?',
        correctId: 'planetary_nebula',
        options: ['protostar', 'planetary_nebula', 'supernova']
    },
    {
        startId: 'main_blue',
        massType: 'Massive Star',
        question: 'Massive stars burn hot and fast! When they run out of fuel, they expand into something enormous. What is it?',
        correctId: 'red_supergiant',
        options: ['white_dwarf', 'red_supergiant', 'main_yellow']
    },
    {
        startId: 'red_supergiant',
        massType: 'Massive Star',
        question: 'The core collapses and the star explodes violently! What is this event called?',
        correctId: 'supernova',
        options: ['planetary_nebula', 'supernova', 'nebula']
    },
    {
        startId: 'supernova',
        massType: 'Very Massive Star (>20x Sun)',
        question: 'If the remaining core is extremely heavy, gravity crushes it to a single point. What is formed?',
        correctId: 'black_hole',
        options: ['white_dwarf', 'black_hole', 'main_blue']
    }
];
