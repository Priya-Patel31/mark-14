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
    var sp = selling_price.value*quantity.value;
    var cp = market_price.value*quantity.value;
    
    if(parseInt(cp) < parseInt(sp))
    {
        var profit = (sp - cp);
        var profitPercent = (profit/cp)*100 ;
       
         output.innerText = "Hey the profit is "+ profit +" and profit% is "+ profitPercent.toFixed(2)+"%";
        ctn.style.backgroundColor="#013a4c";

    }
    else if(parseInt(cp) > parseInt(sp))
   
    {
        var loss = ( cp - sp );
        var lossPercent = (loss/cp)*100; 
        
        output.innerText ="Hey the loss is "+ loss +" and loss% is "+ lossPercent.toFixed(2)+"%";
        ctn.style.backgroundColor="black";

    }
    else
    {
        output.style.display=" ";
        output.innerText = "You're neither in loss nor in profit." 

    }

}



