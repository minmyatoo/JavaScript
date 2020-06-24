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
type = "text/javascript" >
    < !--
        function blankFrame() {
            return "<html><body></body></html>";
        }
    //-->
    < /script>
    < /head>
    < frameset
rows = "50, *" >
    < frame
name = "frame1"
id = "frame1"
src = "navSlice.html" >
    < frame
name = "frame2"
id = "frame2"
src = "javascript:parent.blankFrame()" >
    < /frameset>
    < /html>
