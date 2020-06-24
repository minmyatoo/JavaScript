<
html >
< head >
< title > Happy
Codings :-
)
JavaScript
Code
Examples < /title>
< link
rel = "stylesheet"
type = "text/css"
href = "ext-3.0.0/resources/css/ext-all.css" / >
    < script
type = "text/javascript"
src = "ext-3.0.0/adapter/ext/ext-base.js" > < /script>
    < script
type = "text/javascript"
src = "ext-3.0.0/ext-all.js" > < /script>

    < /head>
    < body >
    < script
type = "text/javascript" >
    Ext.onReady(function () {


        new Ext.Window({
            layout: 'hbox',
            height: 300,
            width: 300,
            title: 'A Container with an HBox layout',
            layoutConfig: {
                pack: 'start'
            },
            defaults: {
                frame: true,
            },
            items: [
                {
                    title: 'Panel 1',
                    height: 100
                },
                {
                    title: 'Panel 2',
                    height: 75,
                    width: 100
                },
                {
                    title: 'Panel 3',
                    height: 200
                }
            ]
        }).show();


    });
<
/script>
< div
id = 'div1' > Happy
Codings :-
)
C++, C
#, HTML, Java, JavaScript
Code
Examples < /div>
< /body>
< /html>
