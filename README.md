# Music Theory Helper

This a simple MVP meant to be an aid in thinking through music theory in any key. The user has five different display options (described below under [Usage](#usage)) to choose from, and each will display the corresponding output in the terminal.

The main idea is to choose a music key you'd like to study in, then select what you'd like to output:

**Within the selected key**
* Scale
* Chord(s)
* Chord progression

**Helpers**
* A visual of a piano keyboard
* The Circle of Fourths or Fifths

## Usage
The entry point of the app is `display.mjs` where you can make selections about what you'd like to output to the terminal. Displaying output is simple:

1. Uncomment any function call within the "DISPLAY OPTIONS" comment block at the bottom of the file
2. Fill in the arguments as needed (see below under [Display Function Descriptions](#display-function-descriptions))
3. In the terminal, execute the file: `node display.mjs`.

The beauty of this simplistic format is that you can use each function call as many times as you'd like in any order to display the study tools in a way that works best for you theory goals.

## Display Function Descriptions
* `displayKeyboard()`
    1. Outputs a visual of a piano keyboard
    2. Takes no arguments
* `displayScale(key)`
    1. Outputs the scale of the selected key (and relative minor) with correct sharps/flats
    2. Takes a music `key` argument in string format, capital letter: `"C"`, `"Db"`, `"F#"`
* `displayChord(key, numOrNote)`
    1. Outputs notes of the chord based on the music key and name/number of the chord selected
    2. First argument is a music `key` argument in string format, capital letter: `"C"`, `"Db"`, `"F#"`
    3. Second argument (`numOrNote`) is either a string of the chord name or integer of the chord number with the scale.
        * Ex: with the key of "C", you can enter in `"E"` or `3` to get the third chord of the E-scale
* `displayProgression(key, ...numsOrNotes)`
    1. Outputs the scale of the selected key (and relative minor) and a chord progression based on the music key and name/number of the chord(s) selected
    2. First argument is a music `key` argument in string format, capital letter: `"C"`, `"Db"`, `"F#"`
    3. Second argument (`numOrNote`) is either a string of the chord name or integer of the chord number with the scale.
        * Example with the key of `"C"`: you can enter in `"E"` or `3` to get the third chord of the "C" scale
    4. You can enter in any amount of one or more chords to display as a progression
        * Example with the key of `"C"`: you can enter in `1, 6, 2, 5` or `2, 5, 1` or `"C", "A", "D", "G"` or `"D", "G", "C"` etc.
* `displayCircleOf(degree)`
    1. Outputs the chord progression of the key chosen. In the progression, it attempts to switch to sharps/flats based on common music key names.
    2. Takes `degree` argument of the desired circle progression in string format: `"Fourths"` or `"Fifths"`

## Example Usage
If you want to study the 2, 5, 1 chord progression in the key of "C" you could use this combination of display functions:

* `displayKeyboard()`
* `displayProgression("C", 2, 5, 1)`

This gives a visual of a piano keyboard to aid in where the notes are and how they relate to each other. It also shows the "C" scale and 2, 5, 1 chords with the notes that build each chord. Here's the output:

```
|  |    | |    | |    |   |  |    | |    |   |  |    | |    | |    |   |
|  |    | |    | |    |   |  |    | |    |   |  |    | |    | |    |   |
|  | Gb | | Ab | | Bb |   |  | Db | | Eb |   |  | Gb | | Ab | | Bb |   |
|  | F# | | G# | | A# |   |  | C# | | D# |   |  | F# | | G# | | A# |   |
|  |    | |    | |    |   |  |    | |    |   |  |    | |    | |    |   |
|  |____| |____| |____|   |  |____| |____|   |  |____| |____| |____|   |
|     |      |      |     |     |      |     |     |      |      |     |
|     |      |      |     |     |      |     |     |      |      |     |
|  F  |  G   |  A   |  B  |  C  |  D   |  E  |  F  |  G   |  A   |  B  |
|     |      |      |     |     |      |     |     |      |      |     |
|_____|______|______|_____|_____|______|_____|_____|______|______|_____|
  
  Key: C (Amin7)
Scale: C, D, E, F, G, A, B

Dmin7 (ii)
D, F, A, C

G7 (V)
G, B, D, F

CMaj7 (I)
C, E, G, B
```
