javascript: (function () {
  var elements = document.querySelectorAll("input, select, textarea");
  var results = [];
  elements.forEach(function (element) {
    if (element.hasAttribute("autocomplete")) {
      results.push(element);
    }
  });

  if (results.length > 0) {
    alert(results.length + " éléments ont l'attribut autocomplete.");
    results.forEach(function (el) {
      console.log(el);
    });
  } else {
    alert("Aucun élément avec l'attribut autocomplete trouvé.");
  }
})();
