<
!--
    Instructions
:
Set
theTarget
variable
value in the
script, as
noted.Set
the
title, addresses, and
items in the
form, as
shown.Insert
this
entire
block
of
code--
both
the
script
and
the
form-- in your
page
where
the
menu
should
appear.
//-->

< script
language = "JavaScript" >

// Set the target window or frame
// _top opens in the same window
// _blank opens in a new window
// Use the frame name to open to a frameset target

var theTarget = "_blank";

function goThere() {
    if (!document.theForm.theMenu.selectedIndex == "") {
        window.open(document.theForm.theMenu.options[document.theForm.theMenu.selectedIndex].value, theTarget, "");
    }
}

<
/script>

< form
name = "theForm" >
    < select
name = "theMenu"
size = 1
onChange = "goThere()" >
    < option
selected
value = "" > Happy
Codings :-
)
JavaScript
Code
Examples
< option
value = "http://javascript.happycodings.com/" > Item
One
< option
value = "http://html-css.happycodings.com/" > Item
Two
< option
value = "http://cplusplus.happycodings.com/" > Item
Three
< option
value = "http://java.happycodings.com/" > Item
Four
< option
value = "http://www.happycodings.com/" > Item
Five
< /select>
< /form>
