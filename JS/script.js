console.log("Welcome to MyTicTacToe");
let music = new Audio("../static/music.mp3");
let ting = new Audio("../static/ting.mp3");
let gameover = new Audio("../static/gameover.mp3");
let turn = "X";
let isGameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X"?"O": "X"
}

// Function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,5,5,0,20],
        [3,4,5,5,15,0,20],
        [6,7,8,5,25,0,20],
        [0,3,6,5,5,90,20],
        [1,4,7,15,5,90,20],
        [2,5,8,25,5,90,20],
        [0,4,8,5,5,45,28.28],
        [2,4,6,5,25,-45,28.28]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won."
            gameover.play();
            isGameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "13vw";
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.margin = "3.25vw auto 0.98vw auto";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = `${e[6]}vw`;
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
console.log(boxes);
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            ting.play();
            turn = changeTurn();
            checkWin();
            if(!isGameover){
                document.getElementsByClassName("info")[0].innerHTML = "Turn for:  " + turn;
            }
        }
    })
})

// Reset Button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    isGameover = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for: " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.margin = "auto";
    document.querySelector(".line").style.width = "0";
})