const logo = document.querySelector(".logo img");
logo.addEventListener("mouseover", function() {
    logo.style.scale =1.3;});
    logo.addEventListener("mouseleave", function() {
        logo.style.scale = 1;});
        
const questionsAfrica = [
    {
        question : "Comment Churchill a-t-il surnommé l'Ouganda lors de son voyage là-bas en 1907 ?",
        answers : ["l'Eden africain", "le joyau de l'Afrique", "la perle de l'Afrique", "l'or noir de l'Afrique"],
        correctAnswer : "la perle de l'Afrique",
    },
    {
        question : "Quel lac fait frontière entre l'Ouganda, la Tanzanie et le Kenya ?",
        answers : ["le lac Victoria", "le lac Tanganyika", "le Inle", "le lac Titicaca"],
        correctAnswer : "le lac Victoria",
        },
    {
        question : "Quelle est la ressource principale de l'Afrique ?",
        answers :["le Nil", "le riz", "les ressources minières", "le pétrole"],
        correctAnswer : "les ressources minières",
    }
  ];

let questionToDisplay = 0;
let score = 0;
function displayQuestionAfrica() {

    if(questionToDisplay === questionsAfrica.length) {
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
        let end = document.querySelector(".end");
        end.style.width ="70ch";
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
    question.innerText = questionsAfrica[questionToDisplay].question;
    title.appendChild(question);
    //création du bouton
    reponse.innerHTML= "";
    questionsAfrica[questionToDisplay].answers.forEach((answer) => {
        
        const button = document.createElement("button");
        button.textContent = answer;
        reponse.appendChild(button);

        button.addEventListener("click",() => {
            if (button.textContent === questionsAfrica[questionToDisplay].correctAnswer) {
                alert("Bonne réponse");
                total.innerHTML = "";
                score++;
            
            } else {
                alert("Mauvaise réponse");
                total.innerHTML = "";
                
            }
            questionToDisplay++;
            displayQuestionAfrica();
            })
    });
};

displayQuestionAfrica();