export class Chord {
    name: string;
    stringCount: number = 6;
    // [e, a, d, g, b, e]
    // x = mute
    // o = open
    notes = [];
    hasCapo: boolean = false;
}