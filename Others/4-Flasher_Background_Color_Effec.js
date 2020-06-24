<
script
language = "JavaScript" >
    < !--

var backColor = new Array(); // don't change this

// Set the speed (in milliseconds).

var dwellTime = 500;

// Enter the colors you wish to use. The final
// backColor[4] should be the fixed color of the
// page.

backColor[0] = '#FF0000';
backColor[1] = '#008000';
backColor[2] = '#000099';
backColor[3] = '#000000';
backColor[4] = '#FFFFFF';

// Do not edit below this line.
//-----------------------------

function flashBG(whichColor) {
    document.bgColor = backColor[whichColor];
}

var t = null;
var d = dwellTime;

t = setTimeout('flashBG(0)', (d - d));
t = setTimeout('flashBG(1)', (d));
t = setTimeout('flashBG(2)', (d * 2));
t = setTimeout('flashBG(3)', (d * 3));
t = setTimeout('flashBG(4)', (d * 4));

t = null;

//-->
<
/script>
