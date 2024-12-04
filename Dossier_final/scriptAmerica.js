const logo = document.querySelector(".logo img");
logo.addEventListener("mouseover", function() {
    logo.style.scale =1.3;});
    logo.addEventListener("mouseleave", function() {
        logo.style.scale = 1;});
        
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

    // si on veut rajouter un timer:
    // if(questionToDisplay < questionsAmerica.length) {
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

    if(questionToDisplay === questionsAmerica.length) {
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
    question.innerText = questionsAmerica[questionToDisplay].question;
    title.appendChild(question);
    //création du bouton
    reponse.innerHTML= "";
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