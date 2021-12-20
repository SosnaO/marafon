const board = document.querySelector('#board');

const colors = [
  '#800000',
  '#808000',
  '#0000ff',
  '#ffff00',
  '#ff00ff',
  '#ffffff',
  '#000080',
  '#dc143c',
];

const SQUARES_NUMBER = 500;
for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));
  board.append(square);
}

function setColor(element) {
  const color = getRandowColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}
function getRandowColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
