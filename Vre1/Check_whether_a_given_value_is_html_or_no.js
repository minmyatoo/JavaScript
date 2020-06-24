function is_html(str) {
    regexp = /<([a-z]+) *[^/]*?>/;

    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

console.log(is_html(''));

console.log(is_html(''));

console.log(is_html('.selector'));
