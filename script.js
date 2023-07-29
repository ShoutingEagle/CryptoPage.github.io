var data1 ;

async function fetchData(){
    try {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';
        const response = await fetch(url);
        const data = await response.json();
        renderData(data);
        data1 = data;
        
    } catch (error) {
        console.error(error);
    }
    
}





// display

function renderData(data){
    const cardList = document.getElementById('card-list');
    cardList.innerHTML ="";
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    for(let i=0;i<data.length;i++){
        
        cardContainer.innerHTML += `
                <div class="card" id="main-${101+i}">
                    <div class="card-wrapper-inside">
                    <div class="item-1">
                        <div class="icon"><img src="${data[i].image}" alt=""></div>
                        <div class="details">
                            <div class="symbol">${data[i].symbol.toUpperCase()}</div>
                            <div class="name">${data[i].id}</div>
                        </div>
                    </div>
                    <div class="item-2 item" id="item-${i}">${data[i].price_change_percentage_24h.toFixed(2) +" %"}</div>
                    <div class="item-3 item" id="item-${101+i}">$ ${data[i].current_price}</div>
                    <div class="item-4 item">Total Volume : ${data[i].total_volume}</div>
                    <div class="item-5 item">Market Cap : ${data[i].market_cap}</div>
                    </div>
                </div>`;

            
             if(data[i].price_change_percentage_24h < 0){
                let j = 101+i;
                document.getElementById("item-"+i).style.color = "rgb(231,81,74)";
                document.getElementById("item-"+i).style.borderColor = "rgb(231,81,74)";
                document.getElementById("item-"+j).style.color = "rgb(231,81,74)";
                document.getElementById("main-"+j).classList = "active";

             }
 
    }


}


// display grid

function grid(){
    renderData(data1);
    console.log("clicked grid");
}



//display list

function list(){
   console.log(data1);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    const cardList = document.getElementById('card-list');
    cardList.innerHTML ="";
    for(let i=0;i<data1.length;i++){
        cardList.innerHTML += `<div class="card-list" id="main1-${101+i}">
                <span class="data">
                    <div class="item-1 data-1">
                    <div class="icon"><img src="${data1[i].image}" alt="" ></div>
                    <div class="details">
                    <div class="symbol">${data1[i].symbol.toUpperCase()}</div>
                    <div class="name">${data1[i].id}</div>
                    </div>
                    </div>
                </span>
                <span class="data-2">
                <span class="item-2" id="item-${i}">${data1[i].price_change_percentage_24h.toFixed(2) +" %"}</span>
                </span>
                <span class="data-3" id="item-${101+i}">$ ${data1[i].current_price.toFixed(2)}</span>
                <span class="data-4">Total Volume : ${data1[i].total_volume}</span>
                <span class="data-5">Market Cap : ${data1[i].market_cap}</span>
                </div> `


                if(data1[i].price_change_percentage_24h < 0){
                    let j = 101+i;
                    document.getElementById("item-"+i).style.color = "rgb(231,81,74)";
                    document.getElementById("item-"+i).style.borderColor = "rgb(231,81,74)";
                    document.getElementById("item-"+j).style.color = "rgb(231,81,74)";
                    document.getElementById("main1-"+j).classList = "active1";
    
                 }
    }
}














fetchData();