<
html >

< head >
< title > canvas
Object - Happy
Codings :-
)
JavaScript
Code
Examples < /title>
< script
type = "text/javascript" >
    function draw() {
        var canvas = document.getElementById("chart");
        if (canvas.getContext) {
            var context = canvas.getContext("2d");
            context.lineWidth = 20;

            context.strokeStyle = "red";
            context.beginPath();
            context.moveTo(20, 90);
            context.lineTo(20, 10);
            context.stroke();

        }
    }
    < /script>
    < style
type = "text/css" >
    canvas
{
    border: 1
    px
    solid
    black;
}
<
/style>
< /head>
< body
onload = "draw();" >
    < h1 > canvas
Object < /h1>
< hr / >
< canvas
id = "chart"
width = "130"
height = "100" > < /canvas>
    < /body>
    < /html>
