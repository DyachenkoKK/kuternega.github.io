function updatePrice() {
  let s = document.getElementsByName("tovar");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = (select.value == "2" ? "block" : "none");
  
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }

    let number = document.getElementsByName("number");
    let x=parseInt(number[0].value);
     price*=x;
  
  });

  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value == "3" ? "block" : "none");

  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });
  
  let prodPrice = document.getElementById("answer");
  prodPrice.innerHTML = price + " рублей";
}

function getPrices() {
  return {
    prodTypes: [100, 200, 150],
    prodOptions: {
      option1:0,
      option2: 10,
      option3: 5,
    },
    prodProperties: {
      sv1: 1,
      sv2: 2,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";
  
  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = "none";

  let s = document.getElementsByName("tovar");
  let select = s[0];
  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
  
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });

  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  let number = document.getElementsByName("number");
  let num = number[0];
  num.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
  updatePrice();
});
