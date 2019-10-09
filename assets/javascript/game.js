let score = 0;
let randomQNum=0;
const questionList = [{
        q: "java",
        used: "f"
    },
    {
        q: "javascript",
        used: "f"
    },
    {
        q: "ruby",
        used: "f"
    },
    {
        q: "c++",
        used: "f"
    },
    {
        q: "c#",
        used: "f"
    },
    {
        q: "python",
        used: "f"
    },
    {
        q: "html",
        used: "f"
    },
    {
        q: "css",
        used: "f"
    },
    {
        q: "sql",
        used: "f"
    },
    {
        q: "php",
        used: "f"
    },
];

function randomQuestion(){
     randomQNum = Math.floor(Math.random() * 10);
}

function questionSelect() {
    if (questionList[randomQNum].used="f") {
        document.querySelector("#question").innerHTML = questionList[randomQNum].q;
        questionList[randomQNum].used="t";
    } else {
        document.querySelector("#question").innerHTML = "Game Over";
        document.querySelector("#score").innerHTML = `Your final score is ${score} out of ${questionList.length}`;
    }
}

function updateScore(){
    document.querySelector("#score").innerHTML = `Your score is: ${score}`;
}

//Main Game
//===================================================================

//call starter functions
randomQuestion();
questionSelect();
updateScore();

