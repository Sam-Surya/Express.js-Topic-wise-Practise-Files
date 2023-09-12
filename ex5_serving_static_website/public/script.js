//////////////////////////////////////////////////
//Script for Simple Calculator
function editDisplay(value) {
    var display = document.getElementById('dis');
    display.value += value;
}
function clearDisplay() {
    var display = document.getElementById('dis');
    display.value = '';
}
function backDisplay(value) {
    var display = document.getElementById('dis');
    display.value = display.value.slice(0, -1);
}
function calDisplay(value) {
    var display = document.getElementById('dis');
    try {
        display.value = eval(display.value).toString();
    }
    catch (error) {
        display.value = 'Error';
    }
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////Script For String Manipulator
function manipString(givenInput) {
    var inputdisplay = document.getElementById('exampleInputEmail1');
    var outputdisplay = document.getElementById('strbtn');
    if (givenInput === 'Uppercase') {
        outputdisplay.value = inputdisplay.value.toUpperCase();
    }
    else if (givenInput === 'Lowercase') {
        outputdisplay.value = inputdisplay.value.toLowerCase();
    }
    else if (givenInput === 'ReverseText') {
        outputdisplay.value = inputdisplay.value.split('').reverse().join('');
    }
    else if (givenInput === 'RemoveSpace') {
        outputdisplay.value = inputdisplay.value.trim().replace(" ", '');
    }
    else if (givenInput === 'Palindrome') {
        var np = 0;
        var start = 0;
        var end = inputdisplay.value.length - 1;
        while (start < end) {
            if (inputdisplay.value[start] != inputdisplay.value[end]) {
                np = 1;
            }
            start++;
            end--;
        }
        if (np != 0) {
            outputdisplay.value = "Not a Palindrome";
        }
        else {
            outputdisplay.value = "Palindrome";
        }
    }
    else if (givenInput === 'CountWords') {
        outputdisplay.value = inputdisplay.value.split(" ").length.toString();
    }
    else if (givenInput === 'Countletters') {
        outputdisplay.value = inputdisplay.value.length.toString();
    }
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////Script for BMI Calculator
function calBMI(event) {
    event.preventDefault();
    var height = document.getElementById('height');
    var weight = document.getElementById('weight');
    var bmiout = document.getElementById('bmiout');
    var h = parseInt(height.value);
    var h_in_meter = h / 100;
    var calculatedBMI = (parseInt(weight.value) / (h_in_meter * h_in_meter));
    bmiout.value = calculatedBMI.toString();
    var bmicat = document.getElementById('catbmi');
    if (calculatedBMI < 18.5) {
        bmicat.value = "Underweight";
    }
    else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
        bmicat.value = "Normal Weight";
    }
    else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
        bmicat.value = "Overweight";
    }
    else if (calculatedBMI >= 30 && calculatedBMI <= 34.9) {
        bmicat.value = "Obese Class I";
    }
    else if (calculatedBMI >= 35 && calculatedBMI <= 39.9) {
        bmicat.value = "Obese Class II";
    }
    else {
        bmicat.value = "Obese Class III";
    }
}
///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
