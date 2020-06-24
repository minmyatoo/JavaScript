<
html >
< head >
< title > Happy
Codings :-
)
JavaScript
Code
Examples < /title>
< script
language = "JavaScript" >
    function goAccept() {
        document.all.myB.accept = "image/gif";
    }
    < /script>
    < /head>
    < body
onLoad = "goAccept();" >
    < input
type = "text"
name = "textfield"
size = "50"
accept = "image/gif"
value = 'The content type of this field is "text/html"' >
    < input
type = "button"
id = "myB"
value = 'The content type for this button is "image/gif"' >
    < /body>
    < /html>
