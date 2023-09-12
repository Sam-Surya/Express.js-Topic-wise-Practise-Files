//12 to 24

    const rangeInput3 = document.getElementById('customRange3') as HTMLInputElement;
    const selectedValueDiv3 = document.getElementById('selectedValue3') as HTMLInputElement;

    rangeInput3.addEventListener('input', () => {
        selectedValueDiv3.textContent = `Selected Hour: ${rangeInput3.value}`;
    });

    const rangeInput4 = document.getElementById('customRange4') as HTMLInputElement;
    const selectedValueDiv4 = document.getElementById('selectedValue4') as HTMLInputElement;

    rangeInput4.addEventListener('input', () => {
        selectedValueDiv4.textContent = `Selected Minute: ${rangeInput4.value}`;
    });


    const tp = document.getElementById('tperiod') as HTMLInputElement;
    const out12 = document.getElementById('12to24') as HTMLInputElement;



    
    function convertTo24HourFormat(event) {
        event.preventDefault();

        const period = tp.value;

        let hours = parseInt(rangeInput3.value);
        const minutes = rangeInput4.value;

        if (period.toUpperCase() === 'PM' && hours !== 12) {
            hours += 12;
        } else if (period.toUpperCase() === 'AM' && hours === 12) {
            hours = 0;
        }

        const z = hours.toString();
        const x = ":";
        out12.value = z + x + minutes;
    }




    



  


