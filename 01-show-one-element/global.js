  
window.addEventListener("load", function(){
  const button = document.querySelector("#more_text_link")
  const textToShow = document.querySelector("#more_text_content")
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