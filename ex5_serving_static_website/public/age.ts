const rangeInput6 = document.getElementById('birthdate') as HTMLInputElement;
const selectedValueDiv6 = document.getElementById('birthdatedisplay') as HTMLInputElement;

rangeInput6.addEventListener('input', () => {
    selectedValueDiv6.textContent = `Selected Date: ${rangeInput6.value}`;
});

const rangeInput7 = document.getElementById('birthmonth') as HTMLInputElement;
const selectedValueDiv7 = document.getElementById('birthmonthdisplay') as HTMLInputElement;

rangeInput7.addEventListener('input', () => {
    selectedValueDiv7.textContent = `Selected Month: ${rangeInput7.value}`;
});

const rangeInput8 = document.getElementById('yearofbirth') as HTMLInputElement;

const rangeInput9 = document.getElementById('ageatdate') as HTMLInputElement;
const selectedValueDiv9 = document.getElementById('ageatdatedisplay') as HTMLInputElement;

rangeInput9.addEventListener('input', () => {
    selectedValueDiv9.textContent = `Selected Date: ${rangeInput9.value}`;
});

const rangeInput10 = document.getElementById('ageatmonth') as HTMLInputElement;
const selectedValueDiv10 = document.getElementById('ageatmonthdisplay') as HTMLInputElement;

rangeInput10.addEventListener('input', () => {
    selectedValueDiv10.textContent = `Selected Month: ${rangeInput10.value}`;
});

const rangeInput11 = document.getElementById('ageatyear') as HTMLInputElement;



function calculateAgeButton(event):void {
    event.preventDefault();
        const birthdate = new Date(
            parseInt(rangeInput8.value),       // Year
            parseInt(rangeInput7.value) - 1,   // Month (subtract 1 to match JavaScript month indexing)
            parseInt(rangeInput6.value)        // Date
        );

        const ageAtDate = new Date(
            parseInt(rangeInput11.value),      // Year
            parseInt(rangeInput10.value) - 1,  // Month (subtract 1 to match JavaScript month indexing)
            parseInt(rangeInput9.value)        // Date
        );


        const ageInMilliseconds = ageAtDate.getTime() - birthdate.getTime();
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Adjusted for leap years

        


        const ageInMinutes:number = ageInMilliseconds / (1000 * 60);
        const ageInMonths:number = ageInYears * 12; // Approximate
        const ageInDays:number = ageInMilliseconds / (1000 * 60 * 60 * 24);
        const ageInHours:number = ageInMilliseconds / (1000 * 60 * 60);
        const ageInSeconds:number = ageInMilliseconds / 1000;


        const ageDisplay = document.getElementById('ageDisplay') as HTMLInputElement;
        const ageDisplaymnt = document.getElementById('ageDisplaymnt') as HTMLInputElement;
        const ageDisplaydys = document.getElementById('ageDisplaydys') as HTMLInputElement;
        const ageDisplayhrs = document.getElementById('ageDisplayhrs') as HTMLInputElement;
        const ageDisplaymin = document.getElementById('ageDisplaymin') as HTMLInputElement;
        const ageDisplaysec = document.getElementById('ageDisplaysec') as HTMLInputElement;

       
        ageDisplay.value = ageInYears.toString()
        ageDisplaymnt.value = ageInMonths.toString()
        ageDisplaydys.value = ageInDays.toString()
        ageDisplayhrs.value = ageInHours.toString()
        ageDisplaymin.value = ageInMinutes.toString()
        ageDisplaysec.value = ageInSeconds.toString()
        
    
}
