# Affirmations
Date-based affirmations delivery website, with some fun easter eggs!

## Features
- Let's you set up a different affirmation text for different dates
- Let's you set change part of the affirmation on click
- Let's you hear an audio when you click the affirmation (thrice)
- Has a 'pink mode' that can be toggled with the 'P' key
- Has a 'disco mode' that can be toggled with the 'S' key
- Has a 'dance mode' that can be toggled with the 'D' key

## How to use
1. Clone the repository
2. Open `index.html` in your browser
3. Enjoy!

## How to customize
1. Open `script.js` in your code editor
2. Change the `affirmations` object by adding affirmations for different dates and wrapping the changeable parts in `<span>` tags with `id` and `class` attributes
3. Change the `alternateWords` object by listing what you'd want the changeable part for that date to say
4. Put the audio files in the `audio` folder in the format `audio{day}.mp3` where day is the day of the month

## Credits
ElevenLabs for the audio files (I simply downloaded random voice previews and used those. Please don't sue me.)