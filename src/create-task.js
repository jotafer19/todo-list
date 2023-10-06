import { v4 as uuidv4 } from 'uuid';

export default class Task {
    constructor(name, description, dueDate, priority) {
        this._id = uuidv4();
        this._name = name;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
    
    set name(value) {
        return this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        return this._description = value;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(value) {
        return this._dueDate = value;
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        return this._priority = value;
    }
}