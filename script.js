const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rateText = document.getElementById('rate');
const swap = document.getElementById('btn');


currency_one.addEventListener('change', CalculateMoney);
currency_two.addEventListener('change', CalculateMoney);
amount_one.addEventListener('input', CalculateMoney);
amount_two.addEventListener('input', CalculateMoney);

function CalculateMoney() {
    const one = currency_one.value;
    const two = currency_two.value;
    fetch(`https://v6.exchangerate-api.com/v6/YOUR API KEY/latest/${one}`)
        .then(res => res.json()).then(data => { /*console.log(data.conversion_rates);*/
            const rate = data.conversion_rates[two];
            rateText.innerText = `1 ${one} = ${rate}${two}`; /*show rate:currency_one&two*/
            amount_two.value = (amount_one.value * rate).toFixed(2);

        })

}

swap.addEventListener('click', () => {
    //USD => THB || THB =>USD
    // Temp =>USD || THB = Temp (USD)
    const temp = currency_one.value; //first currency
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    CalculateMoney();
})

CalculateMoney();

/*console.log("From currency = " + one);
    console.log("To currency = " + two);*/
