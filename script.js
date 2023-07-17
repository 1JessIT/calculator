const result = document.getElementById('result');
const time = document.getElementById('time');
let currentOperator = '';
let firstNumber = '';
let secondNumber = '';

setInterval(() => {
    time.innerHTML = new Date().toLocaleTimeString()
}, 1000)


function setNumber(number) {
    if (currentOperator && secondNumber) {
        result.innerHTML += number;
        secondNumber += number;
    } else if (!currentOperator) {
        if (result.innerHTML === '0') {
            firstNumber = number;
            result.innerHTML = number;
        } else {
            firstNumber += number;
            result.innerHTML += number;
        }
    } else {
        secondNumber = number;
        result.innerHTML = number;
    }
}

function setOperator(operator) {
    currentOperator = operator;
}

function resulting() {
    switch (currentOperator) {
        case '+':
            result.innerHTML = +firstNumber + +secondNumber;
            break;
        case '-':
            result.innerHTML = +firstNumber - +secondNumber;
            break;
        case '*':
            result.innerHTML = +firstNumber * +secondNumber;
            break;
        case '/':
            result.innerHTML = +firstNumber / +secondNumber;
            break;
    }
}

function clean() {
    result.innerHTML = 0;
    currentOperator = '';
    firstNumber = '';
    secondNumber = '';
}


const trueNums = ['0', '1','2','3', '4', '5', '6', '7', '8', '9']


document.addEventListener('keydown', (event) => {
    if(trueNums.includes(event.key)) {
        setNumber(event.key)
    }
})

document.addEventListener('keydown', (back) => {
    console.log();
})
