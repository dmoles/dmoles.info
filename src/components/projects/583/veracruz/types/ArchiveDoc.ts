import type {Location} from './location'

type ArchiveDoc = {
    id: string,
    src: string,
    location: Location,
    iconImg?: HTMLElement, // TODO: remove this
    docImg?: HTMLElement, // TODO: remove this
    date: Date,
    description: string,
    srcUrl: string,
    citation: string // TODO: something smarter
}

export type {ArchiveDoc}
