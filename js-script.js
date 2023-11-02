// etch-a-sketch script
//
//


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('grid-container');
    const totalSquares = 16 * 16;
  
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      // Add any additional styles or attributes to 'square' as needed
      container.appendChild(square);
    }
  });