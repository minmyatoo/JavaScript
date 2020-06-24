<
HTML >
< HEAD >
< title > Happy
Codings :-
)
JavaScript
Code
Examples < /title>
< SCRIPT
LANGUAGE = "JavaScript" >
    function jenny(x, y) {
        var args = jenny.arguments
        document.write("<P>jenny.caller is " + jenny.caller + "<BR>")
        document.write("jenny.arguments.length is " + jenny.arguments.length + "<BR>")
        for (var i = 0; i < args.length; i++) {
            document.write("argument " + i + " is " + args[i] + "<BR>")
        }
        document.write("</P>")
    }

function gretel(x, y, z) {
    today = new Date()
    thisYear = today.getFullYear()
    jenny(x, y, z, thisYear)
}

<
/SCRIPT>
< /HEAD>
< BODY >
< SCRIPT
LANGUAGE = "JavaScript" >
    jenny(1, "two", 3);
gretel(4, "five", 6, "seven");
<
/SCRIPT>
< /BODY>
< /HTML>
