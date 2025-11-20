# Indonesia Light Rail Transit Passenger Information Display

(A Work in Progress project)

From:

./source.mp4

Into:

https://kahfi.dev/showcase/idn-light-rail-transit-pid/

## Decisions

### Tools

- Storybook for viewing each screen,
- React (because I want to use styled-components),
- styled-components for styling every component,
- Simple [CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) from Josh W Comeau.
- Following Mark Otto (creator of Bootstrap) [standards](https://codeguide.co/) for the best of us!

### Font

The original design uses Circular STD typeface / font, with Book, Book Italic, Bold, and Bold Italic variants, which license can be purchased in https://lineto.com/typefaces/circular/. I use DM Sans from Google Fonts instead, which has quite similar style with the original:

Thin ~ DM Sans Light
Book ~ DM Sans Medium
Medium ~ DM Sans Semi Bold
Bold ~ DM Sans Bold

## Approach

- I use Screen Ruler from Microsoft PowerToys to get the sense of distance between objects.
- Inkscape for recreating Icons.
- Minimal use of Gimp software
  - To rotate some screenshots of the video, so it is easier to work with the Screen Ruler.

## How to Edit

1. Fork the repository.
2. Install dependencies with `yarn install` or `yarn workspace idn-light-rail-transit-pid install` depends on your CLI working directory location.
3. Serve the web with `yarn start` or `yarn workspace idn-light-rail-transit-pid start`
4. Please read ./KAI Commuter Visual Guideline.pdf before making any changes.
