import { v4 as uuidv4 } from 'uuid';

export default class Project {
    constructor(name) {
        this._project = [];
        this._name = name;
        this._id = "project_" + uuidv4().slice(-12, -1);
    }

    get showProject() {
        return this._project;
    }

    get showTasks() {
        const projectTasks = [];
        for (let task of this._project) {
            projectTasks.push(task);
        }
        return projectTasks;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        return this._name = value;
    }

    get id() {
        return this._id;
    }

    addTask(task) {
        this._project.push(task);
    }

    deleteTask(task) {
        this._project.splice(this._project.indexOf(task), 1);
    }
}