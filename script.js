
// =========================
// BODY CARD CLICK
// =========================
function openCard(card){
    card.classList.toggle("active");
   }
   
   // =========================
   // GALLERY SCROLL
   // =========================
   function scrollGallery(id, direction){
   const gallery = document.getElementById(id);

   const scrollAmount = 300;

   gallery.scrollBy({
   left: direction * scrollAmount,
   behavior: "smooth"
 });
}
   
   // =========================
   // FULLSCREEN IMAGES (ALL PAGES)
   // =========================
   document.addEventListener("DOMContentLoaded", ()=>{
   
    const images = document.querySelectorAll("img");
   
    images.forEach(img=>{
     img.addEventListener("click", (e)=>{
   
       // iwas click sa nav or icons
       if(img.closest("nav")) return;
   
       // ONLY for gallery + progress images
       if(img.closest(".gallery") || img.closest(".card")){
         openModal(img.src);
       }
   
     });
    });
   
   });
   
   // =========================
   // MODAL
   // =========================
    function openModal(src){
    
      const old = document.querySelector(".modal");
      if(old) old.remove();
    
      const modal = document.createElement("div");
      modal.className = "modal";
      modal.style.display = "flex";
    
      modal.innerHTML = `<img src="${src}">`;
    
      modal.addEventListener("click", ()=> modal.remove());
    
      document.body.appendChild(modal);
    }

   // TYPING EFFECT
      const text = "DISCIPLINE TRANSFORMS YOU";
      let i = 0;

      function typing(){
      if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
      }
      }
      typing();
      // click expand
function openCard(card){
  card.classList.toggle("active");
}

// scroll reveal animation
const revealItems = document.querySelectorAll(".reveal");

function showOnScroll(){
  revealItems.forEach(el=>{
    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 80){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

function openCard(card){

    // GET DATA
    const img = card.querySelector("img").src;
    const title = card.dataset.title;
    const desc = card.dataset.desc;

    // CREATE POPUP
    const overlay = document.createElement("div");
    overlay.classList.add("popup");

    overlay.innerHTML = `

        <div class="popup-content">

            <span class="close">&times;</span>

            <img src="${img}">

            <h2>${title}</h2>

            <p>${desc}</p>

        </div>

    `;

    document.body.appendChild(overlay);

    // CLOSE BUTTON
    overlay.querySelector(".close").onclick = () => {
        overlay.remove();
    };

    // CLOSE OUTSIDE
    overlay.onclick = (e) => {
        if(e.target === overlay){
            overlay.remove();
        }
    };
}
function openBodyCard(card){

    const img = card.querySelector("img").src;

    const title = card.dataset.title;
    const desc = card.dataset.desc;
    const challenge = card.dataset.challenge;
    const focus = card.dataset.focus;
    const workouts = card.dataset.workouts;

    const overlay = document.createElement("div");
    overlay.classList.add("popup");

    overlay.innerHTML = `
        <div class="popup-content">

            <span class="close">&times;</span>

            <img src="${img}">

            <h2>${title}</h2>

            <p>${desc}</p>

            <p><b>Challenge:</b> ${challenge}</p>
            <p><b>Focus:</b> ${focus}</p>
            <p><b>Best workouts:</b> ${workouts}</p>

        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".close").onclick = () => overlay.remove();

    overlay.onclick = (e) => {
        if(e.target === overlay){
            overlay.remove();
        }
    };
}
function openMotivation(card){

    const img = card.querySelector("img").src;
    const text = card.dataset.text;

    const overlay = document.createElement("div");
    overlay.classList.add("popup");

    overlay.innerHTML = `
        <div class="popup-content">

            <span class="close">&times;</span>

            <img src="${img}">

            <p style="padding:20px;">${text}</p>

        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".close").onclick = () => overlay.remove();

    overlay.onclick = (e) => {
        if(e.target === overlay){
            overlay.remove();
        }
    };
}
// =========================
// 🎬 NETFLIX SCROLL
// =========================

function scrollNetflix(id, direction){

const row = document.getElementById(id);

row.scrollBy({
 left: direction * 400,
 behavior: "smooth"
});

}



// =========================
// 💀 VIDEO SYSTEM
// =========================

document.querySelectorAll('.ultimate-card').forEach(card=>{

const video =
card.querySelector('.movieVideo');

const playBtn =
card.querySelector('.playBtn');

const centerPlay =
card.querySelector('.playCenter');

const muteBtn =
card.querySelector('.muteBtn');

const fullBtn =
card.querySelector('.fullscreenBtn');

const likeBtn =
card.querySelector('.like-btn');

const likeCount =
card.querySelector('.like-count');

const commentInput =
card.querySelector('.comment-input');

const commentSend =
card.querySelector('.comment-send');

const commentsDiv =
card.querySelector('.comments');



// ▶ PLAY FUNCTION
function togglePlay(){

if(video.paused){

// pause all other videos
document.querySelectorAll('.movieVideo')
.forEach(v=>{

if(v !== video){
 v.pause();
}

});

video.play();

playBtn.innerHTML = "⏸";
centerPlay.innerHTML = "⏸";

}
else{

video.pause();

playBtn.innerHTML = "▶";
centerPlay.innerHTML = "▶";

}

}



// ▶ BUTTONS
playBtn.addEventListener('click', togglePlay);

centerPlay.addEventListener('click', togglePlay);



// 🔊 MUTE
muteBtn.addEventListener('click', ()=>{

video.muted = !video.muted;

muteBtn.innerHTML =
video.muted ? "🔇" : "🔊";

});



// ⛶ FULLSCREEN
fullBtn.addEventListener('click', (e)=>{

e.stopPropagation();

if(video.requestFullscreen){

video.requestFullscreen();

}
else if(video.webkitEnterFullscreen){

video.webkitEnterFullscreen();

}
else if(video.webkitRequestFullscreen){

video.webkitRequestFullscreen();

}

});



// ❤️ LIKE
let likes = 0;

likeBtn.addEventListener('click', ()=>{

likes++;

likeCount.innerHTML =
likes + " Likes ❤️";

likeBtn.style.transform =
"scale(1.2)";

setTimeout(()=>{

likeBtn.style.transform =
"scale(1)";

},200);

});



// 💬 COMMENTS
commentSend.addEventListener('click', ()=>{

const text =
commentInput.value.trim();

if(text !== ""){

const div =
document.createElement('div');

div.classList.add('single-comment');

div.innerHTML =
"💬 " + text;

commentsDiv.prepend(div);

commentInput.value = "";

}

});

});



// =========================
// 🔥 FADE-IN
// =========================

const fades =
document.querySelectorAll('.fade');

window.addEventListener('scroll', ()=>{

fades.forEach(fade=>{

const top =
fade.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

fade.classList.add('show');

}

});

});
