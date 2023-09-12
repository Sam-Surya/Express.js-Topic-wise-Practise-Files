//////////////////////////////////////////////////
//Script for Simple Calculator




function editDisplay(value:string):void{

    const display= document.getElementById('dis') as HTMLInputElement
    display.value += value
}


function clearDisplay():void{

    const display= document.getElementById('dis') as HTMLInputElement
    display.value =''
}



function backDisplay(value:string):void{

    const display= document.getElementById('dis') as HTMLInputElement
    display.value = display.value.slice(0,-1)
}


function calDisplay(value:string):void{

    const display= document.getElementById('dis') as HTMLInputElement
   


    try {
        display.value = eval(display.value).toString();
      } catch (error) {
        display.value = 'Error';
      }
}


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////Script For String Manipulator


function manipString(givenInput: string):void {


    const inputdisplay = document.getElementById('exampleInputEmail1') as HTMLInputElement;
    const outputdisplay = document.getElementById('strbtn') as HTMLInputElement;

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
        outputdisplay.value = inputdisplay.value.trim().replace(" ",'');
    } 


    else if (givenInput === 'Palindrome') {

       



        let np = 0;
        let start: number = 0;
        let end: number = inputdisplay.value.length - 1

        while (start < end) {

            if (inputdisplay.value[start] != inputdisplay.value[end]) {

                np = 1;

            }

            start++
            end--

        }

        if (np != 0) {

            outputdisplay.value ="Not a Palindrome"
        }
        else {
            outputdisplay.value ="Palindrome"
        }

    }



    else if (givenInput === 'CountWords') {
        outputdisplay.value = inputdisplay.value.split(" ").length.toString()
    } 

    else if (givenInput === 'Countletters') {
        outputdisplay.value = inputdisplay.value.length.toString()
    } 
    
    
}




//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////Script for BMI Calculator


function calBMI(event) {

    event.preventDefault(); 
    let height = document.getElementById('height') as HTMLInputElement;
    let weight = document.getElementById('weight') as HTMLInputElement;
    let bmiout = document.getElementById('bmiout') as HTMLInputElement;

    


    let h:number= parseInt(height.value)

    let h_in_meter:number =h/100


    let calculatedBMI = (parseInt(weight.value) / (h_in_meter * h_in_meter))
    bmiout.value = calculatedBMI.toString();


    let bmicat = document.getElementById('catbmi') as HTMLInputElement;


    if (calculatedBMI < 18.5) {
        bmicat.value= "Underweight";
    } 
    else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
        bmicat.value= "Normal Weight";
    } 
    else if (calculatedBMI >= 25 && calculatedBMI<= 29.9) {
        bmicat.value= "Overweight";
    } 
    else if (calculatedBMI >= 30 && calculatedBMI <= 34.9) {
        bmicat.value="Obese Class I";
    } 
    else if (calculatedBMI >= 35 && calculatedBMI <= 39.9) {
        bmicat.value= "Obese Class II";
    } 
    else {
        bmicat.value=  "Obese Class III";
    }

}


///////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////
