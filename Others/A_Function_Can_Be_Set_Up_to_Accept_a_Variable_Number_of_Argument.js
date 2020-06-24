<
html >
< head >
< title > A
Function
Can
Be
Set
Up
to
Accept
a
Variable
Number
of
Arguments - Happy
Codings :-
)<
/title>
< script
type = "text/javascript" >
    < !--
        function welcomeMessage(userName) {
            if (userName != null) {
                document.writeln("Hello, " + userName);
            } else {
                document.writeln("Happy Codings :-) C++, C#, HTML, Java, JavaScript Code Examples!");
            }
            numArgs = welcomeMessage.arguments.length;
            if (numArgs > 1) {
                for (var i = 1; i < numArgs; i++) {
                    document.writeln("\"" + welcomeMessage.arguments[i] + "\"");
                }
            }
        }
    // -->
    < /script>
    < /head>
    < body >
    < script
type = "text/javascript" >
    < !--
var userName = "Jhon", extraMsg = "It has been a long time!";
var userName2 = null;
var extraMsg1 = "Why dont you come here?";
var extraMsg2 = "You can enjoy!";
welcomeMessage(userName, extraMsg);
document.writeln("<hr>");
welcomeMessage(userName2, extraMsg1, extraMsg2);
// -->
<
/script>
< /body>
< /html>
