// cSpell: disable
// Try `eslint-config-airbnb` for formatting
// Non-react:  https://www.npmjs.com/package/eslint-config-airbnb-base

import { buildKeyboard } from "./piano.mjs";

const buildCircleOf = degree => {
  const keyboard = buildKeyboard();
  const keys = ["C"];
  let steps;

  switch(degree) {
    case "Fourths":
      steps = 5;

      for (let i = steps; true; i += steps) {
        if (i > keyboard.length - 1) {
          i = i - keyboard.length;

          if (keyboard[i] == "C") break;
        }

        if (typeof keyboard[i] === "object") {
          keys.push(keyboard[i].flat);
        } else {
          if (keyboard[i] === "B") keys.push("Cb")
          else keys.push(keyboard[i]);
        }
      }
      break;
    case "Fifths":
      let iteration = 0;
      steps = 7;

      for (let i = steps; true; i += steps) {
        if (i > keyboard.length - 1) {
          i = i - keyboard.length;

          if (keyboard[i] == "C") break;
        }

        if (typeof keyboard[i] === "object" && iteration > 6) {
          keys.push(keyboard[i].flat);
        } else if (typeof keyboard[i] === "object") {
          keys.push(keyboard[i].sharp);
        } else {
          keys.push(keyboard[i]);
        }

        iteration++;
      }
      break;
  }
  
  const circleOf = keys.join(", ");
  return circleOf;
};

export { buildCircleOf };
