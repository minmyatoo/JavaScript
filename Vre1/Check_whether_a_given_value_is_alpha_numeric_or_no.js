function is_alphaNumeric(str) {
    regexp = /^[A-Za-z0-9]+$/;

    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

console.log(is_alphaNumeric("37828sad"));

console.log(is_alphaNumeric("3243#$sew")); 
