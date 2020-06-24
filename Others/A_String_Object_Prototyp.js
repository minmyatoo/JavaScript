<HTML>
<HEAD>
<TITLE>String Object Prototype - Happy Codings :-) JavaScript Code Examples</TITLE>
<SCRIPT LANGUAGE="JavaScript1.1">
function makeItHot() {
    return "<FONT COLOR='red'>" + this.toString() + "</FONT>"
}
String.prototype.hot = makeItHot
</SCRIPT>
<BODY>
<SCRIPT LANGUAGE="JavaScript1.1">
document.write("<H1>This site is on " + "FIRE".hot() + "!!</H1>")
</SCRIPT>
</BODY>
</HTML>
