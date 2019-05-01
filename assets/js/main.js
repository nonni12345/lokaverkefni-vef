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
var button = document.getElementById("buttondiv");
function test() {
  console.log(document.getElementById("buttondiv").style.left);
}

function hreyfa() {
  for (var n = 0; n < 100; n++) {
    btn.style.left = n+"px";
  }
  for (var a = 100; a >= 0; a--) {
    btn.style.left = a+"px";
  }

}
btn.addEventListener("mouseover",hreyfa());

