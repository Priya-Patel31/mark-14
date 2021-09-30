var market_price =  document.querySelector("#market-price");
var quantity = document.querySelector("#quantity-stocks")
var selling_price = document.querySelector("#selling-price");
var btn = document.querySelector(".stock-button");
var output = document.querySelector(".result");
var form = document.querySelector(".form");
var ctn = document.querySelector(".left-container");



form.addEventListener("submit",(event) =>{
    output.style.display="block";
    event.preventDefault();
    if(market_price.value ===0&& quantity === 0 && selling_price.value ===0)
    {
        output.innerText = "Input cannot be zero";
    }else{
        profitLoss(market_price,quantity,selling_price);
    }

});

function profitLoss(market_price, quantity , selling_price){
    selling_price.value = selling_price.value*quantity.value;
    market_price.value = market_price.value*quantity.value;
    
    if(parseInt(market_price.value) < parseInt(selling_price.value ))
    {
        var profit = (selling_price.value - market_price.value);
        var profitPercent = (profit/market_price.value)*100 ;
       
         output.innerText = "Hey the profit is "+ profit +" and profit% is "+ profitPercent.toFixed(2)+"%";
        ctn.style.backgroundColor="#013a4c";

    }
    else if(parseInt(market_price.value) > parseInt(selling_price.value))
   
    {
        var loss = ( market_price.value - selling_price.value );
        var lossPercent = (loss/market_price.value)*100; 
        
        output.innerText ="Hey the loss is "+ loss +" and loss% is "+ lossPercent.toFixed(2)+"%";
        ctn.style.backgroundColor="black";

    }
    else
    {
        output.style.display=" ";
        output.innerText = "You're neither in loss nor in profit." 

    }

}



