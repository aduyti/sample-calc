let num = '';
let firstNum = '';
let secondNum = '';
let operator = '';

const calc = document.getElementById("calc");
calc.addEventListener("click", function (event) {
    if (event.target.getAttribute("ID") != "result") {
        switch (event.target.innerText) {
            case '1':
                num += (1);
                break;
            case '2':
                num += (2);
                break;
            case '3':
                num += (3);
                break;
            case '+':
                setOperator('+');
                break;
            case '4':
                num += (4);
                break;
            case '5':
                num += (5);
                break;
            case '6':
                num += (6);
                break;
            case '-':
                setOperator('-');
                break;
            case '7':
                num += (7);
                break;
            case '8':
                num += (8);
                break;
            case '9':
                num += (9);
                break;
            case '*':
                setOperator('*');
                break;
            case '0':
                num += (0);
                break;
            case '=':
                setOperator('=');
                break;
            case '/':
                setOperator('/');
                break;
            default:
                break;
        }
    }
    console.log(num, firstNum, secondNum, operator);
});

function setOperator(sign) {
    if (operator.length > 0 && firstNum.length > 0) {
        setResult(firstNum, secondNum, operator);
    }
    if (num.length > 0) {
        firstNum = secondNum;
        secondNum = num;
        num = '';
    }
    else {
        return 0;
    }
    if (sign == '=') {
        console.log('=');
        operator = '';
    }
    else {
        operator = sign;
    }
}
function setResult(num1, num2, sign) {
    console.log(num1, num2, sign);
    let result = 0;
    switch (sign) {
        case '+':
            result = parseInt(num1) + parseInt(num2);
            break;
        case '-':
            result = parseInt(num1) + parseInt(num2);
            break;
        case '*':
            result = parseInt(num1) + parseInt(num2);
            break;
        case '/':
            result = parseInt(num1) + parseInt(num2);
            break;
        default:
            break;
    }
    console.log(result);

}