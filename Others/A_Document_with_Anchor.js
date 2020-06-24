<HTML>
<HEAD>
<TITLE>location.hash Property - Happy Codings :-) C++, C#, HTML, Java, JavaScript Code Examples</TITLE>
<SCRIPT LANGUAGE="JavaScript">
function goNextAnchor(where) {
    window.location.hash = where
}
</SCRIPT>
</HEAD>
<BODY>
<A NAME="start"><H1>Top</H1></A>
<FORM>
<INPUT TYPE="button" NAME="next" VALUE="NEXT" onClick="goNextAnchor('sec1')">
</FORM>
<HR>
<A NAME="sec1"><H1>Section 1</H1></A>
<FORM>
<INPUT TYPE="button" NAME="next" VALUE="NEXT" onClick="goNextAnchor('sec2')">
</FORM>
<HR>
<A NAME="sec2"><H1>Section 2</H1></A>
<FORM>
<INPUT TYPE="button" NAME="next" VALUE="NEXT" onClick="goNextAnchor('sec3')">
</FORM>
<HR>
<A NAME="sec3"><H1>Section 3</H1></A>
<FORM>
<INPUT TYPE="button" NAME="next" VALUE="BACK TO TOP" onClick="goNextAnchor('start')">
</FORM>
</BODY>
</HTML>
