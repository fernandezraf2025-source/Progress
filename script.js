
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
