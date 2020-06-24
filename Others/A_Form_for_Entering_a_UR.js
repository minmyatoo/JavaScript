<
HTML >
< HEAD >
< TITLE > Load
URL - Happy
Codings :-
)
JavaScript
Code
Examples < /TITLE>
< SCRIPT
LANGUAGE = "JavaScript" > < !--
        function loadFrames() {
            ix = document.URLform.protocol.options.selectedIndex
            urlString = document.URLform.protocol.options[ix].value + "//"
            urlString += document.URLform.hostname.value
            path = document.URLform.path.value
            if (path.length > 0) {
                if (path.charAt(0) != "/")
                    path = "/" + path
            }
            urlString += path
            parent.frames[1].location.href = urlString
        }
    // --></SCRIPT>
    < /HEAD>
    < BODY >
    < FORM
ACTION = ""
NAME = "URLform" >
    < P > Select
protocol:
    <
SELECT
NAME = "protocol"
SIZE = "1" >
    < OPTION
VALUE = "file:"
SELECTED = "SELECTED" > file < /OPTION>
    < OPTION
VALUE = "http:" > http < /OPTION>
    < OPTION
VALUE = "ftp:" > ftp < /OPTION></
SELECT > < /P>
< P > Enter
host
name: <
INPUT
TYPE = "TEXT"
NAME = "hostname"
SIZE = "45" > < /P>
    < P > Enter
path:      <
INPUT
TYPE = "TEXT"
NAME = "path"
SIZE = "50" > < /P>
    < INPUT
TYPE = "BUTTON"
NAME = "load"
VALUE = "Load URL"
ONCLICK = "loadFrames()" >
    < /FORM>
    < /BODY>
    < /HTML>
