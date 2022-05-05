import mens_activewear from"./arrayofobj.js"
import {sorting,display} from "./productpage_functions/functionalities.js"
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
            document.location = "header.html";
        });
    
    }

    
    });


localStorage.setItem("activewear",JSON.stringify(mens_activewear))
let data=JSON.parse(localStorage.getItem("activewear"))
display(data)

/////////////////////////Gender Dropdown Functionality////////////////////////////
let genderdropdown=document.querySelector(".Prgenderdropdown")
document.querySelector("#Prgender").addEventListener("click",function(){

console.log(genderdropdown.style.display)
if(genderdropdown.style.display==="none"||genderdropdown.style.display==="")
{   document.querySelector("#grplus").innerText="-"
    genderdropdown.style.display="block"
   
        
}
else{document.querySelector("#grplus").innerText="+"
    genderdropdown.style.display="none"
    
        
    }
    
})
//////////////////////////////////////////////////////


/////////////////////////Category Dropdown Functionality////////////////////////////
let categorydropdown=document.querySelector(".Prcategorydropdown")
document.querySelector("#Prcategory").addEventListener("click",function(){
console.log(genderdropdown.style.display)
if(categorydropdown.style.display==="none"||categorydropdown.style.display==="")
{   document.querySelector("#crplus").innerText="-"
    categorydropdown.style.display="block"
        
}
else{
    document.querySelector("#crplus").innerText="+"
    categorydropdown.style.display="none"
        
    }
    
})

///////////////////////////////////////////////////////////////////////

///////////////////////////////Brand Dropdown Functionalities///////////////
let branddropdown=document.querySelector(".Prbranddropdown")
document.querySelector("#Prbrand").addEventListener("click",function(){
console.log(genderdropdown.style.display)
if(branddropdown.style.display==="none"||branddropdown.style.display==="")
{    document.querySelector("#brplus").innerText="-"
    branddropdown.style.display="block"
        
}
else{
    document.querySelector("#brplus").innerText="+"
    branddropdown.style.display="none"
        
    }
    
})
//////////////////////////////////////////////////////

////////////////////Fit drop down///////////////////
let fitdropdown=document.querySelector(".Prfitdropdown")
document.querySelector("#Prfit").addEventListener("click",function(){
console.log(genderdropdown.style.display)
if(fitdropdown.style.display==="none"||fitdropdown.style.display==="")
{    document.querySelector("#ftplus").innerText="-"
    fitdropdown.style.display="block"
        
}
else{
    document.querySelector("#ftplus").innerText="+"
    fitdropdown.style.display="none"
        
    }
    
})
//////////////////////////////////////////////////
////////////Sorting functionality///////////////

document.querySelector("#Prsorting").addEventListener("change",function(){
    sorting(data)
})
 ///////Sorting functionality ends//////////////


 //////////////////////////////Filter by category/////////////////////////////////
let categorychild=document.querySelector(".Prcategorydropdown").children
for(let x of categorychild)
{  
    x.addEventListener("click",function(){
        categoryfilter(this.id)
    })
}
function categoryfilter(y){
    //console.log(y)
    let  value= document.getElementById(y).innerText
    console.log("value",value)
    let filterdata=data.filter(function(el){
        return el.category==value
    })
    display(filterdata)

}
 //////////////////////////////Filter by category ends/////////////////////////////////

//////////////////////////////Filter by gender/////////////////////////////////
let genderchild=document.querySelector(".Prgenderdropdown").children
for(let x of genderchild)
{  
  let input=x.children
  input[0].addEventListener("click",function(){
    if(input[0].checked==true){
        console.log(input[0].value)
     let filterdata=data.filter(function(el){
        return el.gender==input[0].value
    })
         display(filterdata)
    }
    else{
        console.log("removed")
        display(mens_activewear)

    }
  })
}
//////////////////////////////Filter by gender ends/////////////////////////////////

//////////////////////////////Filter by brands//////////////////////////////////////
let brandchild=document.querySelector(".Prbranddropdown").children
for(let x of brandchild)
{  
  let input=x.children
  input[0].addEventListener("click",function(){
    if(input[0].checked==true){
        console.log(input[0].value)
     let filterdata=data.filter(function(el){
        return el.brand==input[0].value
    })
         display(filterdata)
    }
    else{
        console.log("removed")
        display(mens_activewear)

    }
  })
}

/////////////////////////////////////////////////////////////////////////////////////


let fitchild=document.querySelector(".Prfitdropdown").children
for(let x of fitchild)
{  
  let input=x.children
  input[0].addEventListener("click",function(){
    if(input[0].checked==true){
        console.log(input[0].value)
     let filterdata=data.filter(function(el){
        return el.fit==input[0].value
    })
         display(filterdata)
    }
    else{
        console.log("removed")
        display(mens_activewear)

    }
  })
}

/////////////////////Scroll functionality//////////////
window.onscroll=function(){myfunction()}
let count=0
function myfunction()
{   count++
    // if(count>50 )
    // {
    //    console.log("50 px exceeded") 
    // }
    if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        console.log("down")
        document.querySelector("#Prsidebar").style.marginTop="0px"
      }
      else if(document.body.scrollTop < 450 || document.documentElement.scrollTop <450) {
        console.log("up")
        document.querySelector("#Prsidebar").style.marginTop="200px"
      }
     
    
}
/////////////////////////////


