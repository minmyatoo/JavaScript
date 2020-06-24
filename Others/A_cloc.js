<
html >
< head >
< title > Happy
Codings :-
)
JavaScript
Code
Examples < /title>
< /head>

< body
onLoad = "show5()" >

    < span
id = "liveclock"
style = "position:absolute;left:0;top:0;" > < /span>

    < script
language = "JavaScript" >
    < !--
        function show5() {
            if (!document.layers && !document.all)
                return;

            var Digital = new Date();
            var hours = Digital.getHours();
            var minutes = Digital.getMinutes();
            var seconds = Digital.getSeconds();
            var dn = "AM";
            if (hours > 12) {
                dn = "PM";
                hours = hours - 12;
            }
            if (hours == 0)
                hours = 12;
            if (minutes <= 9)
                minutes = "0" + minutes;
            if (seconds <= 9)
                seconds = "0" + seconds;

            myclock = "<font size='5' face='Arial' ><b><font size='2'>Happy Codings: </font>" + hours + ":" + minutes + ":"
                + seconds + " " + dn + "</b></font>";

            if (document.layers) {
                document.layers.liveclock.document.write(myclock);
                document.layers.liveclock.document.close();
            } else if (document.all)
                liveclock.innerHTML = myclock
            setTimeout("show5()", 1000)
        }

    //-->
    < /script>

    < /body>
    < /html>
