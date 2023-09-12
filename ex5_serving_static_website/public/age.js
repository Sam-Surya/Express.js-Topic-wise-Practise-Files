var rangeInput6 = document.getElementById('birthdate');
var selectedValueDiv6 = document.getElementById('birthdatedisplay');
rangeInput6.addEventListener('input', function () {
    selectedValueDiv6.textContent = "Selected Date: ".concat(rangeInput6.value);
});
var rangeInput7 = document.getElementById('birthmonth');
var selectedValueDiv7 = document.getElementById('birthmonthdisplay');
rangeInput7.addEventListener('input', function () {
    selectedValueDiv7.textContent = "Selected Month: ".concat(rangeInput7.value);
});
var rangeInput8 = document.getElementById('yearofbirth');
var rangeInput9 = document.getElementById('ageatdate');
var selectedValueDiv9 = document.getElementById('ageatdatedisplay');
rangeInput9.addEventListener('input', function () {
    selectedValueDiv9.textContent = "Selected Date: ".concat(rangeInput9.value);
});
var rangeInput10 = document.getElementById('ageatmonth');
var selectedValueDiv10 = document.getElementById('ageatmonthdisplay');
rangeInput10.addEventListener('input', function () {
    selectedValueDiv10.textContent = "Selected Month: ".concat(rangeInput10.value);
});
var rangeInput11 = document.getElementById('ageatyear');
function calculateAgeButton(event) {
    event.preventDefault();
    var birthdate = new Date(parseInt(rangeInput8.value), // Year
    parseInt(rangeInput7.value) - 1, // Month (subtract 1 to match JavaScript month indexing)
    parseInt(rangeInput6.value) // Date
    );
    var ageAtDate = new Date(parseInt(rangeInput11.value), // Year
    parseInt(rangeInput10.value) - 1, // Month (subtract 1 to match JavaScript month indexing)
    parseInt(rangeInput9.value) // Date
    );
    var ageInMilliseconds = ageAtDate.getTime() - birthdate.getTime();
    var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Adjusted for leap years
    var ageInMinutes = ageInMilliseconds / (1000 * 60);
    var ageInMonths = ageInYears * 12; // Approximate
    var ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
    var ageInHours = ageInMilliseconds / (1000 * 60 * 60);
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageDisplay = document.getElementById('ageDisplay');
    var ageDisplaymnt = document.getElementById('ageDisplaymnt');
    var ageDisplaydys = document.getElementById('ageDisplaydys');
    var ageDisplayhrs = document.getElementById('ageDisplayhrs');
    var ageDisplaymin = document.getElementById('ageDisplaymin');
    var ageDisplaysec = document.getElementById('ageDisplaysec');
    ageDisplay.value = ageInYears.toString();
    ageDisplaymnt.value = ageInMonths.toString();
    ageDisplaydys.value = ageInDays.toString();
    ageDisplayhrs.value = ageInHours.toString();
    ageDisplaymin.value = ageInMinutes.toString();
    ageDisplaysec.value = ageInSeconds.toString();
}
