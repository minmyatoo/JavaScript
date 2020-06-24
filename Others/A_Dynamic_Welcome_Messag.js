<HTML>
<HEAD>
<TITLE>Date String Maker - Happy Codings :-) JavaScript Code Examples</TITLE>
<SCRIPT LANGUAGE="JavaScript">
function MakeArray(n) {
    this.length = n
    return this
}
monthNames = new MakeArray(12)
monthNames[1] = "January"
monthNames[2] = "February"
monthNames[3] = "March"
monthNames[4] = "April"
monthNames[5] = "May"
monthNames[6] = "June"
monthNames[7] = "July"
monthNames[8] = "August"
monthNames[9] = "September"
monthNames[10] = "October"
monthNames[11] = "November"
monthNames[12] = "December"
dayNames = new MakeArray(7)
dayNames[1] = "Sunday"
dayNames[2] = "Monday"
dayNames[3] = "Tuesday"
dayNames[4] = "Wednesday"
dayNames[5] = "Thursday"
dayNames[6] = "Friday"
dayNames[7] = "Saturday"
function customDateString(oneDate) {
    var theDay = dayNames[oneDate.getDay() + 1]
    var theMonth = monthNames[oneDate.getMonth() + 1]
    var theYear = oneDate.getYear()
    theYear += (theYear < 100) ? 1900 : 0
    return theDay + ", " + theMonth + " " + oneDate.getDate() + ", " + theYear
}
function dayPart(oneDate) {
    var theHour = oneDate.getHours()
    if (theHour <6 )
        return "wee hours"
    if (theHour < 12)
        return "morning"
    if (theHour < 18)
        return "afternoon"
    return "evening"
}
</SCRIPT>
</HEAD>
<BODY>
<H1> Welcome!</H1>
<SCRIPT LANGUAGE="JavaScript">
today = new Date()
var header = (customDateString(today)).italics()
header += "<BR>We hope you are enjoying the "
header += dayPart(today) + "."
document.write(header)
</SCRIPT>
<HR>
</BODY>
</HTML>
