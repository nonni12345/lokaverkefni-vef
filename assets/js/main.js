var x = document.getElementById("form");
x.style.display = "none";
function toggle() {
    var x = document.getElementById("form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function submission() {
    alert("Submission Mótekin");
}