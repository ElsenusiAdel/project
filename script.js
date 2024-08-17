
const products=document.querySelector('.products');
let cartItem= document.getElementById('cartItem');
const product=[
    {
    id:0,
    image:'fast-fashion-vs-slow-sustainable-fashion.jpg',
    title: 'sustainable-fashion',
    price: 100,  
 },
  {
    id:1,
    image:'she-likes-fashion-so-much.jpg',
    title: 'she-likes-fashion',
    price: 150, 
  },
  {
    id:2,
    image:'images/full-length-portrait-cute-little-kid-boy-stylish-jeans-clothes-smiling-standing-white-kids-fashion-concept.jpg',
    title: 'kid-boy-stylish-jeans',
    price: 200,
  },
  
  {
    id:3,
    image:'images/full-length-portrait-bright-fashionable-girl-red-raincoat-with-black-bag-posing-yellow-studio-wall.jpg',
    title: 'ashionable-raincoat',
    price: 250,
  }
];
function drawProductsUI(){
    let productsUI = product.map((item)=>{
        return`
        <div class='box'>
                    <div class='img-box'>
                        <img class='images' src="${item.image}"></img>
                    </div>
                    <div class='bottom'>
                        <p>(${item.title})</p>
                        <h2>${item.price}.00</h2>
                            <button onclick='addtocart(${item.id})'>Add to Cart</button>
                    </div>
                </div>
                  `
    });
    products.innerHTML = productsUI.join('');
}
drawProductsUI();




let cartend=[];
function addtocart(id){

  let cart=product.filter((item)=> item.id===id);

      cartend.push(cart);
      displaycart(cartend); 
}


let currentIndex = 0;
function displaycart(cartend){
  let total=0;
  let j=0;
  console.log(cartend); 
  document.getElementById('count').innerHTML=cartend.length;

  if(cartend.length==0){
    cartItem.innerHTML='Your cart is empty';
    currentIndex = 0;
  }
  else{
    cartItem.innerHTML='';
    cartItem.innerHTML+=cartend.flat().map((item)=>{
      currentIndex++;
      total=total+item.price;
      return`
      <div class='cart-item'>
                  <div class='row-image'>
                      <img class='rowing' src="${item.image}"></img>
                  </div>
  
                      <p class='title-price'>${item.title}</p>
                      <h2 class='cart-price'>$${item.price}.00</h2>
                      <i onclick='delElement(${j++})' class="fa-solid fa-trash"></i>
              </div>
                `
               
    }).join('');
  }
  document.getElementById('total').innerHTML=`$ ${total}`;
  
}
function delElement(id) {
  if (id >= 0 && id < cartend.length) {
      console.log(cartend[id]);
      cartend.splice(id, 1);
      displaycart(cartend);
  } else {
      console.log("Invalid ID:", id);
  }
}
