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
type = "text/javascript"
src = "js/jquery-1.3.2.js" > < /script>
    < script
type = "text/javascript" >
    $(document).ready(function () {

        var p = $("p:last");
        var offset = p.offset();
        p.html("left: " + offset.left + ", top: " + offset.top);


    });
<
/script>

< /head>
< body >
< p > Hello < /p><p>2nd Paragraph</
p >

< p >
Happy
Codings :-
)
JavaScript
Code
Examples
< br >
< /p>
< /body>
< /html>
