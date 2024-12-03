const questionsAfrique = [
    {
        question : "Comment Churchill a-t-il surnommé l'Ouganda lors de son voyage là-bas en 1907",
        reponses : ["l'Eden africain", "le joyau de l'Afrique", "la perle de l'Afrique", "l'or noir de l'Afrique"],
        reponseCorrecte : "la perle de l'Afrique",
    },
    {
        question : "Quel lac fait frontière entre l'Ouganda, la Tanzanie et le Kenya ?",
        reponses : ["le lac Victoria", "le lac Tanganyika", "le Inle", "le lac Titicaca"],
        reponseCorrecte : "le lac Victoria",
        },
    {
        question : "Quelle est la ressource principale de l'Afrique ?",
        reponses :["le Nil", "le riz", "les ressources minières", "le pétrole"],
        reponseCorrecte : "les ressources minières",
    }
  ];

let questionToDisplay = 0;
let score = 0;
  
  function displayQuestionAfrique() {
      const questionDiv = document.querySelector(".question");
      questionDiv.innerHTML = "";
      // if(questionToDisplay < questionsAfrique.length) {
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
  
      if(questionToDisplay === questionsAfrique.length) {
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
      question.innerText = questionsAfrique[questionToDisplay].question;
      card.appendChild(question);
      //création du bouton
      questionsAfrique[questionToDisplay].answers.forEach((answer) => {
          
          const button = document.createElement("button");
          button.textContent = answer;
          card.appendChild(button);
          button.addEventListener("click",() => {
              if (button.textContent === questionsAfrique[questionToDisplay].correctAnswer) {
                  alert("Bonne réponse");
                  score++;
              
              } else {
                  alert("Mauvaise réponse");
              }
              questionToDisplay++;
              displayQuestion();
              })
      }); 
  };
  displayQuestionAfrique();
