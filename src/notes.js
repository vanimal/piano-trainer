function note(id, name, notation) {
  return { id, name, notation };
}

function trebleNotation(note) {
  return `X;1\nV:PianoRightHand clef=treble\nV:PianoLeftHand clef=bass\n[V: PianoRightHand] ${note}`;
}

function bassNotation(note) {
  return `X;1\nV:PianoRightHand clef=treble\nV:PianoLeftHand clef=bass\n[V: PianoLeftHand] ${note}`;
}

const trebleNaturals = [
  note('C4', 'C', trebleNotation('C')),
  note('D4', 'D', trebleNotation('D')),
  note('E4', 'E', trebleNotation('E')),
  note('F4', 'F', trebleNotation('F')),
  note('G4', 'G', trebleNotation('G')),
  note('A4', 'A', trebleNotation('A')),
  note('B4', 'B', trebleNotation('B')),
  note('C5', 'C', trebleNotation('C\'')),
  note('D5', 'D', trebleNotation('D\'')),
  note('E5', 'E', trebleNotation('E\'')),
  note('F5', 'F', trebleNotation('F\'')),
  note('G5', 'G', trebleNotation('G\'')),
];

const trebleSharps = [
  note('C4#', 'C#', trebleNotation('^C')),
  note('D4#', 'D#', trebleNotation('^D')),
  note('F4#', 'F#', trebleNotation('^F')),
  note('G4#', 'G#', trebleNotation('^G')),
  note('A4#', 'A#', trebleNotation('^A')),
  note('C5#', 'C#', trebleNotation('^C\'')),
  note('D5#', 'D#', trebleNotation('^D\'')),
  note('F5#', 'F#', trebleNotation('^F\'')),
];

const trebleFlats = [
  note('C4#', 'D♭', trebleNotation('_D')),
  note('D4#', 'E♭', trebleNotation('_E')),
  note('F4#', 'G♭', trebleNotation('_G')),
  note('G4#', 'A♭', trebleNotation('_A')),
  note('A4#', 'B♭', trebleNotation('_B')),
  note('C5#', 'D♭', trebleNotation('_D\'')),
  note('D5#', 'E♭', trebleNotation('_E\'')),
];

const bassNaturals = [
  note('F2', 'F', bassNotation('F,,')),
  note('G2', 'G', bassNotation('G,,')),
  note('A2', 'A', bassNotation('A,,')),
  note('B2', 'B', bassNotation('B,,')),
  note('C3', 'C', bassNotation('C,')),
  note('D3', 'D', bassNotation('D,')),
  note('E3', 'E', bassNotation('E,')),
  note('F3', 'F', bassNotation('F,')),
  note('G3', 'G', bassNotation('G,')),
  note('A3', 'A', bassNotation('A,')),
  note('B3', 'B', bassNotation('B,')),
  note('C4', 'C', bassNotation('C'))
];

const bassSharps = [
  note('F2#', 'F#', bassNotation('^F,,')),
  note('G2#', 'G#', bassNotation('^G,,')),
  note('A2#', 'A#', bassNotation('^A,,')),
  note('C3#', 'C#', bassNotation('^C,')),
  note('D3#', 'D#', bassNotation('^D,')),
  note('F3#', 'F#', bassNotation('^F,')),
  note('G3#', 'G#', bassNotation('^G,')),
  note('A3#', 'A#', bassNotation('^A,'))
];

const bassFlats = [
  note('F2#', 'G♭', bassNotation('_G,,')),
  note('G2#', 'A♭', bassNotation('_A,,')),
  note('A2#', 'B♭', bassNotation('_B,,')),
  note('C3#', 'D♭', bassNotation('_D,')),
  note('D3#', 'E♭', bassNotation('_E,')),
  note('F3#', 'G♭', bassNotation('_G,')),
  note('G3#', 'A♭', bassNotation('_A,')),
  note('A3#', 'B♭', bassNotation('_B,')),
];

export { trebleNaturals, trebleSharps, trebleFlats, bassNaturals, bassSharps, bassFlats };