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

    < !--Begin

function a_plus_b(form) {
    a = eval(form.a.value)
    b = eval(form.b.value)
    c = a + b
    form.ans.value = c
}

function a_minus_b(form) {
    a = eval(form.a.value)
    b = eval(form.b.value)
    c = a - b
    form.ans.value = c
}

function a_times_b(form) {
    a = eval(form.a.value)
    b = eval(form.b.value)
    c = a * b
    form.ans.value = c
}

function a_div_b(form) {
    a = eval(form.a.value)
    b = eval(form.b.value)
    c = a / b
    form.ans.value = c
}

function a_pow_b(form) {
    a = eval(form.a.value)
    b = eval(form.b.value)
    c = Math.pow(a, b)
    form.ans.value = c
}

// End -->
<
/SCRIPT>

< BODY >
< CENTER >
< FORM
name = "formx" > < input
type = text
size = 4
value = 12
name = "a" >
    < input
type = "button"
value = "  +  "
onClick = "a_plus_b(this.form)" >
    < input
type = "button"
value = "  -  "
onClick = "a_minus_b(this.form)" >
    < input
type = "button"
value = "  x  "
onClick = "a_times_b(this.form)" >
    < input
type = "button"
value = "  /  "
onClick = "a_div_b(this.form)" >
    < input
type = "button"
value = "  ^  "
onClick = "a_pow_b(this.form)" >
    < input
type = "number"
size = 4
value = 3
name = "b" > =
<
input
type
"number"
value = 0
name = "ans"
size = 9 >
    < /FORM>
    < /CENTER>

    < p > < center >
    < font
face = "arial, helvetica"
size = "8" > Happy
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
