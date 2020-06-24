function Trim(str) {
    var result;
    if (typeof str === 'string') {
        result = str.replace(/^\s+|\s+$/g, '');
        return result;
    } else {
        return false;
    }
}

console.log(Trim(' w3resource ')); 
