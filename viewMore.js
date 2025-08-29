document.addEventListener("DOMContentLoaded",()=>{
    let productId=localStorage.getItem("productId")
    let products=JSON.parse(localStorage.getItem("products"))
    let productDetails=document.getElementById("productDetails")

    if(products && productId){

        let selectProduct = products.find((v)=>{

            return v.id == productId
        })


        if(selectProduct){
            let rating1;
            rating1=Math.ceil(selectProduct.rating)
            let price=Math.ceil((selectProduct.price)*80)
            productDetails.innerHTML=`
           <div id="main">
           <div id="frame">
           <div id="image"> <img src="${selectProduct.thumbnail}"/></div>
           <div id="contain"> <h1>${selectProduct.title}</h1>
           <p> ratings:${"⭐".repeat(rating1)}</p>
           <p>Price: ${price}</p>
           <p>category: ${selectProduct.category}</p>
           <p>warrantyInformation: ${selectProduct.warrantyInformation}</p>
           <p>shippingInformation: ${selectProduct.shippingInformation}</p>


           <div><button id="addToCard">Add to card</button>  <button id="home" onClick="backHome()"> back to home </button></div>
           </div>
          
          
           </div>
            <div id="review">
            
            <h1> Customers reviews</h1>
            ${selectProduct.reviews.map(

                
                (reviews)=>`
                
                <div id="ratings">${"❤️".repeat(reviews.rating)} ${"🖤".repeat(

                    5 - reviews.rating
                )} </div>
                <p id="commnet">${reviews.comment}</p>
                <p id="nam"> BY <strong>${reviews.reviewerName}</strong> on ${new Date(reviews.Date)}</p>`
            )}</div>
            </div>
            `
            document.getElementById("addToCard").addEventListener("click",()=>{

                          addToCard(selectProduct)

            })
        }
        else{
            productDetails.innerHTML`<p> no product found </p>`
        }
    }
    else{
        productDetails.innerHTML`<p>product not found</p>`
    }



})

function backHome(){

    window.location.href="./home.html"


}


function addToCard(product){

    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("product is added successfully")
}
