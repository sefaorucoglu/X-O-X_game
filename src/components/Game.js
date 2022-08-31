import React,{useState}from "react";
import '../GameStyle.css';
import Square from "./Square";

const board=Array(9).fill(null);


function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}
const Game=() =>{
    const [turn,setTurn] =useState('X')
    const [counter,setCounter]=useState(1)
    function changeTurn (id){
        setCounter(counter + 1)

        setTurn(turn => turn==='X'? 'O':'X')
        board[id]=turn;
        if(calculateWinner(board) !==null ){
            alert("Kazanan Oyuncu : "+ calculateWinner(board));
        }else if (counter===9 ){alert("oyun berabere sonlandı")}
    }

    return <div id="game">
        <div className="turn">{"Bir Sonraki Hamle : "+turn}</div>
         <div className="row">
             <Square id={0} currentState={turn} changeTurn={changeTurn} />
             <Square id={1} currentState={turn} changeTurn={changeTurn} />
             <Square id={2} currentState={turn} changeTurn={changeTurn}/>
         </div>
        <div className="row">
            <Square id={3} currentState={turn} changeTurn={changeTurn} />
            <Square id={4} currentState={turn} changeTurn={changeTurn} />
            <Square id={5} currentState={turn} changeTurn={changeTurn} />
        </div>
        <div className="row">
            <Square id={6} currentState={turn} changeTurn={changeTurn} />
            <Square id={7} currentState={turn} changeTurn={changeTurn} />
            <Square id={8} currentState={turn} changeTurn={changeTurn} />
        </div>
    </div>


}
export default Game