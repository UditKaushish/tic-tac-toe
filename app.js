let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let boxO = true;
let count=0;
const winPatterns = [
    [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]
const resetGame = () =>{
    boxO = true;
    count = 0;
    enablebox();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(boxO)
        {
            box.innerText = "O";
            boxO = false;
        }
        else{
            box.innerText = "X";
            boxO = true;
        }
        box.disabled  = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const disableboxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};
const enablebox = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations the Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos2==pos3)
            {
                console.log("winner");
                showWinner(pos1);
                return true;
            }
        }
    }

}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);