const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>150);
})

let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}


function showDetails(imageSrc, price) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalPrice").textContent = price;
}

function addToCart() {
    // Ajoutez ici la logique pour ajouter l'article au panier
    alert("Article ajouté au panier !");
}