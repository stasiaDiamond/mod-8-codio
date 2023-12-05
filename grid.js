let position = 1; // The starting position of the grid
const gridSize = 100; // The total number of the grid cells



function createGrid() {
  // ~ for loop checks if i is less than gridSize
  for (let i = 1; i <= gridSize; i++) {
    // ~ if i is less than gridSize, we do the following:
    // ~ create a variable called div and set it to an HTML element "div" in the HTML document
    var div = document.createElement('div');
    // ~ common properties are always present when we .createElement()
    // ~ like: .id, .classList, .innerText, .innerHTML, .style, .parentElement, .children, .addEventListener, etc....
    // ~ so we use the .id property(key) to set the div's id to the string "n" plus whatever the current value of i is in the for loop
    div.id = 'n' + i;
    // ~ we then set the .innerText property(key) of div to whatever i is in the loop
    // ~ whatever we save .innerText as will be printed to the HTML doc 
    div.innerText = i;
    // ~ there must be an HTML element by the id of "target", bc we're pulling that into JS from the HTML document here
    // ~ we immediately .appendChild() to it
    // ~ we append the div we just created
    // ~ .appendChild() places the element at the end of its parent
    document.getElementById('target').appendChild(div);
  }
}


function move() {
  // specify a delay
  setTimeout(() => {
    // ~ after delay, if the position is greater than the gridSize return (aka END)
    if (position > gridSize) return;
    // if not, we'll use toggle() from below
    toggle(position);
    toggle(position - 1);
    position += 1;
    move();
  }, 100);
}


function toggle(position) {
  // ~ if the position is less than 1, return (aka END)
  // ~ i don't know why it returns 0.. unnecessary? could just say return?
  if (position < 1) return 0;
  // ~ creates a variable called name and sets it to the string "n" plus concatenating the position
  const name = 'n' + position;
  // ~ pulls in the HTML element by the id "name" that we just created above
  // ~ creates a variable called element and sets it to the id of the concatenated name string
  const element = document.getElementById(name);
  // ~ grabs the element we created above and grabs the .classList property from it
  // ~ common built-in Methods of .classList are .add(), .remove, and .contains()
  // ~ .toggle() switches an element on or off depending on if it existed already or not
  // ~ if it did exist, turn it off / if it didn't turn it on
  // ~ i can't access the css file either, but they must have a class called "on" that displays a certain color when the element is toggled on
  element.classList.toggle('on');
}
//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { createGrid, move, toggle };
}


/* -------CHALLENGES:

i can't access the HTML or CSS file thru codio... it's not fun coding and only being given a sliver of the whole picture

 */