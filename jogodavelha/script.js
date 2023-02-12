//amazena a refencia de cada celula do tabuleiro
const cells = Array.from(document.querySelectorAll('.board div'));
//variaveis para armazenar o jogador atual e o estado do jogo
let currentPlayer = 'X';
let gameOver = false;

//adicionar um evento de clique em casa celula
cells.forEach(cell => cell.addEventListener('click', handleClick));

//funcao paar lidar com o clique em um celula
function handleClick(){
    //verifica se a celula ja foi clicada ou se o jogo av=cabou
    if (this.innerHTML !== '' || gameOver) return;
    //atualiza a celula com o jogador atual
    this.innerHTML = currentPlayer;
    //verifique se ha um vencedor
    checkForWinner();
    //alterna o jogador atual
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

//matriz com as combinaçoes vencdoras
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//funcoes para verificar se ha um vencedor
function checkForWinner(){
    //verifica cada combinaoes
    winningCombinations.forEach(combination => {
        const [a, b, c] = combination;
        //virifique se as celulas correspondem ao jogador atual
        if (cells[a].innerHTML === currentPlayer && cells[b].innerHTML ===
            currentPlayer && cells[c].innerHTML === currentPlayer){
            //exibe uma mensagem de vitoria
            alert(`${currentPlayer} ganhou!`);
            //altera o estado do jogo para acabado
            gameOver = true;
            //remove os eventos de clique das celulas
            cells.forEach(cell => cell.removeEventListener('click', handleClick));
        }
    });
}



