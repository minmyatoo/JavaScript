<
HTML >
< HEAD >
< TITLE > Parallel
Array
Lookup
II - Happy
Codings :-
)
JavaScript
Code
Examples < /TITLE>
< SCRIPT
LANGUAGE = "JavaScript" >
// the data
var regionalOffices = new Array("New York", "Chicago", "Houston", "Portland")
var regionalManagers = new Array("Tedd  Blue", "Jack Red", "Jones Honey", "William Zone")
var regOfficeQuotas = new Array(300000, 250000, 350000, 225000)

// do the lookup into parallel arrays
function getData(form) {
    // make a copy of the text box contents
    var inputText = form.officeInp.value
    // loop through all entries of regionalOffices array
    for (var i = 0; i < regionalOffices.length; i++) {
        // compare uppercase versions of entered text against one entry 
        // of regionalOffices
        if (inputText.toUpperCase() == regionalOffices[i].toUpperCase()) {
            // if they're the same, then break out of the for loop 
            break
        }
    }
    // make sure the i counter hasn't exceeded the max index value
    if (i < regionalOffices.length) {
        // display corresponding entries from parallel arrays
        form.manager.value = regionalManagers[i]
        form.quota.value = regOfficeQuotas[i]
    } else {  // loop went all the way with no matches
        // empty any previous values
        form.manager.value = ""
        form.quota.value = ""
        // advise user
        alert("No match found for " + inputText + ".")
    }
}

<
/SCRIPT>
< /HEAD>
< BODY >
< H1 > Parallel
Array
Lookup
II < /H1>
< HR >
< FORM
NAME = "officeData" >
    < P >
    Enter
a
regional
office:
    <
INPUT
TYPE = "text"
NAME = "officeInp"
SIZE = 35 >
    < INPUT
TYPE = "button"
VALUE = "Search"
onClick = "getData(this.form)" >
    < /P><P>
The
manager
is:
    <
INPUT
TYPE = "text"
NAME = "manager"
SIZE = 35 >
    < BR >
    The
office
quota
is:
    <
INPUT
TYPE = "text"
NAME = "quota"
SIZE = 8 >
    < /P>
    < /FORM>
    < /BODY>
    < /HTML>
