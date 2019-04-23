var x = document.getElementById("form");
x.style.display = "block";
function toggle() {
    var x = document.getElementById("form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function submit() {
    window.alert("Submission Mótekin");
}