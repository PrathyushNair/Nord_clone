let display=(mens_activewear)=>{
    document.querySelector("#Prproductdisplay").innerText=null
    mens_activewear.map(function(el){
        if(el.str_price==""){
            let div=document.createElement("div")
            div.style.cursor="pointer"
            div.addEventListener("click",function(){
                productdisplay(el)
            })
            let imgdiv=document.createElement("div")
            let img=document.createElement("img")
            img.setAttribute("class","Primage")
             img.src=el.image_url
             img.style.height="50%"
             img.style.width="100%"
             img.style.objectFit="cover"
             let quickview=document.createElement("div")
             quickview.setAttribute("class","Prquickview")
             quickview.innerText="Quick View"
             quickview.style.opacity="0%"
             
             imgdiv.addEventListener("mouseenter",function(){
               quickview.style.opacity="100%"
            })
            imgdiv.addEventListener("mouseleave",function(){
                quickview.style.opacity="0%"
            })
            imgdiv.append(img,quickview)
             let nam=document.createElement("h4")
             nam.innerText=el.brand
             let p1=document.createElement("p")
             p1.innerText=el.description
             p1.setAttribute("class","Prdescription")
             let p2=document.createElement("h5")
             p2.innerText="Add to bag or wishlist to see price"
             let p3=document.createElement("p")
             p3.innerText=`Rating: ${el.review_count}/5`
             let p4=document.createElement("p")
             p4.innerText="Free Shipping on Orders $89+"
             p4.style.color="grey"
             div.append(imgdiv,nam,p1,p2,p3,p4)
            document.querySelector("#Prproductdisplay").append(div)
        }
        else
        {
            let div=document.createElement("div")
            div.style.cursor="pointer"
           div.addEventListener("click",function(){
            productdisplay(el)
        })
            let imgdiv=document.createElement("div")
            let img=document.createElement("img")
             img.src=el.image_url
             img.style.height="50%"
             img.style.width="100%"
             let quickview=document.createElement("div")
             quickview.innerText="Quick View"
             quickview.setAttribute("class","Prquickview")
             quickview.style.opacity="0%"
             imgdiv.addEventListener("mouseenter",function(){
               quickview.style.opacity="100%"
                })
            imgdiv.addEventListener("mouseleave",function(){
                quickview.style.opacity="0%"
                })
            imgdiv.append(img,quickview)
            let nam=document.createElement("h4")
             nam.innerText=el.brand
             let p1=document.createElement("p")
             p1.setAttribute("class","Prdescription")
             p1.innerText=el.description
            let p2=document.createElement("p")
             p2.innerText=`${el.price_symb}  (${(((el.str_price-el.price)/100)*100).toFixed(2)}% Off)`
             let str=document.createElement("s")
             str.innerText=`$ ${el.str_price}`
             let p3=document.createElement("p")
             p3.innerText=`Rating: ${el.review_count}/5`
             let p4=document.createElement("p")
             p4.innerText="Free Shipping on Orders $89+"
             p4.style.color="grey"
             div.append(imgdiv,nam,p1,p2,str,p3,p4)
            document.querySelector("#Prproductdisplay").append(div)
        }
       
     })
     document.querySelector("#Prtotal").innerText=mens_activewear.length+" Items"
}



function productdisplay(el)
{   let arr=[]
    arr.push(el)
    localStorage.setItem("product",JSON.stringify(arr))
    window.location.href="productdisplay.html"

}





let sorting=(mens_activewear)=>
{ console.log("inside sorting")
    let selected=document.querySelector("#Prsorting").value
    if(selected=="byrating")
    {
       console.log("by reating")
        mens_activewear.sort((a,b)=>{
            return b. review_count-a.review_count
        })
        
        display(mens_activewear)
    }
    if(selected=="desc")
    {   console.log("inside desc")
        mens_activewear.sort((a,b)=>{
            return b.price-a.price
        })
        console.log("desc",mens_activewear)
        display(mens_activewear)
    }
     if(selected=="asc")
    { console.log("inside asc")
        mens_activewear.sort((a,b)=>{
            return a.price-b.price
        })
        console.log("asc",mens_activewear)
        display(mens_activewear)
    }
    
}

export {sorting,display}