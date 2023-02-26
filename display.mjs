// cSpell: disable
// Try `eslint-config-airbnb` for formatting
// Non-react:  https://www.npmjs.com/package/eslint-config-airbnb-base

import { buildScale, buildChord, buildProgression } from "./key-of.mjs"
import { buildCircleOf } from "./circle-of.mjs";

const displayScale = key => {
  const scale = buildScale(key);

  console.log(`  Key: ${scale[0]} (${scale[5]}min7)
Notes: ${scale.join(", ")}\n`);

  return;
};

const displayChord = (key, numOrNote) => {
  const chord = buildChord(key, numOrNote);

  console.log(`${chord.name} ${chord.number}
${chord.notes}\n`);

  return;
};

const displayProgression = (key, ...numsOrNotes) => {
  const progression = buildProgression(key, ...numsOrNotes);
  const chords = Object.keys(progression.chords);
  const scale = buildScale(key);

  console.log(`  Key: ${progression.key} (${scale[5]}min7)`);
  console.log(`Scale: ${scale.join(", ")}\n`);

  chords.forEach(chord => {
    console.log(progression.chords[chord].name, progression.chords[chord].number);
    console.log(progression.chords[chord].notes + "\n");
  });

  return;
};

const displayCircleOf = (degree) => {
  console.log(`Cirlce of ${degree}`);
  console.log(buildCircleOf(degree) + "\n");
  return;
};

const displayKeyboard = () => {
  console.log(`
|  |    | |    | |    |   |  |    | |    |   |  |    | |    | |    |   |  |    | |    |   |
|  |    | |    | |    |   |  |    | |    |   |  |    | |    | |    |   |  |    | |    |   |
|  | Gb | | Ab | | Bb |   |  | Db | | Eb |   |  | Gb | | Ab | | Bb |   |  | Db | | Eb |   |
|  | F# | | G# | | A# |   |  | C# | | D# |   |  | F# | | G# | | A# |   |  | C# | | D# |   |
|  |    | |    | |    |   |  |    | |    |   |  |    | |    | |    |   |  |    | |    |   |
|  |____| |____| |____|   |  |____| |____|   |  |____| |____| |____|   |  |____| |____|   |
|     |      |      |     |     |      |     |     |      |      |     |     |      |     |
|     |      |      |     |     |      |     |     |      |      |     |     |      |     |
|  F  |  G   |  A   |  B  |  C  |  D   |  E  |  F  |  G   |  A   |  B  |  C  |  D   |  E  |
|     |      |      |     |     |      |     |     |      |      |     |     |      |     |
|_____|______|______|_____|_____|______|_____|_____|______|______|_____|_____|______|_____|
  `);
};


/** DISPLAY OPTIONS ***********************************************************\
 * 
 * displayKeyboard()
 * displayScale(key)
 * displayChord(key, numOrNote)
 * displayProgression(key, ...numsOrNotes)
 * displayCircleOf(degree)
 * 
 ******************************************************************************/

displayKeyboard();
displayCircleOf("Fourths");
displayScale("C");
displayScale("F");
displayScale("Bb");
displayScale("Eb");
displayScale("Ab");
displayScale("Db");
displayScale("F#");
displayScale("B");
displayScale("E");
displayScale("A");
displayScale("D");
displayScale("G");
