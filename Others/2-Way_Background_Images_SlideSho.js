Positionable
Images
or
Full
Page - Space
Display

Functions:
    Runs
an
image
slideshow in the
background
of
the
page,
    underneath
the
page
content.Used
with the accompanying
sytle
script, images
are
discretely
positionable in the
page
space, just
like
a
regular
slideshow.Leave
out
the
style
script, and
the
slideshow
runs
with full page - space
presentation.

< script
language = "JavaScript" >

// set the following variables

// Set speed (milliseconds)
var speed = 1000

// Specify the image files
var Pic = new Array() // don't touch this
// to add more images, just continue
// the pattern, adding to the array below

Pic[0] = 'slideshow1_1.jpg'
Pic[1] = 'slideshow1_2.jpg'
Pic[2] = 'slideshow1_3.jpg'
Pic[3] = 'slideshow1_4.jpg'
Pic[4] = 'slideshow1_5.jpg'

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

//-->
<
/script>

Modify
your < body > tag
to
add
the
following
onload
event

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
