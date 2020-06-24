<
html >
< head >
< title > A
for Loop Used
to
Count
from
0
to
99 - Happy
Codings :-
)
JavaScript
Code
Examples < /title>
< body >
< script
type = "text/javascript" >
    < !--
        document.write("Numbers 0 through 99:");
document.write('<hr size="0" width="50%" align="left">');

for (var i = 0; i < 100; ++i) {
    if (i % 10 == 0) {
        document.write('<br>');
    }
    document.write(i + ",");
}
document.write("<br><br>After completing the loop, i equals : " + i);
// -->
<
/script>
< /body>
< /html>
