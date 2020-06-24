<
HTML >
< HEAD >
< TITLE > Number
Formatting - Happy
Codings :-
)
JavaScript
Code
Examples < /TITLE>
< SCRIPT
LANGUAGE = "JavaScript" >
    // generic positive number decimal formatting function
    function format(expr, decplaces) {
        var str = "" + Math.round(eval(expr) * Math.pow(10, decplaces))
        while (str.length <= decplaces) {
            str = "0" + str
        }
        var decpoint = str.length - decplaces
        return str.substring(0, decpoint) + "." + str.substring(decpoint, str.length);
    }

function dollarize(expr) {
    return "$" + format(expr, 2)
}

<
/SCRIPT>
< /HEAD>
< BODY >
< H1 > Make
Money - Happy
Codings :-
)
JavaScript
Code
Examples < /H1>
< FORM >
Enter
a
positive
floating - point
value
or
arithmetic
expression
to
be
converted
to
a
currency
format:<
P >
< INPUT
TYPE = "text"
NAME = "entry"
VALUE = "1/3" >
    < INPUT
TYPE = "button"
VALUE = "Dollars and Cents"
onClick = "this.form.result.value=dollarize(this.form.entry.value)" >
    < INPUT
TYPE = "text"
NAME = "result" >
    < /FORM>
    < /BODY>
    < /HTML>
