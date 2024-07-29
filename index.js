let ganeSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let stared = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
  if (stared == false) {
    // console.log("start");
    stared = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 100);
}

function levelUp() {
  userSeq=[]
  level++;
  h2.innerText = `Level  ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);

  ganeSeq.push(randColor);
  // console.log(ganeSeq);
  gameFlash(randBtn);
}

function checkAns(idx){
  // console.log("current level: " ,level);

  if(userSeq[idx]=== ganeSeq[idx]){
     if(userSeq.length === ganeSeq.length){
       setTimeout(levelUp,750);
     }
  }else{
    h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to continue`
    document.querySelector("body").style.backgroundColor ="red"
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor ="white"
    },150)
    reset()
  }
}

function btnPress() {
  // console.log(this);
  let btn=this
  userFlash(btn)

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");

for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}


function reset(){
  stared = false;
  ganeSeq=[]
  userSeq=[]
  level = 0;
  // h2.innerText=`Level ${level}`
}