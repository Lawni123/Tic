let boxes=document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turno=true;
let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let resetGame =()=> {
    turno=true;
    boxenable();
    msgContainer.classList.add("hide");
    reset.innerText="Reset Game";
}
let boxenable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
reset.addEventListener("click",resetGame);

let boxDisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let winnerAnnounce=(player)=>{
    boxDisable();
    msg.innerText=`Congrats, Player ${player} is Winner`;
    msgContainer.classList.remove("hide");
    reset.innerText="New Game";
}
boxes.forEach( (box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
        autoReset();
    })
});

let checkWinner=()=>{
for(let pattern of winPattern){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            winnerAnnounce(pos1);
        }
    }
}
};
let autoReset=()=>{
    let isEmpty;
    for(let box of boxes){
        if(box.innerText===""){
            isEmpty=true;
            break;
        }else{
            isEmpty=false;
        }
    }
    if(isEmpty===false){
        resetGame();
    }
}
