  
window.addEventListener("load", function(){
  const button = document.querySelector("a")
  const textToShow = document.querySelector("span")
  textToShow.style.display = "none"


  button.addEventListener('click', function(e) {
      textToShow.style.display = "initial"
      button.style.display = "none"
  })
});

