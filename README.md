PROJECT Etch-a-Sketch
The Odin Project Foundation course

In this project, you’re going to build a browser version of something between a sketchpad and an Etch-A-Sketch.

1. Create a webpage with a 16x16 grid of square divs.
    * Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
    * It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.
    * Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!
    * Be careful with borders and margins, as they can adjust the size of the squares!

2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

3. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

Extra credit
Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.
    * Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
    * Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
