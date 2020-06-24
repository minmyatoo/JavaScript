function is_object(value) {
    var datatype = typeof value;
    return datatype === 'function' || datatype === 'object' && !!value;
}

console.log(is_object({name: 'Robert'}));

console.log(is_object('bar'));

console.log(is_object(72)); 
