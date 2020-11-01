(function() {


  const elem = document.querySelector('.gallery');
  const iso = new Isotope( elem, {
    itemSelector: '.gallery__elem__wrap',
    filter: '.new'
  });


  const controlls = document.querySelectorAll(".tabs__item");
  const activeClass = "tabs__item--active";

    controlls.forEach(function(control) {
    control.addEventListener("click", function(e) {
      e.preventDefault();

      const filterName = control.getAttribute("data-filter");
      
      controlls.forEach(function(link) {
        link.closest(".tabs__item").classList.remove(activeClass);
      });

        control.closest(".tabs__item").classList.add(activeClass);

        iso.arrange({
          filter: `.${filterName}`
        })
      })
    })


})();