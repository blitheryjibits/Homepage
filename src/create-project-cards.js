import { createCard } from './create-card';

export default function createProjectCards(projects, lorem) {
    const project_cnt = document.createElement('div');  
    project_cnt.id = 'project-container';
    
    Array.from(projects.projects).forEach(_project => {
        const project = createCard(_project.name, lorem ? lorem.generateSentences(1) : _project.description);
        project_cnt.appendChild(project);
    });
    return project_cnt;
}