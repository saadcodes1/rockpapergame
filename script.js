const rockbtn = document.getElementById("rock-btn");
const paperbtn = document.getElementById("paper-btn");
const scissorbtn = document.getElementById("scissor-btn");

const userchoice = document.getElementById("user-choice");
const computerchoice = document.getElementById("computer-choice");
const result = document.getElementById("result");


const userscore = document.getElementById("user-score");
const computerscore = document.getElementById("computer-score");

let cmpscore = 0 ;
let usrscore = 0 ;

const increment = (string) => {
    if(string == "computer") {
        cmpscore++ ;
        computerscore.innerHTML = cmpscore ;
    }
    else if(string == "user") {
        usrscore++ ;
        userscore.innerHTML = usrscore ;
    }

    }


const rungame = (name) => {
    const userinput = name ; 
    const values = ["rock","paper","scissor"];

    const randomnumber = Math.floor(Math.random() * 3);

    const computerinput = values [ randomnumber]

    userchoice.innerHTML = "you picked " + userinput
    computerchoice.innerHTML = " computer picked " + computerinput

    if(userinput== "rock") {
        if (computerinput== "rock"){
            result.innerHTML = "Draw";
        }
        else if(computerinput== "paper") {
            result.innerHTML = "computer wins";
            increment ("computer");
        }
        else{
            result.innerHTML = "You Win";
            increment ("user");
        }
    }    

    else if (userinput== "paper") {
        if (computerinput== "paper"){
            result.innerHTML = "Draw";
        }
        else if(computerinput== "scissor") {
            result.innerHTML = "computer wins";
            increment ("computer");
        }
        else{
            result.innerHTML = "You Win";
            increment ("user");
        }    
    }

    else if (userinput== "scissor") {
        if (computerinput== "scissor"){
            result.innerHTML = "Draw";
        }
        else if(computerinput== "rock") {
            result.innerHTML = "computer wins";
            increment ("computer");
        }
        else{
            result.innerHTML = "You Win";
            increment ("user");
        }    
    }
}

rockbtn.addEventListener ("click", () => {
    rungame("rock");
})

paperbtn.addEventListener ("click", () => {
    rungame("paper");
})

scissorbtn.addEventListener ("click", () => {
    rungame("scissor");
})
