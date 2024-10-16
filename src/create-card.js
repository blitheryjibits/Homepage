
export function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    return card;
}