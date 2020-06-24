<
html >
< head >
< title > JavaScript
Unleashed - Happy
Codings :-
)
C++, C
#, HTML, Java, JavaScript
Code
Examples < /title>
< script
type = "text/javascript" >
    < !--
        function welcomeMessage(userName) {
            if (userName != null) {
                document.writeln("Hello, " + userName);
            } else {
                document.write("variable \"userName\" would show : ");
                document.writeln(userName);
            }
        }
    // -->
    < /script>
    < /head>
    < body >
    < script
type = "text/javascript" >
    < !--
        document.writeln("First call to welcomeMessage(),\n");
welcomeMessage("Mr.");
document.writeln("<HR>\nSecond call to welcomeMessage(),\n");
welcomeMessage();
// -->
<
/script>
< /body>
< /html>
