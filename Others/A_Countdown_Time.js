<
HTML >
< HEAD >
< TITLE > Count
Down
Timer - Happy
Codings :-
)
C++, C
#, HTML, Java, JavaScript
Code
Examples < /TITLE>
< SCRIPT
LANGUAGE = "JavaScript" >
    < !--
var running = false
var endTime = null
var timerID = null

function startTimer() {
    running = true
    now = new Date()
    now = now.getTime()
    // change last multiple for the number of minutes
    endTime = now + (1000 * 60 * 1)
    showCountDown()
}

function showCountDown() {
    var now = new Date()
    now = now.getTime()
    if (endTime - now <= 0) {
        stopTimer()

        alert("Time is up.  Put down your pencils.")
    } else {
        var delta = new Date(endTime - now)
        var theMin = delta.getMinutes()
        var theSec = delta.getSeconds()
        var theTime = theMin
        theTime += ((theSec < 10) ? ":0" : ":") + theSec
        document.forms[0].timerDisplay.value = theTime
        if (running) {
            timerID = setTimeout("showCountDown()", 1000)
        }
    }
}

function stopTimer() {
    clearTimeout(timerID)
    running = false
    document.forms[0].timerDisplay.value = "0:00"
}

//-->
<
/SCRIPT>
< /HEAD>
< BODY >
< FORM >
< INPUT
TYPE = "button"
NAME = "startTime"
VALUE = "Start 1 min. Timer"
onClick = "startTimer()" >
    < INPUT
TYPE = "button"
NAME = "clearTime"
VALUE = "Clear Timer"
onClick = "stopTimer()" > < P >
    < INPUT
TYPE = "text"
NAME = "timerDisplay"
VALUE = "" >
    < /FORM>
    < /BODY>
    < /HTML>
