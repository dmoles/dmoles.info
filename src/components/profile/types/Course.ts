import {Project} from "./Project";

const COURSE_URL_BASE = `https://comminfo.rutgers.edu/academics/courses`;
const PROGRAM_ID = 32;

class Course {
    id: number;
    name: string;
    projects: Array<Project>;

    constructor(id: number, name: string, ...projects: Array<Project>) {
        this.id = id;
        this.name = name;
        this.projects = projects;
    }

    get url(): string {
        return `${COURSE_URL_BASE}?courses=${this.id}&program=${PROGRAM_ID}`
    }

    toString(): string {
        return `${this.id} ${this.name}`
    }
}

export {COURSE_URL_BASE, PROGRAM_ID, Course}
