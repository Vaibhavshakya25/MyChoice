let sell = document.getElementById('sell');
let buy = document.getElementById('buy');

sell.addEventListener('click',()=>{
    window.location.href = "sell.html";
})

buy.addEventListener('click',()=>{
    console.log('Buy button press');
})