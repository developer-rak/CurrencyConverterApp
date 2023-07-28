const dropList = document.querySelectorAll(".drop-list select");

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