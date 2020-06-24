<
script
language = "JavaScript" >
< !--
    pageFor640 = "pageFor640.html";
pageFor800 = "pageFor800.html";
pageFor1024 = "pageFor1024.html";
pageForLarger = "pageForLarger.html";

// Set showAlert to "yes" if you wish an alert box to appear
// when the visitor hits your referer page; otherwise, set
// it to "no"

showAlert = "yes";

// This is the message that will be seen if showAlert is
// used; alter it as needed.

sayOnAlert = "Redirecting to a page designed for your screen size...";

// DO NOT EDIT BELOW THIS LINE.
// ----------------------------

var Wide = screen.width;

if (Wide <= 640) {
    if (showAlert == "yes") {
        alert(sayOnAlert);
    }
    window.location = pageFor640;
} else if (Wide <= 800) {
    if (showAlert == "yes") {
        alert(sayOnAlert);
    }
    window.location = pageFor800;
} else if (Wide <= 1024) {
    if (showAlert == "yes") {
        alert(sayOnAlert);
    }
    window.location = pageFor1024;
} else {
    if (showAlert == "yes") {
        alert(sayOnAlert);
    }
    window.location = pageForLarger;
}

//-->
<
/script>
