function is_creditCard(str) {
    regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

console.log(is_creditCard("378282246310006"));

console.log(is_creditCard("37828224630006")); 
