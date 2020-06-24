<
HTML >
< HEAD >
< TITLE > Parallel
Array
Lookup - Happy
Codings :-
)
JavaScript
Code
Examples < /TITLE>
< SCRIPT
LANGUAGE = "JavaScript" >
// the data
var regionalOffices = new Array("New York", "Chicago", "Houston", "Portland")
var regionalManagers = new Array("Jack Hadson", "Jenny Blue", "Jones William", "Jhon Cook")
var regOfficeQuotas = new Array(300000, 250000, 350000, 225000)

// do the lookup into parallel arrays
function getData(form) {
    var i = form.offices.selectedIndex
    form.manager.value = regionalManagers[i]
    form.quota.value = regOfficeQuotas[i]
}

<
/SCRIPT>
< /HEAD>
< BODY
onLoad = "getData(document.officeData)" >
    < H1 > Parallel
Array
Lookup < /H1>
< HR >
< FORM
NAME = "officeData" >
    < P >
    Select
a
regional
office:
    <
SELECT
NAME = "offices"
onChange = "getData(this.form)" >
    < OPTION > New
York
< OPTION > Chicago
< OPTION > Houston
< OPTION > Portland
< /SELECT>
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
