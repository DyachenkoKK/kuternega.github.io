function click1() {
  let price = document.getElementsByName("price");
  let number = document.getElementsByName("number");
  let answer=price[0].value * number[0].value;
  let r = document.getElementById("answer");
  r.innerHTML = "С вас "+answer+" руб.";
  return false;
}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("button1");
  b.addEventListener("click", click1);
});


