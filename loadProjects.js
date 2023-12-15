async function loadProjects() {
    const projectsContainer = document.querySelector('#projects');

    // List of project files
    const projectFiles = ['ElectionSimulator.html', /* add more files as needed */];

    for (const file of projectFiles) {
        const response = await fetch(`Projects/${file}`);
        const text = await response.text();

        projectsContainer.innerHTML += text;
    }
}

loadProjects();