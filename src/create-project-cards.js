import { createCard } from './create-card';

export default function createProjectCards(projects) {
    const project_cnt = document.createElement('div');
    project_cnt.id = 'project-container';
    Array.from(projects.projects).forEach(_project => {
        console.log(_project.name)
        const project = createCard(_project.name, _project.description);
        project_cnt.appendChild(project);
    });
    return project_cnt;
}