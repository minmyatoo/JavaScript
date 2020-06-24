function is_char(value) {
    if (Object.prototype.toString.call(value) !== '[object String]')
        return false;
    return value && value.length === 1;
}

console.log(is_char('f'));
console.log(is_char('*'));
