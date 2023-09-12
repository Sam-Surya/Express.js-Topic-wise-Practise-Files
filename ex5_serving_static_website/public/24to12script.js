/// convert 24hours to12 hours 
var rangeInput = document.getElementById('customRange1');
var selectedValueDiv = document.getElementById('selectedValue1');
rangeInput.addEventListener('input', function () {
    selectedValueDiv.textContent = "Selected Hour: ".concat(rangeInput.value);
});
var rangeInput1 = document.getElementById('customRange2');
var selectedValueDiv1 = document.getElementById('selectedValue2');
rangeInput1.addEventListener('input', function () {
    selectedValueDiv1.textContent = "Selected Minute: ".concat(rangeInput1.value);
});
var out24 = document.getElementById('24to12');
function convertTo12HourFormat(event) {
    event.preventDefault();
    var hours = parseInt(rangeInput.value);
    var minutes = parseInt(rangeInput1.value);
    var period = hours >= 12 ? 'PM' : 'AM';
    if (hours === 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours -= 12;
    }
    var a = hours.toString();
    var b = " : ";
    var c = minutes.toString();
    var g = " ";
    var d = period;
    var e = a + b + c + g + d;
    out24.value = e;
}
