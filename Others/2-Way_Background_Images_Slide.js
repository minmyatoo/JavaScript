<
HEAD >
< title > Happy
Codings :-
)
JavaScript
Code
Examples < /title>

< SCRIPT
LANGUAGE = "JavaScript" >

// set the following variables

// Set speed (milliseconds)
var speed = 1000

// Specify the image files
var Pic = new Array() // don't touch this
// to add more images, just continue
// the pattern, adding to the array below

Pic[0] = '1.gif'
Pic[1] = '2.gif'
Pic[2] = '3.gif'
Pic[3] = '4.gif'

// do not edit anything below this line

var t
var j = 0
var p = Pic.length

var preLoad = new Array()
for (i = 0; i < p; i++) {
    preLoad[i] = new Image()
    preLoad[i].src = Pic[i]
}

function runBGSlideShow() {
    if (document.body) {
        document.body.background = Pic[j];
        j = j + 1
        if (j > (p - 1)) j = 0
        t = setTimeout('runBGSlideShow()', speed)
    }
}

//  End -->
<
/script>

< /HEAD>

< body
onload = "runBGSlideShow()" >

    Method
One - Positionable
Images
----------

    Put
the
following
style
sheet in the < head > of
your
page.Normally
it
will
go * before * the
script
above.

< style >
body
{
    background - repeat
:
    no - repeat;
    background - position
:
    200
    100;
}
<
/style>

Set
the
position
x
y in pixels in the
background - position
element
to
position
the
images in the
page.Do
not
use
commas
between
the
values
!


    Method
Two - Full
Page - Space
Background
----------

    Easy - just
omit
the
style
script
above
from
the
page.The
background
images
will
then
repeat
across
the
page, as
usual.


< p > < center >
< font
face = "arial, helvetica"
size
"8" > Happy
Codings :-
)
JavaScript
Code
Examples < br >
by < a
href = "http://javascript.happycodings.com/" > JavaScript
Code
Examples < /a></
font >
< /center><p>
