document.getElementById("htmlCode").value = "<div>\n\n</div>";
document.getElementById("cssCode").value = "<style>\n\n</style>";
document.getElementById("jsCode").value = "<script>\n\n</script>";

function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
// Save Content to localStorage
function saveToLocalStorage() {
  localStorage.setItem("htmlCode", document.getElementById("htmlCode").value);
  localStorage.setItem("cssCode", document.getElementById("cssCode").value);
  localStorage.setItem("jsCode", document.getElementById("jsCode").value);
}
// Load Content from localStorage
function loadFromLocalStorage() {
  if (localStorage.getItem("htmlCode")) {
    document.getElementById("htmlCode").value =
      localStorage.getItem("htmlCode");
  }
  if (localStorage.getItem("cssCode")) {
    document.getElementById("cssCode").value = localStorage.getItem("cssCode");
  }
  if (localStorage.getItem("jsCode")) {
    document.getElementById("jsCode").value = localStorage.getItem("jsCode");
  }
}
// Add event listeners to textareas for auto-saving
document
  .getElementById("htmlCode")
  .addEventListener("input", saveToLocalStorage);
document
  .getElementById("cssCode")
  .addEventListener("input", saveToLocalStorage);
document.getElementById("jsCode").addEventListener("input", saveToLocalStorage);

// Call loadFromLocalStorage when the page is loaded
window.addEventListener("DOMContentLoaded", function () {
  loadFromLocalStorage();
  showPreview();
});
