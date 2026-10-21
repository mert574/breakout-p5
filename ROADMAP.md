# Roadmap

## M2D migration

- Add a `package.json` to manage dependencies and provide development and build scripts.
- Replace p5.js rendering and p5.play sprites with [M2D](https://github.com/mert574/m2d-engine) scenes and game objects.
- Port paddle movement, ball collisions, brick removal and scoring.
- Preserve the existing game as a reference while checking the migrated version.
- Remove the p5 dependencies from the migrated game once it runs independently.

## Controls and game flow

- Add keyboard and touch controls alongside mouse input.
- Support different screen sizes while keeping pointer coordinates accurate.
- Add a main menu with start and control options.
- Add pause and level-complete screens.
- Add an end-game menu with the final score and options to restart or return to the main menu.

## Gameplay and presentation

- Redesign the surrounding page, including layout, typography, colors, score display and control instructions, for desktop and mobile.
- Add level layouts and difficulty progression.
- Improve paddle bounce control and ball-speed tuning.
- Add ball power-ups, including a strong ball that deals extra brick damage and multiball.
- Add an item-drop system: destroyed bricks can drop power-ups that activate when caught by the paddle, including ball upgrades and multiball.
- Refresh the visuals and add feedback for collisions and cleared bricks.
