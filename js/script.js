document.addEventListener("DOMContentLoaded", function () {
  
  function updateContainers() {
    let selectedCategories = [];

    
    document
      .querySelectorAll(".check-card:checked")
      .forEach(function (checkbox) {
        selectedCategories.push(checkbox.value);
      });

    
    if (selectedCategories.length === 0) {
      document
        .querySelectorAll(".show-categorias")
        .forEach(function (container) {
          container.style.display = "block";
        });
    } else {
      
      document
        .querySelectorAll(".show-categorias")
        .forEach(function (container) {
          container.style.display = "none";
        });

      
      selectedCategories.forEach(function (category) {
        document.querySelectorAll("." + category).forEach(function (container) {
          container.style.display = "block";
        });
      });
    }
  }

  
  document.querySelectorAll(".check-card").forEach(function (checkbox) {
    checkbox.addEventListener("change", updateContainers);
  });

  
  updateContainers();
});
