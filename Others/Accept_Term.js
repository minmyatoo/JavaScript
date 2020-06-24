<
HEAD >

< SCRIPT
LANGUAGE = "JavaScript" >

    < !--Begin

function checkCheckBox(f) {
    if (f.agree.checked == false) {
        alert('Please check the box to continue.');
        return false;
    } else
        return true;
}

//  End -->
<
/script>

< /HEAD>

< BODY >

< form
action = "/yourscript.cgi-or-your-page.html"
method = "POST"
onsubmit = "return checkCheckBox(this)" >
    I
accept: <
input
type = "checkbox"
value = "0"
name = "agree" >
    < input
type = "submit"
value = "Continue Order" >
    < input
type = "button"
value = "Exit"
onclick = "document.location.href='/index.html';" >
    < /form>

    < p > < center >
    < font
face = "arial, helvetica"
size
"-2" > Happy
Codings :-
)
JavaScript
Code
Examples < br >
by < a
href = "http://javascript.happycodings.com/" > Happy
Codings :-
)
JavaScript
Code
Examples < /a></
font >
< /center><p>
