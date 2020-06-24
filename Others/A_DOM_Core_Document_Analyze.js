<
html >
< head > < title > DOM
Core
Analyzer - Happy
Codings :-
)
JavaScript
Code
Examples < /title>
< script
language = "JavaScript" >
    function analyzeDocument() {
        var win = open("", "results")
        var doc = win.document
        doc.open()
        doc.writeln("<html><body>")
        getDocumentStructure(document.documentElement, doc)
        doc.writeln("</body></html>")
        doc.close()
    }

function getDocumentStructure(node, doc) {
    doc.write(node.nodeName)
    var children = node.childNodes
    if (children != null && children.length > 0) {
        doc.writeln("<ul>")
        for (var i = 0; i < children.length; ++i) {
            var child = children.item(i)
            doc.write("<li>")
            getDocumentStructure(child, doc)
        }
        doc.writeln("</ul>")
    }
}

<
/script>
< /head>
< body
onload = "analyzeDocument()" >
    < h1
align = "center" > h1
center < /h1>
< p > p < code > p
code < /code> after p </
p >
< p > second
p < /p>
< /body>
< /html>
