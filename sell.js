let  price = document.getElementById('sell-price');
let original_price = document.getElementById('ori-price');//CP
let minimum_discount = document.getElementById('min-dis');
let add_price = document.getElementById('input-price');
let add_btn = document.getElementById('add_btn');
let added_price = document.getElementById('added-tag');
let items = document.getElementById('items');
let amount = null;
let item = null;
function getdata(){
   let cp = (100/(100+100))*parseInt(price.value);
   let min = ((100+60)/100)*cp;
   original_price.innerHTML = `${Math.round(cp)} ₹`;
   minimum_discount.innerHTML = `${Math.round(min)} ₹`;
   price.value = "";
}
item = 0;
amount = 0;
function add(){
   amount += parseInt(add_price.value);
   added_price.innerHTML = `${amount} ₹`;
   add_price.value = "";
   item++;
   items.innerText = item;
}
// let curr = 0;
// add_btn.addEventListener('click',()=>{
//    console.log('Hii');
//    // curr = curr + add_price.value;
//    // added_price.innerHTML = `${Math.round(curr)} ₹`;
// })
