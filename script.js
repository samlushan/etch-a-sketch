const container = document.querySelector('.container');
const resizeButton = document.querySelector('#resize');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create a grid of size N x N
function createGrid(gridSize) {
  container.innerHTML = ''; // Clear existing squares
  container.style.setProperty('--grid-size', gridSize);

  const totalSquares = gridSize * gridSize;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

// Initial grid
createGrid(16);

// Resize button logic
resizeButton.addEventListener('click', () => {
  const newSize = prompt('Enter new grid size (e.g., 16 for 16x16):');
  const newGridSize = parseInt(newSize, 10);
  if (isNaN(newGridSize) || newGridSize <= 0) {
    alert('Please enter a valid number greater than 0.');
    return;
  }
  createGrid(newGridSize);
});
