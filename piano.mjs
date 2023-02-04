const pianoKeys = {
  1: {
    color: "white",
    value: "C"
  },
  2: {
    color: "black",
    value: {
      sharp: "C#",
      flat: "Db"
    }
  },
  3: {
    color: "white",
    value: "D"
  },
  4: {
    color: "black",
    value: {
      sharp: "D#",
      flat: "Eb"
    }
  },
  5: {
    color: "white",
    value: "E"
  },
  6: {
    color: "white",
    value: "F"
  },
  7: {
    color: "black",
    value: {
      sharp: "F#",
      flat: "Gb"
    }
  },
  8: {
    color: "white",
    value: "G"
  },
  9: {
    color: "black",
    value: {
      sharp: "G#",
      flat: "Ab"
    }
  },
  10: {
    color: "white",
    value: "A"
  },
  11: {
    color: "black",
    value: {
      sharp: "A#",
      flat: "Bb"
    }
  },
  12: {
    color: "white",
    value: "B"
  },
};

// const sharpOrder = [ "F", "C", "G", "D", "A", "E", "B" ];
// const flatOrder = [ "B", "E", "A", "D", "G", "C", "F" ];

const sharpKeys = [ "G", "D", "A", "E", "B", "F#", "C#" ];
const flatKeys = [ "F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb" ];

const scaleSteps = [2, 2, 1, 2, 2, 2, 1];
const chordNum = ["I", "ii", "iii", "IV", "V", "vi", "vii"];
const chordSequence = ["Maj7", "min7", "min7", "Maj7", "7", "min7", "m7b5"];

const buildKeyboard = (sharpOrFlat = "C") => {
  const keyboard = [];

  for (let i = 1; i <= 12; i++) {
    let key = pianoKeys[i];

    switch (sharpOrFlat) {
      case "sharp":
        if (typeof key.value === "object") keyboard.push(key.value.sharp);
        else keyboard.push(key.value);
        break;
      case "flat":
        if (typeof key.value === "object") keyboard.push(key.value.flat);
        else keyboard.push(key.value)
        break;
      case "C":
        keyboard.push(key.value);
        break;
      default:
        keyboard.push(key.value);
    }
  }

  return keyboard;
};

export { scaleSteps, chordSequence, chordNum, buildKeyboard, sharpKeys, flatKeys };
