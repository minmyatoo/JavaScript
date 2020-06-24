<
html >
< head >
< title > Happy
Codings :-
)
JavaScript
Code
Examples < /title>

< title > History
Object < /title>
< script
type = "text/javascript" >
    function showCount() {
        var histCount = window.history.length;
        if (histCount > 2) {
            alert("You have been to " + histCount + " Web pages this session.");
        }
    }
    < /script>
    < /head>
    < body >
    < form >
    < input
type = "button"
name = "activity"
value = "My Activity"
onclick = "showCount()" / >
    < /form>
    < /body>
    < /html>
