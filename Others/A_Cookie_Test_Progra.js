<
HTML >
< HEAD >
< TITLE > Cookie
Test - Happy
Codings :-
)
C++, C
#, HTML, Java, JavaScript
Code
Examples < /TITLE>
< SCRIPT
LANGUAGE = "JavaScript" > < !--
        function updateCookie() {
            document.cookie = document.form1.cookie.value
            location.reload(true)
        }
    // --></SCRIPT>
    < /HEAD>
    < BODY >
    < SCRIPT
LANGUAGE = "JavaScript" >
    document.write("Your current cookie value is: '" + document.cookie + "'")
    < /SCRIPT>
    < FORM
ACTION = ""
NAME = "form1" >
    < P > Enter
new cookie
: <
INPUT
TYPE = "TEXT"
SIZE = "60"
NAME = "cookie" > < /P>
    < INPUT
TYPE = "BUTTON"
NAME = "setCookie"
VALUE = "Set Cookie"
onClick = "updateCookie()" >
    < /FORM>
    < /BODY>
    < /HTML>
