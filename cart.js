addEventListener("DOMContentLoaded",()=>{

})

function displayCart(){
    let cart =JSON.parse(localStorage.getItem("cart")) || []

    let cartContent=document.getElementById("cartContent")
    let totalPrice=document.getElementById("totalPrice")

    cartContent.innerHTML=""
    let totalbill=0
    if(cart.length == 0){
        cartContent.innerHTML=`
            <p>Your Cart Is Empty Start <a href="./home.html">Shopping</a></p>`

        totalPrice.innerHTML=""
    }

    cart.map((product,i)=>{
        totalbill += product.price 
        let productElem = document.createElement("div")
        productElem.setAttribute("class","product_info")
        productElem.innerHTML=`
       <div class="img-prod">
       <div class="img">
       <img src="${product.thumbnail}"/></div>
       <div class="product-details">
       <h2>${product.title}</h2>
       <p>availbility: ${product.availabilityStatus}</p>
       <p>Categary: ${product.category}</p>
       <p>returnPolity:${product.returnPolicy}</p>
       <p>shippingInformation:${product.shippingInformation}</p>
       <p>stock: ${product.stock}</p>
       <p>warrantyInformation: ${product.warrantyInformation}</p>
        <p>price: ${product.price}</p>
       

       </div>
       <button onClick="RemoverFromCart(${i})">Remove</button>
       </div>
       
        
        `
        cartContent.appendChild(productElem)
    });
    totalPrice.innerHTML=`<h2>total bill
     : ${totalbill}</h2>`
}

displayCart()

function RemoverFromCart(index){


    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    console.log(cart);
    displayCart()
    
    
}



