function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}

function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

function Student(name) {
    this.name = name;
}

Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara"))); 
