 // getting varaibles//
const temperatureInput = document.getElementById("temperature-input");
const convertBtn = document.getElementById("convert-button");
const conversionType = document.getElementById("conversion");
const resultElement = document.getElementById("result-text");

//function for conversion //
const conversion = ()=>{
    const temperature = parseFloat(temperatureInput.value);    //Get the number value of the temperature from the user//
    const convertType = conversionType.value;    //get the conversion type selected by the user//
    
    if(isNaN(temperature)){
        resultElement.textContent = "Please Enter a valid temperature!";
        return;
    }
    let result;
    switch(convertType){
        case"c-to-f" :              // celsius to fahrenheit conversion//
          result = (temperature * 9/5 + 32);
          resultElement.textContent =`${temperature}°C is equal to ${result.toFixed(2)}°F`;
          break;
        case "f-to-c":              // fahrenheit to celsius conversion//
        result = ((temperature - 32) * 5/9);
        resultElement.textContent = `${temperature}°F is equal to ${result.toFixed(2)}°C`;
        break;
        case "c-to-k" :  //celsius to kelvin conversion//
        result = temperature + 273.15;
        resultElement.textContent = `${temperature}°C is equal to ${result.toFixed(2)}K`;
        break;
        case "k-to-c":  //kelvin to celsius conversion//
        result = temperature - 273.15;
        resultElement.textContent = `${temperature}K is equal to ${result.toFixed(2)}°C`;
        break;
        case "f-to-k":  //fahrenheit to kelvin conversion//
        result = (temperature - 32) * 5/9 + 273.15;
        resultElement.textContent = `${temperature}°F is equal to ${result.toFixed(2)}K`;
        break;
        case "k-to-f" : //kelvin to fahrenheit conversion//
        result = (temperature - 273.15) * 9/5 + 32;
        resultElement.textContent = `${temperature}K is equal to ${result.toFixed(2)}°F`;
        break;
        default:
            resultElement.textContent = "Please Select a Conversion Type!";
            break;
        
    }
};
convertBtn.addEventListener("click", conversion);