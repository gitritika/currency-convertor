const currencyFirstE1 = document.getElementById("currency-first");
const worthFirstE1 = document.getElementById("worth-first");
const currencySecondE1 = document.getElementById("currency-second");
const worthSecondE1 = document.getElementById("worth-second");
const exchangeRateE1 = document.getElementById("exchange-rate");

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/
    9bfb73f30afef7288318b9e4/latest/${currencyFirstE1.value}`).then((res) =>res.json
    ()).then((data) => {
       const rate = data.conversion_rates[currencySecondE1.value];
       console.log(rate);
    })
    
}

currencyFirstE1.addEventListener("change",updateRate);

currencySecondE1.addEventListener("change",updateRate);

worthFirstE1.addEventListener("input",updateRate);