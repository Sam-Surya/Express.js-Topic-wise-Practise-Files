//12 to 24
var rangeInput3 = document.getElementById('customRange3');
var selectedValueDiv3 = document.getElementById('selectedValue3');
rangeInput3.addEventListener('input', function () {
    selectedValueDiv3.textContent = "Selected Hour: ".concat(rangeInput3.value);
});
var rangeInput4 = document.getElementById('customRange4');
var selectedValueDiv4 = document.getElementById('selectedValue4');
rangeInput4.addEventListener('input', function () {
    selectedValueDiv4.textContent = "Selected Minute: ".concat(rangeInput4.value);
});
var tp = document.getElementById('tperiod');
var out12 = document.getElementById('12to24');
function convertTo24HourFormat(event) {
    event.preventDefault();
    var period = tp.value;
    var hours = parseInt(rangeInput3.value);
    var minutes = rangeInput4.value;
    if (period.toUpperCase() === 'PM' && hours !== 12) {
        hours += 12;
    }
    else if (period.toUpperCase() === 'AM' && hours === 12) {
        hours = 0;
    }
    var z = hours.toString();
    var x = ":";
    out12.value = z + x + minutes;
}
