class Project {
    constructor(name) {
        this._name = name;
        this.newProject = [];
    }

    get showProject() {
        return this.newProject;
    }

    get name() {
        return this._name;
    }

    addTask(task) {
        this.newProject.push(task);
    }

    removeTask(task) {
        this.newProject = this.newProject.filter(item => item !== task);
    }
}

const projectListContainer = () => {
    const _allProjects = [];

    const showAllProjects = () => {
        return _allProjects;
    }

    const addProject = project => {
        _allProjects.push(project);
    }

    return { showAllProjects, addProject };
}

export { Project, projectListContainer }