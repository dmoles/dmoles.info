import {Project} from "./Project";

type Course = {
    id: number,
    name: string,
    projects?: Array<Project>
}

export type {Course}

const courseUrlBase = `https://comminfo.rutgers.edu/academics/courses`;
function courseUrlFor(course: Course): string {
    return `${courseUrlBase}?courses=${course.id}&program=32`
}
export { courseUrlFor }
