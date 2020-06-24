<
HEAD >

< SCRIPT
LANGUAGE = "JavaScript" >

    < !--Begin
// THESE VARIABLES CAN BE CHANGED //
var myMainMessage = "  Happy Codings :-) C++, C#, HTML, Java, JavaScript Code Examples";
var speed = 150;
var scrollingRegion = 50;

// END CHANGEABLE VARIABLES //
var startPosition = 0;

function mainTextScroller() {
    var mainMessage = myMainMessage;
    var tempLoc = (scrollingRegion * 3 / mainMessage.length) + 1;
    if (tempLoc < 1) {
        tempLoc = 1
    }
    var counter;
    for (counter = 0; counter <= tempLoc; counter++)
        mainMessage += mainMessage;
    document.mainForm.mainTextScroller.value = mainMessage.substring(startPosition, startPosition + scrollingRegion);
    startPosition++;
    if (startPosition > scrollingRegion) startPosition = 0;
    setTimeout("mainTextScroller()", speed);
}

//  End -->
<
/script>

< /HEAD>

< BODY
onLoad = "mainTextScroller()" >

    < form
name = "mainForm" >
    < center >
    < input
type = "text"
name = "mainTextScroller"
size = "40"
value >
< /center>
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
href = "http://www.happycodings.com/" > JavaScript
Code
Examples < /a></
font >
< /center><p>
