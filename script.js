// ================================
// NSI Technologies Premium Website
// ================================

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });
});



// Navbar Background on Scroll

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(5,8,20,.95)";
        header.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(5,8,20,.55)";
        header.style.boxShadow="none";

    }

});



// Fade In Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

});



document.querySelectorAll(".about,.features,.products,.contact,.product-card,.feature-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});



// Product Hover Glow

document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 30px 60px rgba(0,150,255,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});



// Floating Hero Animation

const hero=document.querySelector(".hero-content");

let angle=0;

setInterval(()=>{

angle+=0.02;

hero.style.transform=`translateY(${Math.sin(angle)*6}px)`;

},40);



// Button Ripple Effect

document.querySelectorAll(".btn1,.btn2,.quote-btn,.about-btn,.contact-btn,.product-card a").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const rect=this.getBoundingClientRect();

circle.style.left=e.clientX-rect.left+"px";

circle.style.top=e.clientY-rect.top+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});



// Active Navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});



// Loading Animation

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});



// Console Message 😄

console.log("%cWelcome to NSI Technologies",

"font-size:24px;color:#00bfff;font-weight:bold;");
const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

}
