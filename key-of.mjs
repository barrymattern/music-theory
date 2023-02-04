// cSpell: disable
// Try `eslint-config-airbnb` for formatting
// Non-react:  https://www.npmjs.com/package/eslint-config-airbnb-base

import { scaleSteps, chordSequence, chordNum, buildKeyboard, sharpKeys, flatKeys } from "./piano.mjs"

const buildScale = key => {
  let keyboard;

  if (sharpKeys.includes(key)) keyboard = buildKeyboard("sharp");
  else if (flatKeys.includes(key)) keyboard = buildKeyboard("flat");
  else keyboard = buildKeyboard();

  const selectedKeyIndex = keyboard.indexOf(key);
  const scaleNotes = [];

  let count = selectedKeyIndex;
  for (let i = 0; i < scaleSteps.length; i++) {
    if (count > keyboard.length - 1) {
      count = count - keyboard.length;
    }

    scaleNotes.push(keyboard[count]);
    count += scaleSteps[i];
  }

  // Account for sharp & flat key oddities
  if (key === "F#") {
    let indexF = scaleNotes.indexOf("F");
    scaleNotes[indexF] = "E#";
  } else if (key === "C#") {
    let indexF = scaleNotes.indexOf("F");
    let indexC = scaleNotes.indexOf("C");
    scaleNotes[indexF] = "E#";
    scaleNotes[indexC] = "B#";
  } else if (key === "Gb") {
    let indexB = scaleNotes.indexOf("B");
    scaleNotes[indexB] = "Cb";
  } else if (key === "Cb") {
    scaleNotes[0] = "Cb";
    let indexE = scaleNotes.indexOf("E");
    scaleNotes[indexE] = "Fb";
  }

  return scaleNotes;
};

const buildChord = (key, numOrNote) => {
  let index;
  const scale = buildScale(key);
  const chordNotes = [];

  if (typeof numOrNote === "number") {
    index = numOrNote - 1;

    if (index > scale.length - 1) {
      console.log("\nNumber not in scale");
      return;
    }
  } else if (typeof numOrNote === "string") {
    index = scale.indexOf(numOrNote);
    
    if (index == -1) {
      console.log("\nNote not in scale");
      return;
    }
  }

  for (let i = 0; i < scale.length; i += 2) {
    let newIndex = index + i;

    if (newIndex > scale.length - 1) {
      newIndex = newIndex - scale.length;
    }

    chordNotes.push(scale[newIndex]);
  }

  const chord = {
    name: `${scale[index]}${chordSequence[index]}`,
    number: `(${chordNum[index]})`,
    notes: `${chordNotes.join(", ")}`
  };

  return chord;
};

const buildProgression = (key, ...numsOrNotes) => {
  const progression = {
    key: key,
    chords: {}
  };

  numsOrNotes.forEach(numOrNote => {
    const chord = buildChord(key, numOrNote);

    progression.chords[chord.name] = chord;
  });

  return progression;
};

export { buildScale, buildChord, buildProgression };
