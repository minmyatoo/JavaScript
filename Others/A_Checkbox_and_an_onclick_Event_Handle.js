<
html >
< head >
< title > Checkbox
Event
Handler - Happy
Codings :-
)
JavaScript
Code
Examples < /title>
< style
type = "text/css" >
    #myGroup
{
    visibility:hidden
}
<
/style>
< script
type = "text/javascript" >
    function toggle(chkbox, group) {
        var visSetting = (chkbox.checked) ? "visible" : "hidden";
        document.getElementById(group).style.visibility = visSetting;
    }

function swap(radBtn, group) {
    var modemsVisSetting = (group == "modems") ? ((radBtn.checked) ? "" : "none") : "none";
    document.getElementById("modems").style.display = modemsVisSetting;
}

<
/script>
< /head>
< body >
< form >
< input
type = "checkbox"
name = "monitor"
onclick = "toggle(this, 'myGroup')" / > Monitor
    < span
id = "myGroup" >
    < input
type = "radio" / > 15
"
< /span>
< /form>
< /body>
< /html>
