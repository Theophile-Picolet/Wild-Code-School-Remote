
// function apparitionDivQuestionsAsia() {
//   const blocPays = document.querySelector(".main");//prendre le bon nom de class
//   // je récupère le bloc qui contient les pays OU le main
//   console.log(blocPays);
//   blocPays.addEventListener('click', function () {
//       // j'écoute les événements sur blocPays
//      blocPays.style.display = 'none';// je fais disparaitre mon bloc Pays en modifiant uniquement la ligne dislay de son css
//       const blocQuestions = document.querySelector(".Quizz");//prendre le bon nom de class
//       blocQuestions.style.display = 'flex';//je rends visible le blocQuestions en modifiant uniquement la ligne display de son CSS
//       });
// };
// apparitionDivQuestionsAmerica();




const questionsAmerica = [
  {
      question : "Quel a été le meilleur président de toute l’histoire des Etats-Unis ?",
      answers : ["John Fitzgerald Kennedy", "Harry S. Truman", "Abraham Lincoln", "Donald Trump"],
      correctAnswer : "Abraham Lincoln.",
  },
  {
      question : "Qui sont les deux premiers explorateurs à avoir traversé les Etats-Unis?",
      answers : ["Bonnie et Clyde", "Christophe Colomb et Juan Ponce de Leon", "Calamity Jane et Buffalo Bill", " Lewis et Clark"],
      correctAnswer : "Lewis et Clark",
      },
  {
      question : "Que signifie le sigle NFL ?",
      answers :["National Federal League", "North America Football League", "National Football League", " North America Football Legion"],
      correctAnswer : "National Football League.",
  }
];

let questionToDisplay = 0;
let score = 0;


function displayQuestionAmerica() {
    const questionDiv = document.querySelector(".question");
    // questionDiv.innerHTML = "";
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

    // if(questionToDisplay === questionsAmerica.length) {
    // const card = document.createElement("div");
    // card.classList.add("card");
    // questionDiv.appendChild(card);
    // let aside = document.createElement("div");
    // questionDiv.appendChild(aside);
    // let total = document.createElement("div");
    // aside.appendChild(total);
    // const finJeu = document.createElement("h2");
    // card.innerText = "Fin du jeu"
    // card.appendChild(finJeu);
    // };

    let reponse = document.querySelector(".reponse");
    let title = document.querySelector(".title");
    let aside = document.querySelector(".aside");
    let clock = document.createElement("div");
    aside.appendChild(clock);
    let total = document.createElement("div");
    aside.appendChild(total);
    total.innerText = `${score} /3`;

    title.innerHTML = "";
 // création du H2
    const question = document.createElement("h2");
    question.innerText = questionsAmerica[questionToDisplay].question;
    card.appendChild(question);
    //création du bouton
    reponse.innerHTML = "";
    questionsAmerica[questionToDisplay].answers.forEach((answer) => {
        
        const button = document.createElement("button");
        button.textContent = answer;
        reponse.appendChild(button);
        button.addEventListener("click",() => {
            if (button.textContent === questionsAmerica[questionToDisplay].correctAnswer) {
                alert("Bonne réponse");
                total.innerHTML = "";
                score++;
            
            } else {
                alert("Mauvaise réponse");
                total.innerHTML = "";
            }
            questionToDisplay++;
            displayQuestionAmerica();
            })
    }); 
};
displayQuestionAmerica();