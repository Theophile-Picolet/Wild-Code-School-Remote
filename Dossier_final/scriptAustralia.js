const logo = document.querySelector(".logo img");
logo.addEventListener("mouseover", function() {
    logo.style.scale =1.3;});
    logo.addEventListener("mouseleave", function() {
        logo.style.scale = 1;});
        
const questionsAustralia = [
      {
          question : "Quel est le vrai nom de l'Australie ?",
          answers : ["le Commonwealth of Australia", "L'Australie tout simplement", "Terra Australis", "The Northern territory of Australia"],
          correctAnswer : "le Commonwealth of Australia",
      },
      {
          question : "D'ou viennent les habitants originaires de l'Australie ?",
          answers : ["Les Aborigènes venant d'Asie", "Les Aborigènes venant d'Afrique", "Les Aborigènes venant des îles Fidjis", "Les Aborigène venant du Pacifique sud"],
          correctAnswer : "Les Aborigènes venant d'Asie",
          },
      {
          question : "Quel est le plat typique en Australie ?",
          answers :["Le barbecue", "La tourte au thon (Fish Pies)", "La tourte à la viande (Meat Pies)", "Le poke bowl"],
          correctAnswer : "La tourte à la viande (Meat Pies)",
      }
  ];
  
  
let questionToDisplay = 0;
let score = 0;

 
    
    function displayQuestionAustralia() {

    // si on veut rajouter un timer:
    // if(questionToDisplay < questionsAustralia.length) {
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

    if(questionToDisplay === questionsAustralia.length) {
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
    question.innerText = questionsAustralia[questionToDisplay].question;
    title.appendChild(question);
    //création du bouton
    reponse.innerHTML= "";
    questionsAustralia[questionToDisplay].answers.forEach((answer) => {
        
        const button = document.createElement("button");
        button.textContent = answer;
        reponse.appendChild(button);

        button.addEventListener("click",() => {
            if (button.textContent === questionsAustralia[questionToDisplay].correctAnswer) {
                alert("Bonne réponse");
                total.innerHTML = "";
                score++;
            
            } else {
                alert("Mauvaise réponse");
                total.innerHTML = "";
                
            }
            questionToDisplay++;
            displayQuestionAustralia();
            })
    }); 
};

displayQuestionAustralia();
  