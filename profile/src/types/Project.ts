type Project = {
    name: string,
    desc?: string,
    link: string
}

type Publication = Project & {
    abstract: string,
    venue: string,
    date: string
}

export type { Project, Publication }
