<
HTML >
< HEAD >
< TITLE > Displaying
Random
Ads - Happy
Codings :-
)
C++, C
#, HTML, Java, JavaScript
Code
Examples < /TITLE>
< SCRIPT
LANGUAGE = "JavaScript" > < !--
    urls = new Array("http://javascript.happycodings.com/",
    "http://csharp.happycodings.com/",
    "http://html-css.happycodings.com/")

function insertAd() {
    adIX = Math.round(Math.random() * (urls.length - 1));
    document.write('<A HREF="' + urls[adIX] + '">');
    document.writeln('</A>');
}

// --></SCRIPT>
<
/HEAD>
< BODY >
< SCRIPT
LANGUAGE = "JavaScript" > < !--
    insertAd();
// --></SCRIPT>
<
H1 > Displaying
Random
Ads < /H1>

< p >
Happy
Codings :-
)
JavaScript
Code
Examples
< br >
< /p>

< /body>
< /HTML>
