
document.addEventListener("DOMContentLoaded", function (e) {

   // var p = document.getElementById("signInText");

    if (localStorage.getItem('logeduser') == null) {
        // p.innerText = "Hi,\t" + JSON.parse(localStorage.getItem('logeduser')).fname;
        // document.getElementById("sign-in-btn").style.display = "none";
        // document.getElementById("sign-up-btn").style.display = "none";
        // var signout = document.getElementById("signout");
        // signout.style.display = "block"
        // signout.addEventListener("click", function (ev) {
        //     localStorage.removeItem("logeduser");
        //     document.location = "index.html";
        // });

        alert("Please sign in to checkout!!")
        window.location.href="signin.html"
    
    }

    
    });



let bag = JSON.parse(localStorage.getItem("bag"));

console.log(bag);

bag.map(function(el){
    var img = document.createElement("img");
    img.src = el.image_url;
    img.style.width = "60px";
    img.style.height = "85px";
    img.style.objectFit = "cover";
    img.style.marginRight = "10px";
    img.style.objectFit="cover"

    document.getElementById("prodImgContainer").append(img);
})

var total = bag.reduce(function (sum, el) {
    return sum + (Number(el.price))
  }, 0)

  document.getElementById("totalItemsPrice").innerHTML =  `$${total}`;
  document.getElementById("totalAmount").innerHTML =  `$${total + 7 + 5}`;
  console.log(total);



if (document.querySelector('input[name="rd"]')) {
    document.querySelectorAll('input[name="rd"]').forEach((elem) => {
        elem.addEventListener("change", function(event) {
        if(elem.id.length===10){

            document.getElementById("creditCardDetails").style.display= "block";
      
        }else{

            document.getElementById("creditCardDetails").style.display= "none";
        }

        });
    });
  }


  var codCheck = false;

  if (document.querySelector('input[name="rd"]')) {
    document.querySelectorAll('input[name="rd"]').forEach((elem) => {
        elem.addEventListener("change", function(event) {
        if(elem.id.length===3) codCheck = true;
        });
    });
  }

  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var address = document.getElementById("address");
  var email = document.getElementById("email");
  var mobile = document.getElementById("mobile");

  console.log(codCheck)

  document.querySelector("#placeOrder").addEventListener("click", function(){
      placeOrderFun();
  });

  function placeOrderFun(){
    if(fname.value == ""){
        document.querySelector("#ef").style.display = 'block';
    }
    if(lname.value == ""){
        document.querySelector("#el").style.display = 'block';
    }
    if(address.value == ""){
        document.querySelector("#ea").style.display = 'block';
    }
    if(email.value == ""){
        document.querySelector("#ee").style.display = 'block';
    }
    if(mobile.value == ""){
        document.querySelector("#em").style.display = 'block';
    }

    if(codCheck == false){
        document.querySelector("#ecod").style.display = 'block';
    }


      
    if(fname.value != "" && lname.value != "" && address.value != "" && email.value != "" && mobile.value != "" && codCheck){
          window.location.href = "orderPlaced.html";
      }
  }
