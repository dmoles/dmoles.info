import type {Location} from './location'

type ArchiveDoc = {
    id: string,
    src: string,
    location: Location,
    date: Date,
    description: string,
    srcUrl: string,
    citation: string // TODO: something smarter
}

export type {ArchiveDoc}
