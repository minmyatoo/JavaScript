<
html >
< head >
< title > Happy
Codings :-
)
JavaScript
Code
Examples < /title>
< /head>

< body >
< form
id = "Form1"
name = "Form1" >
    Form1
: <
input
type = "text" >
    < /form>

    < form
id = "Form2"
name = "Form2" >
    Form2
: <
input
type = "text" >
    < /form>

    < p >
    You
can
use
the
form
's number:
< /p>
< script
type = "text/javascript" >

    document.write("<p>The first form's name is: ")
document.write(document.forms[0].name + "</p>")
document.write("<p>The second form's name is: ")
document.write(document.forms[1].name + "</p>")

< /script>

< p > < b > Or, the
form
's name:</b></p>
< script
type = "text/javascript" >
    document.write("<p>The first form's name is: ")
document.write(document.getElementById("Form1").name + "</p>")
document.write("<p>The second form's name is: ")
document.write(document.getElementById("Form2").name + "</p>")
< /script>
< /body>

< /html>
