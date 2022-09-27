type ArchiveDoc = {
    id: string,
    src: string,
    location: [number, number],
    iconImg?: HTMLElement, // TODO: remove this
    docImg?: HTMLElement, // TODO: remove this
    date: Date,
    description: string,
    srcUrl: string,
    citation: string // TODO: something smarter
}

export type { ArchiveDoc }
