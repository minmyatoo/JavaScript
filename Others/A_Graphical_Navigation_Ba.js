<HTML>
<HEAD>
<TITLE>Navigation Bar - Happy Codings :-) C++, C#, HTML, Java, JavaScript Code Examples</TITLE>
<SCRIPT LANGUAGE="JavaScript">
<!-- start
function goNext() {
    var currOffset = parseInt(parent.currTitle)
    if (currOffset < 5) {
        currOffset += 1
        parent.entryForms.location.href = "dh" + currOffset + ".htm"
        parent.instructions.location.hash = "help" + currOffset
    } else {
        alert("This is the last form.")
    }
}
function goPrev() {
    var currOffset = parseInt(parent.currTitle)
    if (currOffset > 1) {
        currOffset -= 1
        parent.entryForms.location.href = "dh" + currOffset + ".htm"
        parent.instructions.location.hash = "help" + currOffset
    } else {
        alert("This is the first form.")
    }
}
// end -->
</SCRIPT>
</HEAD>
<BODY bgColor="white">
<MAP NAME="navigation">
<AREA SHAPE="RECT" COORDS="25,80,66,116" HREF="javascript:goNext()">
<AREA SHAPE="RECT" COORDS="24,125,67,111" HREF="javascript:goPrev()">
</MAP>
<IMG SRC="http://www.happycodings.com/images/HappyCodings.png" HEIGHT=240 WIDTH=80 BORDER=0 USEMAP="#navigation">
</BODY>
</HTML>
