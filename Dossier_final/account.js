const accountButton = document.querySelector(".account");
const welcome = document.querySelector(".user");
const Quizz = document.querySelector(".Quizz");
accountButton.addEventListener('mouseover', function(){
    accountButton.style.filter = 'blur(0.5px)';
    accountButton.style.scale = 1.1;
    accountButton.addEventListener('mouseleave', function (){
        accountButton.style.filter = "none";
        accountButton.style.scale = 1;})
    })
accountButton.addEventListener("click", function () {
    userName = prompt("Entre ton pseudo");
    welcome.textContent = userName?`Bienvenue ${userName} !!`: `Bienvenue !!`  ;
});