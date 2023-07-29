// toggle icon navbar


menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// scroll sections active link


let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset = sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top< offset+height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id+ ']').classList.add('active');
            });
        };
    });




// stycky navbar 


let header=document.querySelector('header');
header.classList.toggle('sticky', windows.scrollY >100);

// remove toggle iconn and navbar when click navbar link (scroll)

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// ====================================scroll reveal==========================================

ScrollReveal({
    // reset: true,
    distance: '80px', 
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, ..services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


// ====================================typed js==========================================

const typed=new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Competative Programmer'], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});





// ====================================skills==========================================





// id's of 3 buttons

var btn_skill1= document.getElementById("lang_func");
var btn_skill2= document.getElementById("dev_func");
var btn_skill3= document.getElementById("tools_func");




// classes of 3 skills

var elem1=document.querySelector(".languages");
var elem2=document.querySelector(".web_developement");
var elem3=document.querySelector(".dev_tool");



 


btn_skill1.addEventListener('click', ()=>{

    if(elem1.classList.contains("skills_main") == false){

        elem1.classList.add("skills_main");
    }
    elem2.classList.remove("skills_main");
    elem3.classList.remove("skills_main");

    btn_skill2.style.backgroundColor="#36454F";
    btn_skill1.style.backgroundColor="cyan";
    btn_skill3.style.backgroundColor="#36454F";


    btn_skill1.style.boxShadow="0 0 1rem var(--main-color)"
    btn_skill2.style.boxShadow="none"
    btn_skill3.style.boxShadow="none"

    elem1.style.display="block";
    elem1.style.display="grid";

    elem2.style.display="none";
    elem3.style.display="none";
})



btn_skill2.addEventListener('click', ()=>{

    if(elem2.classList.contains("skills_main") == false){

        elem2.classList.add("skills_main");
    }

    
    elem1.classList.remove("skills_main");
    elem3.classList.remove("skills_main");

    btn_skill1.style.backgroundColor="#36454F";
    btn_skill2.style.backgroundColor="cyan";
    btn_skill3.style.backgroundColor="#36454F";

    btn_skill2.style.boxShadow="0 0 1rem var(--main-color)"
    btn_skill1.style.boxShadow="none"
    btn_skill3.style.boxShadow="none"

elem2.style.display="block";
elem2.style.display="grid";

    elem1.style.display="none";
    elem3.style.display="none";
})



btn_skill3.addEventListener('click', ()=>{

    if(elem3.classList.contains("skills_main") == false){

        elem3.classList.add("skills_main");
    }

    var col="#303745";


 btn_skill1.style.backgroundColor="#36454F";

 btn_skill3.style.backgroundColor="cyan";
 btn_skill2.style.backgroundColor="#36454F";
 
 btn_skill3.style.boxShadow="0 0 1rem var(--main-color)"
 btn_skill1.style.boxShadow="none"
 btn_skill2.style.boxShadow="none"



    elem1.classList.remove("skills_main");
    elem2.classList.remove("skills_main");

    elem3.style.display="block";
    elem3.style.display="grid";

    elem1.style.display="none";
    elem2.style.display="none";
})


