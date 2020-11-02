(function () {
 
    const slides = document.querySelectorAll('.slider___item');
    const activeClass = "slider___item--visible";
    let index = 0;
     setInterval(function() {
      slides[index].classList.remove(activeClass);
      index++;
       if (index + 1 > slides.length) {
        index = 0;
      }
       slides[index].classList.add(activeClass);
     
    }, 3000);

} () );