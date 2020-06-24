When
an
image
is
clicked, this
script
will
show
the
image
URL in a
textbox.Useful
for cases where
you
want
others
to
be
able
to
copy
the
image
address
easily
for linking...
such as
for banners, logo graphics, etc.A
single
instance
of
the
script
can
be
attached
to
any
number
of
images in the
page.

---------------------

    Paste
the
following
script
into
the < head >
... <
/head> of
your
page.There
are
no
script
set - ups
needed.


< script
language = "JavaScript" >

var isReady = false;

function showAddress(What) {
    if (isReady) {
        document.Which.Where.value = What;
        document.Which.Where.focus();
        document.Which.Where.select();
    } else {
        alert("This page is not fully loaded yet...\nPlease wait for the page to finish loading.");
    }
}

function clearAddress() {
    if (isReady) {
        document.Which.Where.value = '';
    } else {
        alert("This page is not fully loaded yet...\nPlease wait for the page to finish loading.");
    }
}

<
/script>


The
Body
Tag
Onload
Event
------------------------------------

    Add
onload = "isReady=true"
to
your
body
tag, as
shown
below.This
is
necessary
to
prevent
false
object
calls
prior
to
the
page
being
fully
loaded.Thus
:

<
body
onload = "isReady=true" >

    The
TextBox
-------------------------

    Insert
the
following
code
for the text
box in your
page.(It
may
be
anywhere in your
page.
)
Do
not
change
the
form
or
field
names.


< form
name = "Which" >
    < input
type = "text"
size = "60"
name = "Where" >
    < /form>


To
clear
the
textbox
from
a
link in the
page, use
this
:



<
a
href = "#"
onClick = "clearAddress()" >
    Clear
    < /a>


Step
Four:  Attaching
To
The
Images
-----------------------------------

    You
may
attach
the
script
to as many
images as you
wish.To
attach
to
the
image
add
onMouseDown = "showAddress(this.src)"
to
the
img
src
tag, as
shown in the
sample
below.


< img
src = "http://happycodings.com/image.gif"
width = "100"
height = "100"
border = "0"
onMouseDown = "showAddress(this.src)" >


    Note
that
you
can
use
either
the
explicit
http:// address of
    the
image, or
just
a
relative
address
to
the
image
file.In
the
later
case,
it
will
still
return the
full
http
path
to
the
image in the
text
box.
