let  price = document.getElementById('sell-price');
let original_price = document.getElementById('ori-price');
let minimum_discount = document.getElementById('min-dis');
price.addEventListener('input',()=>{
   let proprice = (price.value)*(85/100);
   original_price.innerHTML = price.value-proprice;
});
price.addEventListener('input',()=>{
    let proprice = (price.value)*(85/100);
   proprice = price.value-proprice;
   proprice = proprice+(proprice)*(60/100);
   minimum_discount.innerHTML = proprice;
})