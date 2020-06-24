<
HTML >
< HEAD >
< TITLE > Throwing
a
Custom
Error
Object
Exception - Happy
Codings :-
)
JavaScript
Code
Examples < /TITLE>
< SCRIPT
LANGUAGE = "JavaScript" >
var letters = new Array("A", "B", "C", "D", "E")

function getErrorObj(msg) {
    var err = new Error(msg)
    // take care of IE5/5.5
    if (!err.message) {
        err.message = msg
    }
    err.name = "MY_ERROR"
    return err
}

function getLetter(fld) {
    try {
        var inp = parseInt(fld.value, 10)
        if (isNaN(inp)) {
            throw getErrorObj("Entry was not a number.")
        }
        if (inp < 1 || inp > 5) {
            throw getErrorObj("Enter only 1 through 5.")
        }
        fld.form.output.value = letters[inp]
    } catch (e) {
        switch (e.name) {
            case "MY_ERROR" :
                alert(e.message)
                fld.form.output.value = ""
                fld.focus()
                fld.select()
                break
            default :
                alert("Reload the page and try again.")
        }
    }
}

<
/SCRIPT>
< /HEAD>
< BODY >
< H1 > Throwing
a
Custom
Error
Object
Exception < /H1>
< HR >
< FORM >
Enter
a
number
from
1
to
5
:
<
INPUT
TYPE = "text"
NAME = "input"
SIZE = 5 >
    < INPUT
TYPE = "button"
VALUE = "Get Letter"
onClick = getLetter(this.form.input) >
    Matching
Letter
is:<
INPUT
TYPE = "text"
NAME = "output"
SIZE = 5 >
    < /FORM>
    < /BODY>
    < /HTML>
