function sidetoggle() {
  toggle = document.getElementById("side-toggle");
  overlay = document.getElementById("overlay");

  if (toggle.style.width === "250px") {
    toggle.style.width = "0";
  } else {
    toggle.style.width = "250px";
  }
}
function closeSidebar() {
  document.getElementById("side-toggle").style.width = "0";
}

function fade(){
  ele = document.querySelectorAll(
    ".maindiv2, .maindiv2-div2-div2, .maindiv2-div1-div1-span, .maindiv3-div1-span, .maindiv3, .maindiv3-div1-span, .maindiv4, .maindiv4-div1_div2, .maindiv4-div2_div1, .maindiv5"); 
  winht = window.innerHeight; 
  ele.forEach(el => {
    pos = el.getBoundingClientRect().top; 
    if (pos <= winht - 100){
      el.classList.add("show"); 
    }
  });
}
document.addEventListener("scroll", fade); 
window.addEventListener("load", fade)


function fadeSkills() {
  const section = document.querySelector(".maindiv3-div3");
  const windowHeight = window.innerHeight;
  const position = section.getBoundingClientRect().top;

  if (position < windowHeight - 150) {
    const spans = section.querySelectorAll("span");
    spans.forEach((span, i) => {
      setTimeout(() => {
        span.classList.add("show");
      }, i * 120);
    });
  }
}

window.addEventListener("scroll", fadeSkills);
window.addEventListener("load", fadeSkills);

function scrollslider(direct){
  slide1 = document.getElementById('slide'); 
  scrollamt = 300; 
  slide1.scrollBy({
    left: direct * scrollamt, 
    behavior : 'smooth'
  });
}

btn = document.getElementById("audio1"); 
sund = document.getElementById("sound1"); 
btn.addEventListener("click", ()=>{
  sund.currentTime = 0; 
  sund.play();
});
btn = document.getElementById("audio2"); 
sund = document.getElementById("sound2"); 
btn.addEventListener("click", ()=>{
  sund.currentTime = 0; 
  sund.play();
});

function ab(){
  sec = document.getElementById("about");
  if (sec) {
    sec.scrollIntoView({behavior : 'smooth'});
    document.getElementById("side-toggle").style.width = "0";
  }
}
function wrks(){
  sec1 = document.getElementById("works");
  if (sec1){
    sec1.scrollIntoView({behavior : 'smooth'});
    document.getElementById("side-toggle").style.width = "0";
  }
}
function cont(){
  sec2 = document.getElementById("cont"); 
  if (sec2){
    sec2.scrollIntoView({behavior : 'smooth'});
    document.getElementById("side-toggle").style.width = "0";
  }
}