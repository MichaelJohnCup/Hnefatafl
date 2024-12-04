const boardSize = 11;
const board = document.getElementById('board');
const boardState = [];

// Inicializace herní desky
for (let i = 0; i < boardSize; i++) {
    boardState[i] = [];
    for (let j = 0; j < boardSize; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = i;
        cell.dataset.col = j;

        board.appendChild(cell);
        boardState[i][j] = null;
    }
}

// Umístění krále, obránců a útočníků
function setupPieces() {
    const kingPosition = { row: 5, col: 5 };
    placePiece(kingPosition, 'king');

    const defenders = [
        { row: 4, col: 5 }, { row: 5, col: 4 }, { row: 5, col: 6 }, { row: 6, col: 5 },
        { row: 5, col: 3 }, { row: 5, col: 7 }, { row: 3, col: 5 }, { row: 7, col: 5 }
    ];

    defenders.forEach(pos => placePiece(pos, 'defender'));

    const attackers = [
        { row: 0, col: 3 }, { row: 0, col: 4 }, { row: 0, col: 5 }, { row: 0, col: 6 }, { row: 0, col: 7 },
        { row: 10, col: 3 }, { row: 10, col: 4 }, { row: 10, col: 5 }, { row: 10, col: 6 }, { row: 10, col: 7 },
        { row: 3, col: 0 }, { row: 4, col: 0 }, { row: 5, col: 0 }, { row: 6, col: 0 }, { row: 7, col: 0 },
        { row: 3, col: 10 }, { row: 4, col: 10 }, { row: 5, col: 10 }, { row: 6, col: 10 }, { row: 7, col: 10 }
    ];

    attackers.forEach(pos => placePiece(pos, 'attacker'));
}

// Funkce pro umístění figurky
function placePiece(position, type) {
    const cell = board.querySelector(`[data-row="${position.row}"][data-col="${position.col}"]`);
    cell.classList.add(type);
    boardState[position.row][position.col] = type;
}

// Spustit hru
setupPieces();