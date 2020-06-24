function is_domain(str) {
    regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

console.log(is_domain('www.example.com'));

console.log(is_domain('www.npm.co.uk'));

console.log(is_domain('http://www.example.com'));

console.log(is_domain('https://www.example.com'));

console.log(is_domain('www.example.com'));
