import { v4 as uuidv4 } from 'uuid';

export default class Task {
    constructor(name, description, date, priority, project) {
        this._id = uuidv4();
        this._name = name;
        this._description = description;
        this._date = date;
        this._priority = priority;
        this._project = project;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }

    get project() {
        return this._project;
    }

    set project(value) {
        this._project = value;
    }
}