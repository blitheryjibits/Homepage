import './styles.css';
import myImage from './images/computer.jpg';
const projects = require('./project-data.json');
import createProjectCards from './create-project-cards';
import createHeader from './create-header';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
});


const header = document.getElementById("header");
header.append(createHeader(lorem));

const main = document.getElementById('main');
main.append(createProjectCards(projects, lorem));
