function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}

function removeLastDigit() {
    let display = document.getElementById('display');
    let currentValue = display.value;
    
    //Check if current value is a number.
    if (!isNaN(currentValue)) {
        //Convert the value to a text string.
        let valueString = currentValue.toString();

        //Remove last digit.
        let newValue = valueString.slice(0, -1);

        //Update the value on the display.
        display.value = newValue;
    }
}