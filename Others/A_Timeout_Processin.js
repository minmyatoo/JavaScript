<HTML>
<HEAD>
<TITLE>Timeout Program - Happy Codings :-) JavaScript Code Examples</TITLE>
<SCRIPT LANGUAGE="JavaScript"><!--
function setTimer() {
 timer=setTimeout("alert('Too slow!')",10000)
}
function clearTimer() {
 clearTimeout(timer)
 alert("Hi!")
}
// --></SCRIPT>
</HEAD>
<BODY>
<SCRIPT LANGUAGE="JavaScript"><!--
setTimer()
// --></SCRIPT>
<FORM>
<INPUT TYPE="BUTTON" VALUE="Click here within ten seconds." ONCLICK="clearTimer()">
</FORM>
</BODY>
</HTML>
