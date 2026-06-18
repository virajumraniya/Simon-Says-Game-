let userSeq = [];
let gameSeq = [];

let started = false;
let level = 0;

let  btns=["red","yellow","green","blue"];

let h2=document.querySelector("h2");

document.addEventListener('keypress', function() {
    if ( started === false ) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function randomFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },300);
}

function customFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randomIndex = Math.floor(Math.random() * 4) ;
    let randomColor= btns[randomIndex];
    let randomBtn= document.querySelector(`.${randomColor}`);
    // console.log(randomBtn);
    // console.log(randomIndex);
    // console.log(randomColor);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    randomFlash(randomBtn);
}

function checkAns(idx){
    // console.log(gameSeq[idx]);
    // console.log(userSeq[idx]);
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start again...`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },1000);
        reset();
    }
}

function btnPressed(){
    let btn = this;
    customFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPressed);
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}