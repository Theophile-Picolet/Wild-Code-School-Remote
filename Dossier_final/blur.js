const sectioneurope = document.querySelector(".europe");
sectioneurope.addEventListener('mouseover', function(){
    sectioneurope.style.filter = 'blur(1px)';
    sectioneurope.style.scale = 1.1;
    sectioneurope.addEventListener('mouseleave', function (){
        sectioneurope.style.filter = "none";
        sectioneurope.style.scale = 1;})
});

const sectionafrica = document.querySelector(".africa");
sectionafrica.addEventListener('mouseover', function(){
    sectionafrica.style.filter = 'blur(1px)';
    sectionafrica.style.scale = 1.1;
    sectionafrica.addEventListener('mouseleave', function (){
        sectionafrica.style.filter = "none";
        sectionafrica.style.scale = 1;})
});

const sectionamerica = document.querySelector(".america");
sectionamerica.addEventListener('mouseover', function(){
    sectionamerica.style.filter = 'blur(1px)';
    sectionamerica.style.scale = 1.1;
    sectionamerica.addEventListener('mouseleave', function (){
    sectionamerica.style.filter = "none"; 
    sectionamerica.style.scale = 1;})
});

const sectionasia = document.querySelector(".asia");
sectionasia.addEventListener('mouseover', function(){
    sectionasia.style.filter = 'blur(1px)';
    sectionasia.style.scale = 1.1;
    sectionasia.addEventListener('mouseleave', function (){
    sectionasia.style.filter = "none"; 
    sectionasia.style.scale = 1;})
});

const sectionaustralia = document.querySelector(".australia");
sectionaustralia.addEventListener('mouseover', function(){
    sectionaustralia.style.filter = 'blur(1px)';
    sectionaustralia.style.scale = 1.1;
    sectionaustralia.addEventListener('mouseleave', function (){
    sectionaustralia.style.filter = "none"; 
    sectionaustralia.style.scale = 1;})
});