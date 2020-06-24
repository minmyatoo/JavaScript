function is_hexadecimal(str) {
    regexp = /^[0-9a-fA-F]+$/;

    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

console.log(is_hexadecimal("ffffff"));

console.log(is_hexadecimal("fz5500"));
