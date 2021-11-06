var slideindexval = 1;
SHOWSLIDESOFPRODUCTS(slideindexval);

function PlusSlidePro(n) {
  SHOWSLIDESOFPRODUCTS(slideindexval += n);
}

function CURRENTSLIDE(n) {
  SHOWSLIDESOFPRODUCTS(slideindexval = n);
}

function SHOWSLIDESOFPRODUCTS(n) {
  var i;
  var slides = document.getElementsByClassName("MYSlides");
  var dots = document.getElementsByClassName("indicator");
  if (n > slides.length) {slideindexval = 1}    
  if (n < 1) {slideindexval = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideindexval-1].style.display = "block";  
  dots[slideindexval-1].className += " active";
}


//Sorting functionality

let SortPopularityBox = document.querySelector(".SortPopularityBox")

let DownArrows = document.querySelector(".DownArrows")
let UpArrows = document.querySelector(".UpArrows")
let OptionsForSortBy = document.querySelector(".OptionsForSortBy")

SortPopularityBox.addEventListener("click", ShowOptionsForSortBy)
//UpArrows.addEventListener("click" , HideOptionsForSortBy )
let flag = true
function ShowOptionsForSortBy() {
    if(flag == true) {
    OptionsForSortBy.style.display = "grid"
    DownArrows.style.display = "none"
    UpArrows.style.display = "block"
    flag = false
    }else {
        OptionsForSortBy.style.display = "none"
        DownArrows.style.display = "block"
        UpArrows.style.display = "none"
        flag = true
    }
}

// function HideOptionsForSortBy() {
//     OptionsForSortBy.style.display = "none"
//     DownArrows.style.display = "block"
//     UpArrows.style.display = "none"
// }   




