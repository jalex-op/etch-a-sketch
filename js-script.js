// etch-a-sketch script
//
//


document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('grid-container');
  let resolution = 16; // Start with 16x16 resolution

  // Function to create squares
  function createGrid(resolution) {
    container.innerHTML = ''; // Clear the existing grid
    container.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${resolution}, 1fr)`;

    const totalSquares = resolution * resolution;

    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'black';
      });
      container.appendChild(square);
    }
  }

  // Initially create a 16x16 grid
  createGrid(resolution);

  // Function to reset the color of all squares
  function resetSquares() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.style.backgroundColor = 'rgb(194, 191, 180)'; // Original color
    });
  }

  // Event listener for the reset button
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetSquares);

  // Event listener for the resolution slider
  const slider = document.getElementById('resolution-slider');
  slider.addEventListener('input', function() {
    resolution = slider.value;
    createGrid(resolution); // Re-create the grid with the new resolution
  });
});
