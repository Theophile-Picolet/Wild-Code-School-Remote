function apparitionDivQuestions() {
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
  apparitionDivQuestions();
  
  const questionsAustralia = [
      {
          question : "Quel est le vrai nom de l'Australie ?",
          answers : ["le Commonwealth of Australia", "L'Australie tout simplement", "Terra Australis"],
          correctAnswer : "le Commonwealth of Australia",
      },
      {
          question : "D'ou viennent les habitants originaires de l'Australie ?",
          answers : ["Les Aborigènes venant d'Asie", "Les Aborigènes venant d'Afrique", "Les Aborigènes venant des îles Fidjis"],
          correctAnswer : "Les Aborigènes venant d'Asie",
          },
      {
          question : "Quel est le plat typique en Australie ?",
          answers :["Le barbecue", "La tourte au thon (Fish Pies)", "La tourte à la viande (Meat Pies)"],
          correctAnswer : "La tourte à la viande (Meat Pies)",
      }
  ];
  
  
  let questionToDisplay = 0;
  let score = 0;
  
   
      
      function displayQuestion() {
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
  
      if(questionToDisplay === questionsAustralia.length) {
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
      question.innerText = questionsAustralia[questionToDisplay].question;
      card.appendChild(question);
      //création du bouton
      questionsAustralia[questionToDisplay].answers.forEach((answer) => {
          
          const button = document.createElement("button");
          button.textContent = answer;
          card.appendChild(button);
          button.addEventListener("click",() => {
              if (button.textContent === questionsAustralia[questionToDisplay].correctAnswer) {
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
  displayQuestion();
  