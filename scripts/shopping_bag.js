document.addEventListener("DOMContentLoaded", function (e) {

  var p = document.getElementById("signInText");

  if (localStorage.getItem('logeduser') != null) {
      p.innerText = "Hi,\t" + JSON.parse(localStorage.getItem('logeduser')).fname;
      document.getElementById("sign-in-btn").style.display = "none";
      document.getElementById("sign-up-btn").style.display = "none";
      var signout = document.getElementById("signout");
      signout.style.display = "block"
      signout.addEventListener("click", function (ev) {
          localStorage.removeItem("logeduser");
          document.location = "index.html";
      });
  
  }

  
  });


var cartData = JSON.parse(localStorage.getItem("bag"));

console.log(cartData)

function showdata(cartData) {


  // console.log(cartData)
  cartData.map(function (el, index) {


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var main = document.createElement("div");
    main.setAttribute("class", "cartcontain")
    var box1 = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.image_url;
    img.setAttribute("class","bagimg")
    box1.append(img)
    var box2 = document.createElement("div");
    var name = document.createElement("p");
    name.innerHTML = el.category;

    var description = document.createElement("p");
    description.innerHTML = el.description;

    var brand = document.createElement("p");
    brand.innerHTML = `brand: ${el.brand}`;

    var gender = document.createElement("p");
    gender.innerHTML = `gender: ${el.gender}`;

    var button = document.createElement("button");
    button.textContent = "Remove";
    button.style.cursor="pointer"
    button.addEventListener("click", function () {
      removeitem(el, index)
    })
    var button2 = document.createElement("button");
  
    var a = document.createElement("a");
    a.href = "#";
    a.innerHTML = "Save for Later"
    button2.append(a);
    box2.append(name, description, brand, gender, button, button2)
    main.append(box1, box2);
    td1.append(main);

    var td2 = document.createElement("td");

    var sel = document.createElement("select");
    sel.style.color="#00819d"
    sel.style.border="none"
    //////////////////////////////////////////////////////
    // sel.addEventListener("change",function(){
    //   el.finalprice=sel.value*el.price
    //   console.log(el)
    // })
    ////////////////////////////////////////////
    var opt1 = document.createElement("option");
    var opt2 = document.createElement("option");

    opt1.value = "1";
    opt1.text = "Qty1";

    opt2.value = "2";
    opt2.text = "Qty2";

    sel.add(opt1, null);
    sel.add(opt2, null);
    td2.append(sel)

    var td3 = document.createElement("td");
    td3.setAttribute("class", "itemqty")
    var div = document.createElement("div");
    div.setAttribute("class", "itemmanage");
    var p = document.createElement("p");
    p.innerHTML = el.price_symb
    var p1 = document.createElement("p");
    p1.innerHTML = `Now:${el.price_symb}`
    var p2 = document.createElement("p");
    p2.innerHTML = `*${el.price_symb}`
    div.append(p, p1, p2);
    td3.append(div)
    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr)

  })
  function removeitem(el, index) {
    console.log(el, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("bag", JSON.stringify(cartData));
    window.location.reload()


  }

  var total = cartData.reduce(function (sum, el) {
    return sum + (Number(el.price))
  }, 0)
  console.log(total)

  var Shipping = 7
  var Estimated = 5
  var tr1 = document.createElement("tr");
  var th = document.createElement("th");
  th.innerHTML = "Subtotal";
  var td = document.createElement("td");
  td.setAttribute("class", "subtotal")
  td.innerHTML = total

  tr1.append(th, td);
  var tr2 = document.createElement("tr");
  var th = document.createElement("th");
  th.innerHTML = "Shipping";
  var td = document.createElement("td");
  td.setAttribute("class", "total")
  td.innerHTML = `$${Shipping}`
  tr2.append(th, td);
  var tr3 = document.createElement("tr");
  var th = document.createElement("th");
  th.innerHTML = "Estimated tax";
  var td = document.createElement("td");
  td.setAttribute("class", "total")
  td.innerHTML = `$${Estimated}`
  tr3.append(th, td);
  var hr = document.createElement("hr")
  document.querySelector("#shipping-bag-subtotal").append(tr1, tr2, tr3);


  var tr4 = document.createElement("tr");
  var th = document.createElement("th");
  th.innerHTML = "Estimated total";
  var td = document.createElement("td");
  td.setAttribute("class", "total")
  td.innerHTML = `$${total + Shipping + Estimated}`
  tr4.append(th, td);

  document.querySelector("#estimate_total").append(tr4)


}

showdata(cartData)
