function is_json(value) {
    return toString.call(value) === '[object Object]';
}

console.log(is_json({name: 'Robert'}));

console.log(is_json('bar'));

console.log(is_json(72));
