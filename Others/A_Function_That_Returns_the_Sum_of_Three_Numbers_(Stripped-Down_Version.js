<
HTML >
< HEAD > < TITLE > Add
three
numbers - Happy
Codings :-
)
C++, C
#, HTML, Java, JavaScript
Code
Examples < /TITLE>
< SCRIPT >
function addThreeNums(inOne, inTwo, inThree) {
    var inOne = Number(inOne);
    var inTwo = Number(inTwo);
    var inThree = Number(inThree);
    return Number(inOne + inTwo + inThree);
}
< /SCRIPT>
< /HEAD>
< BODY >
< FORM
Name = "theForm" >
    < INPUT
Type = Text
Name = "num1" >
    < INPUT
Type = Text
Name = "num2" >
    < INPUT
Type = Text
Name = "num3" >
    < INPUT
Type = Button
Value = "Add Them"
onClick = 'document.write("The sum of the three numbers is " +

addThreeNums(theForm.num1.value, theForm.num2.value, theForm.num3.value)
)
;'>
< /FORM>
< /BODY>
< /HTML>
