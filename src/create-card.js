
export function createCard(title, content) {
    const card = document.createElement('div');
    const project_img_cnt = document.createElement('div');
    const _title = document.createElement('h3');
    const desc = document.createElement('p');
    const desc_cnt = document.createElement('div');
    
    project_img_cnt.classList.add('project-img-cnt');
    card.classList.add('card');
    _title.classList.add('title');
    desc.classList.add('project-desription');

    _title.textContent = title;
    desc.textContent = content;
    
    // temporary filler text for image
    project_img_cnt.innerHTML = "<h3>Placeholder</h3>"

    desc_cnt.append(_title, desc);
    card.append(project_img_cnt, desc_cnt);


    return card;
}