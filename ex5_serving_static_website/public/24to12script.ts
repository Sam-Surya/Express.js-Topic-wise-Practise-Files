/// convert 24hours to12 hours 


const rangeInput = document.getElementById('customRange1') as HTMLInputElement
const selectedValueDiv = document.getElementById('selectedValue1') as HTMLInputElement

rangeInput.addEventListener('input', () => {
    selectedValueDiv.textContent = `Selected Hour: ${rangeInput.value}`;
});



 const rangeInput1 = document.getElementById('customRange2') as HTMLInputElement
const selectedValueDiv1 = document.getElementById('selectedValue2') as HTMLInputElement

rangeInput1.addEventListener('input', () => {
    selectedValueDiv1.textContent = `Selected Minute: ${rangeInput1.value}`;
});



const out24 = document.getElementById('24to12') as HTMLInputElement


function convertTo12HourFormat(event):void {

    event.preventDefault();
  

    
    let hours = parseInt(rangeInput.value);
    const minutes = parseInt(rangeInput1.value);

    const period = hours >= 12 ? 'PM' : 'AM';

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
    }


    let a:string= hours.toString()
    let b:string=" : "
    let c:string=minutes.toString()
    let g:string= " "
    let d:string= period

    let e:string= a+b+c+g+d

   

    out24.value=e


}