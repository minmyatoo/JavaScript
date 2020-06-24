<HTML>
<HEAD>
<TITLE>Keeping track of Web site access - Happy Codings :-) JavaScript Code Examples</TITLE>
<SCRIPT LANGUAGE="JavaScript" ><!--
function nameDefined(c,n) {
 var s=removeBlanks(c)
 var pairs=s.split(";")
 for(var i=0;i<pairs.length;++i) {
  var pairSplit=pairs[i].split("=")
  if(pairSplit[0]==n) return true
 }
 return false
}
function removeBlanks(s) {
 var temp=""
 for(var i=0;i<s.length;++i) {
  var c=s.charAt(i)
  if(c!=" ") temp += c
 }
 return temp
}
function getCookieValue(c,n) {
 var s=removeBlanks(c)
 var pairs=s.split(";")
 for(var i=0;i<pairs.length;++i) {
  var pairSplit=pairs[i].split("=")
  if(pairSplit[0]==n) return pairSplit[1]
 }
 return ""
}
function insertSiteCounter() {
 readCookie()
 displayCounter()
}
function displayCounter() {
 document.write('<H3 ALIGN="CENTER">')
 document.write("Welcome! You've accessed this site ")
 if(counter==1) document.write("for the first time.")
 else document.write(counter+" times!")
 document.writeln('</H3>')
}
function readCookie() {
 var cookie=document.cookie
 counter=0
 if(nameDefined(cookie,"siteCount"))
  counter=parseInt(getCookieValue(cookie,"siteCount"))
 ++counter
 var newCookie="siteCount="+counter
 newCookie += "; expires=Wednesday, 10-Nov-10 23:12:40 GMT"
 newCookie += "; path=/"
 window.document.cookie=newCookie
}
// --></SCRIPT>
</HEAD>
<BODY BGCOLOR="#FFFFFF">
<SCRIPT LANGUAGE="JavaScript"><!--
insertSiteCounter()
// --></SCRIPT>
<H1 ALIGN="CENTER">Happy Codings :-) C++, C#, HTML, Java, JavaScript Code Examples</H1>
</body>
</HTML>
