const noteNames = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'] as const;
type Note = typeof noteNames[number];

const noteToOffset = Object.fromEntries(noteNames.map((name, index) => [name, index]));

export class Pitch {
    readonly note: Note;
    readonly octave: number;
    readonly frequency: number;

    private static readonly A440_INDEX = 12 * 4 + 9;

    constructor(note: Note, octave: number);
    constructor(index: number);

    constructor(arg1: Note | number, arg2?: number) {
        if (typeof arg1 === "string") {
            this.note = arg1;
            this.octave = arg2!;

            const distance = this.asInteger() - Pitch.A440_INDEX;
            this.frequency = 440 * Math.pow(2, distance / 12);
        } else {
            const index = arg1;
            this.note = noteNames[index % 12];
            this.octave = Math.floor(index / 12);

            const distance = index - Pitch.A440_INDEX;
            this.frequency = 440 * Math.pow(2, distance / 12);
        }
    }

    asInteger(): number {
        return 12 * this.octave + noteToOffset[this.note];
    }

    compareTo(other: Pitch): number {
        return this.asInteger() - other.asInteger();
    }

    equals(other: Pitch): boolean {
        return this.asInteger() === other.asInteger();
    }
}

export function GeneratePitchRange(start: Pitch, end: Pitch) {
    // Generate a range of pitches from [start, end)
    if (start.compareTo(end) >= 0) {
        throw new Error("start pitch must be less than end pitch");
    }
    const result: Pitch[] = [];
    for (let i = start.asInteger(); i < end.asInteger(); i++) {
        result.push(new Pitch(i));
    }

    return result;
}
