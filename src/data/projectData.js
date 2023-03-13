import FFSearchSVG from '/src/assets/images/FF-Search.svg';
import TaskManagerSVG from '/src/assets/images/task-manager.svg';
import RPSLSSVG from '/src/assets/images/RPSLS.svg';
import CalculatorSVG from '/src/assets/images/calculator.svg';

export const projectData = [
  {
    id: crypto.randomUUID(),
    title: 'FF-Search',
    description:
      'A search application that utilizes the moogle API to search for Final Fantasy characters; users can search for the games and characters from the main series.',
    technologies: ['HTML', 'CSS', 'JavaScript (ES6+)', 'MVC', 'RESTfulAPI'],
    Image: FFSearchSVG,
    repository: 'https://github.com/Mully7773/FF-Search',
    livelink: 'https://mully7773.github.io/FF-Search/',
  },
  {
    id: crypto.randomUUID(),
    title: 'Task-Manager',
    description:
      "A 'task manager' or todo application built with React. Users can add, delete, edit, and view their tasks. I've also included drag and drop functionality to reorder tasks, a mark as complete option, and a dark/light theme toggler.",
    technologies: ['React', 'Styled-Components', 'Framer-Motion', 'Vite'],
    Image: TaskManagerSVG,
    repository: 'https://github.com/Mully7773/Task-Manager',
    livelink: 'https://task-manager-fm.netlify.app/',
  },
  {
    id: crypto.randomUUID(),
    title: 'Rock, Paper, Scissors, Lizard, Spock!',
    description:
      "An application based on the traditional game with two extra player choices originating from 'The Big Bang Theory'. Users can play against a computer on their mobile device or desktop and try to get a high score.",
    technologies: ['HTML', 'CSS', 'JavaScript (ES6+)', 'MVC'],
    Image: RPSLSSVG,
    repository: 'https://github.com/Mully7773/RPSLS',
    livelink: 'https://mully7773.github.io/RPSLS/',
  },
  {
    id: crypto.randomUUID(),
    title: 'Calculator',
    description:
      'A thematic and responsive calculator that allows users to easily add, subtract, and divide positive integers and floating point numbers.',
    technologies: ['HTML', 'CSS', 'JavaScript (ES6+)', 'MVC'],
    Image: CalculatorSVG,
    repository: 'https://github.com/Mully7773/Calculator',
    livelink: 'https://mully7773.github.io/Calculator/',
  },
];
