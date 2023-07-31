const dropList = document.querySelectorAll(".drop-list select"),
    fromCurrency = document.querySelector(".from select"),
    toCurrency = document.querySelector(".to select"),
    getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    for (currency_code in country_code) {
        // selecting USD by default as FROM currency and PKR as TO currency
        let selected;
        if (i == 0) {
            selected = currency_code == "USD" ? "selected" : "";
        } else {
            if (i == 1) {
                selected = currency_code == "PKR" ? "selected" : "";
            }
        }
        // // creating option tag with passong currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // // inserting option tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
}

getButton.addEvetListner("click", e => {
    e.preventDefault(); // preventing form from submitting
    getExchangeRate();
});

function getExchangeRate() {
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;

    // if user don't enter any value or enter 0 then we'll put 1 value by defualt in the input field
    if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }
    let url = `https://v6.exchangerate-api.com/v6/521ec5eba5748c29b910c85b/latest/${fromCurrency.value}`;
    fetch(url).then(response => console.log(response.json()));
}