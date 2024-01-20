const TERM_NAMES = ['Spring', 'Summer', 'Fall', 'Winter'] as const;
type TermName = typeof TERM_NAMES[number];
export type { TermName }

type TermYear = 2022 | 2023 | 2024
export type { TermYear }

class Term {
    readonly year: TermYear;
    readonly name: TermName;
    readonly ord: number;

    constructor(year: TermYear, name: TermName) {
        this.year = year;
        this.name = name;

        this.ord = year + (TERM_NAMES.indexOf(this.name) / TERM_NAMES.length)
    }

    toString(): string {
        return `${this.name} ${this.year}`
    }

    valueOf(): number {
        return this.ord
    }

    static compareFn(t1: Term, t2: Term): number {
        return t1.ord - t2.ord
    }
}

export { Term }
