let myNavbar = document.getElementById("myNavbar");

// OnScroll event handler
function onScroll2() {

  // If scroll value is more than 0 - add class
  if (scrollY > 80) {
    myNavbar.classList.add("bg-black");
    myNavbar.classList.remove("bg-transparent");
  } else {
    myNavbar.classList.remove("bg-black");
    myNavbar.classList.add("bg-transparent");
  }
}

// Use the function
window.addEventListener("scroll", onScroll2);