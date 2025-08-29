let products=[];
function fetchData(){


    fetch("https://dummyjson.com/products").then((res)=>{

    //    console.log(res);

        return res.json();

    }).then((val)=>{

        products=val.products;
        console.log(val.products);
        localStorage.setItem("products",JSON.stringify(products))
        
       fetchProduct(products)

    })
}

function fetchProduct(products){
    let rating1;
    let output="";
    products.map((v)=>{
      console.log(v);
      rating1=Math.ceil(v.rating)
      let price=Math.ceil((v.price)*80)
        output+=`
         

        <div id="contain">
        <img id="imges" src="${v.thumbnail}"/>
        
        <div id="item">
       <center> <p id="title"> ${v.title}</p>
        
        <p> ratings:${"⭐".repeat(rating1)}</p></center>
        <div id="rate_viewmore">
        <div id="price"><p>Price: ${price}</p></div></div>
        </div>
        <div id="view">
        <button id="viewMore" onClick="viewMore(${v.id})">view More</button></div>

        </div>
        
        `

    })

    document.getElementById("container").innerHTML=output



}

document.getElementById("search_bar")
.addEventListener("input",function(event){

let searchTerm=event.target.value.toLowerCase()
let filterProduct= products.filter((val)=>{

return(val.title.toLowerCase().includes(searchTerm) ||
val.category.toLowerCase().includes(searchTerm))

})

fetchProduct(filterProduct)


})

function viewMore(productId){

  localStorage.setItem("productId",productId)
  window.location.href="./viewMore.html"
}


fetchData()


