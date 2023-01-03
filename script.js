//getting the total
var total = document.getElementById("total");
console.log(total);

//boutton plus
let btnplus = document.getElementsByClassName("plus");
for (let bt of btnplus) {
  bt.addEventListener("click", function () {
    //getting name
    let itemname = bt.getAttribute("name");
    console.log(itemname);

    //getting price
    let price = document.getElementById(itemname + "_price").innerHTML;
    console.log(price);
    //getting qty
    let qty = document.getElementById(itemname + "_qty");
    //increment qty
    qty.innerHTML++;
    console.log(qty);

    //changing total
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price);
  });
}
//boutton moins
let btnmoin = document.getElementsByClassName("minus");

for (let bt of btnmoin) {
  bt.addEventListener("click", function () {
    //getting name
    let itemname = bt.getAttribute("name");
    console.log(itemname);
    //getting price
    let price = document.getElementById(itemname + "_price").innerHTML;
    console.log(price);
    //getting qty
    let qty = document.getElementById(itemname + "_qty");
    //increment qty
    if (qty.innerHTML > 0) {
      qty.innerHTML--;
      console.log(qty);
      //changing total
      total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
    } else {
      alert("Pas d'articles choisis");
    }
  });
}
//// heart clr
var hearts = document.querySelectorAll(".heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.getAttribute("fill") == "grey") {
      heart.setAttribute("fill", "red");
    } else {
      heart.setAttribute("fill", "grey");
    }
  });
}

//btnremove
let btnremove = document.getElementsByClassName("remove");
for (let btr of btnremove) {
  btr.addEventListener("click", function () {
    let itemname = btr.getAttribute("name");
    console.log(itemname);
    let name = document.getElementById(itemname + "_name");
    name.parentElement.remove();
    let price = document.getElementById(itemname + "_price").innerHTML;
    total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
  });
}

//vider panier
let btnvider = document.getElementsByClassName("vider");
for (let btv of btnvider) {
  btv.addEventListener("click", function () {
    item_1.parentElement.remove();
    total.innerHTML = 0;
  });
}
