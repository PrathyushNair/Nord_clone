import mens_activewear from "./arrayofobj.js"
import navbar from"./components/navbar.js"
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

let proddata=JSON.parse(localStorage.getItem("product"))
let bag=JSON.parse(localStorage.getItem("bag"))||[]
let sizedropdown=document.querySelector("#sizedropdowns")
let colordropdown=document.querySelector("#colordropdowns")
// document.querySelector("#navContainer").innerHTML=navbar()
// document.querySelector("#cartItems").innerText=bag.length
// console.log(bag.length)

/////////////////////////Checking if size and color has been data entered////////////
let colorval=false
let sizeval=false
document.querySelector("#col").addEventListener("click",function(){
    colorval=true
    alert("Color Selected")
    colordropdown.style.display="none"
})
document.querySelector("#num1").addEventListener("click",function(){
    sizeval=true
    alert("Size Selected")
    sizedropdown.style.display="none"
})
///////////////////////////////////////////////////////////////////////////////////



//////////////////////////Mapping products for display//////////////////////////////
proddata.map((el)=>{
    let Primg=document.createElement("img")
    Primg.src=el.image_url
    Primg.style.height="70%"
    Primg.style.width="70%"
    document.querySelector("#Prprodimg").append(Primg)
    document.querySelector("#Prdesc").innerText=el.description
    document.querySelector("#Prprodname").innerText=el.brand
    if(el.str_price=="")
    {
        document.querySelector("#Prprice").innerText="Add to bag or wishlist to see the price"
        document.querySelector("#Prprice").style.fontWeight="bold"
     
    }
    else
    {
        document.querySelector("#Prprice").innerText=`${el.price_symb}  (${(((el.str_price-el.price)/100)*100).toFixed(2)}% Off)`
        document.querySelector("#Prprice").style.fontWeight="bold" 
        let strike=document.createElement("s")
        strike.innerText=`$ ${el.str_price}`
        document.querySelector("#Prstrprice").append(strike)
    }
    ///////////////////////////////Add to bag////////////////////////////////
    document.querySelector("#Praddtobag").addEventListener("click",function(){
        if(colorval==false||sizeval==false)
        {
            alert("Select size and color")
        }
        else{
            bag.push(el)
        localStorage.setItem("bag",JSON.stringify(bag))
        document.querySelector("#Praddtobag").innerText="Adding to bag..."
       
        setTimeout(()=>{
            document.querySelector("#Praddtobag").innerText="Item added to bag"
            
           
        },3000)
        document.querySelector("#cartItems").innerText=bag.length
        
        }
      
    })
    ///////////////////////////////Add to bag ends here//////////////////////////////////////////
})

/////////////////////////////////Mapping ends here/////////////////////////////////





///////////////////////////////Size and color dropdown functionalities////////////////////

document.querySelector("#Prsize").addEventListener("click",function(){
console.log(sizedropdown.style.display)
if(sizedropdown.style.display==="none"||sizedropdown.style.display==="")
{
    sizedropdown.style.display="block"
        
}
else{
    sizedropdown.style.display="none"
        
    }
    
})



document.querySelector("#Prcolor").addEventListener("click",function(){
console.log(colordropdown.style.display)
if(colordropdown.style.display==="none"||colordropdown.style.display==="")
{
    colordropdown.style.display="block"
        
}
else{
    colordropdown.style.display="none"
        
    }
    
})
////////////////////////////////////Dropdown functionalities ends here//////////////////////////////////////////////


/////////////////////////////////Frequently bought together//////////////////////
let count=0
for(let x of mens_activewear){
    //document.querySelector("#Prfreqbought").innerText=null
    if(proddata[0].category==x.category&count<=2)
    {  console.log(x)
        let freqdiv=document.createElement("div")
        freqdiv.style.textAlign="center"
        freqdiv.style.height="100%"
        let img=document.createElement("img")
        img.style.width="100%"
        img.style.height="65%"
        let brand=document.createElement("p")
        let description=document.createElement("p")
        description.innerText=x.description
        let price=document.createElement("p")
        let rating=document.createElement("p")
        img.src=x.image_url
        brand=x.brand
        price.innerText=x.price_symb
        rating.innerText=`Rating: ${x.review_count}/5`
        freqdiv.append(img,brand,description,price,rating)
       document.querySelector("#Prfreqbought").append(freqdiv)
       count++
    }
}


///////////////////////////////////////////////////////////////////////////////

