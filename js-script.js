// etch-a-sketch script
//
//


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('grid-container');
    const totalSquares = 16 * 16;
  
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'black';
      });
      container.appendChild(square);
    }
  
    // Function to reset the color of all squares
    function resetSquares() {
      const squares = document.querySelectorAll('.square');
      squares.forEach(square => {
        square.style.backgroundColor = '#f0f0f0'; // Original color
      });
    }
  
    // Event listener for the reset button
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetSquares);
  });
