// Get the board container
const board = document.getElementById('chessBoard');

// Define an array for chessboard squares
const squares = [];

// Loop to create 64 squares (8x8 board)
for (let i = 0; i < 8; i++) {
    // Create a row array
    squares[i] = [];

    for (let j = 0; j < 8; j++) {
        // Create a square element
        const square = document.createElement('div');

        // Add class 'square' to each square
        square.className = 'square';

        // Set background color based on row and column index
        if ((i + j) % 2 === 0) {
            square.classList.add('light'); // Light square color
        } else {
            square.classList.add('dark'); // Dark square color
        }

        // Append the square to the board
        board.appendChild(square);

        // Add square to the row array
        squares[i][j] = square;
    }
}
