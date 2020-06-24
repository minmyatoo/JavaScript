<
HTML >
< HEAD >
< TITLE > Clock - Happy
Codings :-
)
JavaScript
Code
Examples < /TITLE>
< SCRIPT
LANGUAGE = "JavaScript" > < !--
    function dateTime() {
        var now = new Date();
        var result = now.toLocaleString();
        var tzOffset = -now.getTimezoneOffset() / 60;
        if (tzOffset < 0)
            result += " (GMT " + tzOffset + " hours)";
        else
            result += " (GMT +" + tzOffset + " hours)";
        return result;
    }

function tick() {
    document.forms[0].clock.value = dateTime()
    setTimeout("tick()", 1000)
}

// --></SCRIPT>
<
/HEAD>
< BODY >
< FORM >
< INPUT
NAME = "clock"
TYPE = "TEXT"
SIZE = "50"
VALUE = "&{dateTime()};" >
    < /FORM>
    < SCRIPT
LANGUAGE = "JavaScript" > < !--
        tick()
    // --></SCRIPT>
    < /BODY>
    < /HTML>
