const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    };

    return {
        getSign
    };
};

const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const setField = (index, sign) => {
        if (index > board.length) return;
        board[index] = sign;
    };

    const getField = (index) => {
        if (index > board.length) return;
        return board[index];
    };

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    };

    return {
        setField,
        getField,
        reset
    };
})();

const displayController = (() => {
    const fieldElements = document.querySelectorAll(".field");
    const messageElement = document.getElementById("message");
    const restartButton = document.getElementById("restart-button");

})();

const gameController = (() => {
    const playerX = Player("X");
    const playerO = Player("O");
    let round = 1;
    let isOver = false;

})();