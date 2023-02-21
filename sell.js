let  price = document.getElementById('sell-price');
let original_price = document.getElementById('ori-price');//CP
let minimum_discount = document.getElementById('min-dis');
let cp = null;
price.addEventListener('input',()=>{
   cp = (100/(100+85))*price.value;
   original_price.innerHTML = Math.round(cp);
});
price.addEventListener('input',()=>{
   let min = ((100+60)/100)*cp;
   minimum_discount.innerHTML = Math.round(min);
})