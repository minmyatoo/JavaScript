function is_usZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

console.log(is_usZipCode("03201-2150"));

console.log(is_usZipCode("7892")); 
