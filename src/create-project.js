export default class Project {
    constructor(name) {
        this._name = name;
        this.newProject = [];
    }

    get showProject() {
        return this.newProject;
    }

    addTask(task) {
        this.newProject.push(task);
    }

    removeTask(task) {
        this.newProject = this.newProject.filter(item => item !== task);
    }
}