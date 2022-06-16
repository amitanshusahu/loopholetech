// Storage

//menu functionality
function openMenu() {
    let modal = document.getElementById("modal");
    modal.style = "height:100vh;";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.height = "0";
    }
  }
function closeMenu(){
  let modal = document.getElementById("modal");
  modal.style = "height:0;";
}
//slide show
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slide");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 6000); // Change image every 2 seconds
  }

