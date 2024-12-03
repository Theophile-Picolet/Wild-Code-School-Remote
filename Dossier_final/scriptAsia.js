
function apparitionDivQuestionsAsia() {
    const blocPays = document.querySelector(".main");//prendre le bon nom de class
    // je récupère le bloc qui contient les pays OU le main
    console.log(blocPays);
    blocPays.addEventListener('click', function () {
        // j'écoute les événements sur blocPays
       blocPays.style.display = 'none';// je fais disparaitre mon bloc Pays en modifiant uniquement la ligne dislay de son css
        const blocQuestions = document.querySelector(".Quizz");//prendre le bon nom de class
        blocQuestions.style.display = 'flex';//je rends visible le blocQuestions en modifiant uniquement la ligne display de son CSS
        });
  };
  apparitionDivQuestionsAsia();




const questionsAsia = [
    {
        question : "Quel est le plat préféré des Asiatiques ?",
        answers : ["La soupe ramen", "Le pad thaï", "Les nems", "Le riz cantonais"],
        correctAnswer : "La soupe ramen",
    },
    {
        question : "Qui est l’homme le plus riche d’Asie ?:",
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
    const questionDiv = document.querySelector(".question");
    questionDiv.innerHTML = "";
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

    if(questionToDisplay === questionsAsia.length) {
    const card = document.createElement("div");
    card.classList.add("card");
    questionDiv.appendChild(card);
    let aside = document.createElement("div");
    questionDiv.appendChild(aside);
    let total = document.createElement("div");
    aside.appendChild(total);
    const finJeu = document.createElement("h2");
    card.innerText = "Fin du jeu"
    card.appendChild(finJeu);
    };

    const card = document.createElement("div");
    card.classList.add("card");
    questionDiv.appendChild(card);
    let aside = document.createElement("div");
    questionDiv.appendChild(aside);
    let clock = document.createElement("div");
    aside.appendChild(clock);
    let total = document.createElement("div");
    aside.appendChild(total);
    total.innerText = `${score} /3`;

    
 // création du H2
    const question = document.createElement("h2");
    question.innerText = questionsAsia[questionToDisplay].question;
    card.appendChild(question);
    //création du bouton
    questionsAsia[questionToDisplay].answers.forEach((answer) => {
        
        const button = document.createElement("button");
        button.textContent = answer;
        card.appendChild(button);
        button.addEventListener("click",() => {
            if (button.textContent === questionsAsia[questionToDisplay].correctAnswer) {
                alert("Bonne réponse");
                score++;
            
            } else {
                alert("Mauvaise réponse");
            }
            questionToDisplay++;
            displayQuestionAsia();
            })
    }); 
};
displayQuestionAsia();