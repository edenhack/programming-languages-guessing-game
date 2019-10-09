let score = 0;
let randomQuestion = Math.floor(Math.random() * 10) + 1;
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

function questionSelect() {
    if (randomQuestion <= (questionList.length - 1)) {
        document.querySelector("#question").innerHTML = questionList[randomQuestion].q;
    } else {
        document.querySelector("#question").innerHTML = "Game Over";
        document.querySelector("#score").innerHTML = `Your final score is ${score} out of ${questionList.length}`;
    }
}

function updateScore(){
    document.querySelector("#score").innerHTML = `Your score is: ${score}`;
}