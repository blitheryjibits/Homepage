
export default function createHeader(lorem) {
    const element = document.createElement('div');
    const imgCnt = document.createElement('div');
    const name = document.createElement('p');
    const abtme = document.createElement('div');
    const infoCnt = document.createElement('div');

    name.innerHTML = "Robert<br>&nbsp&nbspThornton"; // Note to sanitize using DOMPurify if this changes to user input
    abtme.innerText = lorem.generateParagraphs(1);

    imgCnt.classList.add('img-cnt');
    abtme.classList.add('about-me');
    name.classList.add('name');
    name.classList.add('playfair-display-title');
    infoCnt.classList.add('info-cnt');

    imgCnt.appendChild(name);
    element.append(imgCnt, abtme);
    infoCnt.append(element)

    return infoCnt;
}