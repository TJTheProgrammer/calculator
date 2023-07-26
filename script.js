var input1 = null;
var input2 = "";
var operator = null;

var decimal = false;

function division() {
    operation=division;
}

function digit(num) {
    input2 = input2.toString() + num;
    document.getElementById("current").innerHTML = input2;
}

function decimalPoint() {
    if (decimal == false) {
        decimal = true;
        input2 = input2.toString() + ".";
        document.getElementById("current").innerHTML = input2;  
    }
}

function operation(selection) {
    if (operator == null && input1 == null) {
        operator = selection;
        input1 = input2;
        input2 = "";
        document.getElementById("previousandOp").innerHTML = input1 +  " " + operator;
        document.getElementById("current").innerHTML = input2;
    
}
    else {
        equality()
    }

}

function equality() {
     if (input1 == null || operator == null) {

     }
     else {
        switch(operator) {
            case "+":
                input2 = parseFloat(input1) + parseFloat(input2);
                input1 = null;
                document.getElementById("current").innerHTML = input2;
                document.getElementById("previousandOp").innerHTML = input1;
                operator = null;
            break;

            case "-":
                input2 = parseFloat(input1) - parseFloat(input2);
                input1 = null;
                document.getElementById("current").innerHTML = input2;
                document.getElementById("previousandOp").innerHTML = input1;
                operator = null;
            break;
                

            case "*":
                input2 = parseFloat(input1) * parseFloat(input2);
                input1 = null;
                document.getElementById("current").innerHTML = input2;
                document.getElementById("previousandOp").innerHTML = input1;
                operator = null;
            break;

            case "÷":
                input2 = parseFloat(input1) / parseFloat(input2);
                input1 = null;
                document.getElementById("current").innerHTML = input2;
                document.getElementById("previousandOp").innerHTML = input1;
                operator = null;
            break;
        }
     }
}


function deletion() {
    var current = input2.toString();
    input2 = current.slice(0, -1);
    document.getElementById("current").innerHTML = input2;
}

function clearing() {
    input2 = "";
    document.getElementById("current").innerHTML = input2;
}

