  
window.addEventListener("load", function(){
  const button = document.querySelector("a")
  const textToShow = document.querySelector("span")
  textToShow.style.display = "none"


  button.addEventListener('click', function(e) {
      textToShow.style.display = "initial"
      button.style.display = "none"
  })
});


/*

1.Kad parlādē lapu tad vis atgriezas, jo visi skriti arī restartejas.
2.Skripts nestrādās, jo html klases neredzēs js.
3.

*/