// Copy buttons (bio text, email address). The site works fully without this file.
(function () {
  if (!navigator.clipboard) return;
  document.querySelectorAll("[data-copy]").forEach(function (button) {
    var label = button.textContent;
    button.hidden = false;
    button.addEventListener("click", function () {
      var source = document.getElementById(button.getAttribute("data-copy"));
      if (!source) return;
      navigator.clipboard.writeText(source.textContent.replace(/\s+/g, " ").trim()).then(function () {
        button.textContent = "Copied";
        setTimeout(function () { button.textContent = label; }, 2000);
      });
    });
  });
})();
