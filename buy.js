let cp = document.getElementById('newbuy');
let sp = document.getElementById('pricetext');

cp.addEventListener('input',()=>{
     let price = ((100+100)/100)*cp.value;
     sp.innerHTML = Math.round(price);
})