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
    // console.log(num, firstNum, secondNum, operator);
});

function setOperator(sign) {
    // console.log(num, firstNum, secondNum, operator);
    debugger;

    if (num.length == 0) {
        if (sign == '=') {
            showResult(parseInt(firstNum));
            operator = '';
        } else {
            operator = sign;
        }
        return;
    }

    if (num.length > 0) {
        if (secondNum.length > 0) { firstNum = secondNum; }

        secondNum = num;
        num = '';
    }

    if (operator.length > 0 && firstNum.length > 0 && secondNum.length > 0) {
        let res = setResult();
        showResult(res);
        if (sign == '=') {
            sign = '';
        }
    }
    if (sign == '=') {
        // console.log('=');
        if (secondNum.length > 0 && operator.length == 0) {
            showResult(parseInt(secondNum));
        }

        operator = '';
    }
    else {
        operator = sign;
    }
}
function setResult() {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseInt(firstNum) + parseInt(secondNum);
            break;
        case '-':
            result = parseInt(firstNum) - parseInt(secondNum);
            break;
        case '*':
            result = parseInt(firstNum) * parseInt(secondNum);
            break;
        case '/':
            result = parseInt(firstNum) / parseInt(secondNum);
            break;
        default:
            break;
    }
    return result;
}
function showResult(res) {
    firstNum = '' + res;
    secondNum = '';
    document.getElementById('result').innerText = res;
    console.log("result", res);
}