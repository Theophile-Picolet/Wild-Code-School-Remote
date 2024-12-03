
const questionsEurope = [
    {
        question : "Quelle expression est consacrée par le traité de Maastricht ?",
        answers : ["la culture eurasiatique", "la diversité culturelle", "la culture générale", "les droits de l'Homme"],
        correctAnswer : "la diversité culturelle",
    },
    {
        question : "Où l'Union européenne mène t-elle des actions militaires ?",
        answers : ["au Pakistan ", "en Macédoine du Nord ", "en Ukraine ", "en Bosnie "],
        correctAnswer : "en Ukraine ",
        },
    {
        question : "Quelle est la personne la plus riche d'Europe ?",
        answers :["Volodymyr Zelenski", "Bernard Arnault", "Emmanuel Macron", "JuL"],
        correctAnswer : "Bernard Arnault",
    }
];


let questionToDisplay = 0;
let score = 0;

 
    
    function displayQuestionEurope() {

    // si on veut rajouter un timer:
    // if(questionToDisplay < questionsEurope.length) {
    // function timer () {
    //     let time = 4;
    //     setInterval(() => {
    //         clock.innerText = `${time}`
    //         time = time <= -1 ? 0 : time -1;
    //         if (time === -1) {    
    //             questionToDisplay++;
    //             displayQuestion();
    //              time = 4;
    //         }
    // }, 1000)}};
    // timer();

    if(questionToDisplay === questionsEurope.length) {
        let quizz = document.querySelector(".Quizz");
        quizz.style.display="none"; 
        let message = document.querySelector(".titleEnd");
        const question = document.createElement("h2");
        question.innerText = "End Game";
        message.appendChild(question);
        let messageScoreFinal = document.querySelector(".messageScoreFinal");
        messageScoreFinal.innerText = "Votre score est de :";
        let scoreFinal= document.querySelector(".scorefinal");
        scoreFinal.innerText = `${score} /3`;
    };

  
    let reponse = document.querySelector(".reponse");
    let title = document.querySelector(".title");
    let aside = document.querySelector(".aside");
    // let clock = document.createElement("div");
    // aside.appendChild(clock);
    let total = document.querySelector(".score");
    aside.appendChild(total);
    total.innerText = `${score} /3`;

    title.innerHTML = "";
 // création du H2
    const question = document.createElement("h2");
    question.innerText = questionsEurope[questionToDisplay].question;
    title.appendChild(question);
    //création du bouton
    reponse.innerHTML= "";
    questionsEurope[questionToDisplay].answers.forEach((answer) => {
        
        const button = document.createElement("button");
        button.textContent = answer;
        reponse.appendChild(button);

        button.addEventListener("click",() => {
            if (button.textContent === questionsEurope[questionToDisplay].correctAnswer) {
                alert("Bonne réponse");
                total.innerHTML = "";
                score++;
            
            } else {
                alert("Mauvaise réponse");
                total.innerHTML = "";
                
            }
            questionToDisplay++;
            displayQuestionEurope();
            })
    }); 
};

displayQuestionEurope();