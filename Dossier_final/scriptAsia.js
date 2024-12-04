const logo = document.querySelector(".logo img");
logo.addEventListener("mouseover", function() {
    logo.style.scale =1.3;});
    logo.addEventListener("mouseleave", function() {
        logo.style.scale = 1;});
        
const questionsAsia = [
    {
        question : "Quel est le plat préféré des Asiatiques ?",
        answers : ["La soupe ramen", "Le pad thaï", "Les nems", "Le riz cantonais"],
        correctAnswer : "La soupe ramen",
    },
    {
        question : "Qui est l’homme le plus riche d’Asie ?",
        answers : ["Mukesh Dhirubhai Ambani", "Xiao Zhan", "Li Yuchum", "Louis-San"],
        correctAnswer : "Mukesh Dhirubhai Ambani",
        },
    {
        question : "Combien de milliardaires l’Asie compte-t-il ?",
        answers :["951", "777", "536", "19"],
        correctAnswer : "951",
    }
];

let questionToDisplay = 0;
let score = 0;
function displayQuestionAsia() {

    if(questionToDisplay === questionsAsia.length) {
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
    question.innerText = questionsAsia[questionToDisplay].question;
    title.appendChild(question);
    //création du bouton
    reponse.innerHTML= "";
    questionsAsia[questionToDisplay].answers.forEach((answer) => {
        
        const button = document.createElement("button");
        button.textContent = answer;
        reponse.appendChild(button);

        button.addEventListener("click",() => {
            if (button.textContent === questionsAsia[questionToDisplay].correctAnswer) {
                alert("Bonne réponse");
                total.innerHTML = "";
                score++;
            
            } else {
                alert("Mauvaise réponse");
                total.innerHTML = "";
                
            }
            questionToDisplay++;
            displayQuestionAsia();
            })
    });
};

displayQuestionAsia();