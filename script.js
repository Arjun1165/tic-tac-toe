let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let turnIndicator = document.getElementById('turn-indicator');
let message = document.getElementById('message');
let restartBtn = document.getElementById('restart-btn');

function makeMove(cellIndex) {
    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex] = currentPlayer;
        let symbol = document.getElementById(`symbol${cellIndex}`);
        symbol.innerHTML = `<img src="${currentPlayer === 'X' ? 'a_image.png' : 'o_image.png'}" alt="${currentPlayer}" />`;
        checkResult();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        turnIndicator.innerText = currentPlayer === 'X' ? "Player 1's Turn" : "Player 2's Turn";
        turnIndicator.style.display = "flex"; // Ensure turnIndicator is displayed as a flex container
        turnIndicator.style.alignItems = "center"; // Align the text vertically to the center
        turnIndicator.style.justifyContent = "center"; // Align the text horizontally to the center
    
    }
}




function checkResult() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    let winner = null;

    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            winner = board[a];
            break;
        }
    }

    if (winner) {
        gameActive = false;
        message.innerText = `${winner} wins!`;
        message.style.display = "flex"; // Ensure turnIndicator is displayed as a flex container
        message.style.alignItems = "center"; // Align the text vertically to the center
        message.style.justifyContent = "center"; // Align the text horizontally to the center
    
    } else if (!board.includes('')) {
        gameActive = false;
        message.innerText = "It's a draw!";
        message.style.display = "flex"; // Ensure turnIndicator is displayed as a flex container
        message.style.alignItems = "center"; // Align the text vertically to the center
        message.style.justifyContent = "center"; // Align the text horizontally to the center
    
    }
}

function restartGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    turnIndicator.innerText = "Player 1's Turn";
    message.innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
