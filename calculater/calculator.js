const display = document.getElementById('display'); // Get the display element  
function clearAll() {  
    display.value = ''; // Clear the display  
}  

function percentage() {  
    if (display.value !== '') {  
        display.value +='%'; // Calculate percentage  
    }  
}  

function clearSingle() {  
    display.value = display.value.slice(0, -1); // Remove the last character  
}  

function appendOperator(operator) {  
    const lastChar = display.value[display.value.length - 1];  
    if ('+-*/'.includes(lastChar)) {  
        display.value = display.value.slice(0, -1) + operator; // Replace last operator if it exists  
    } else {  
        display.value += operator; // Append the operator  
    }  
}  

function appendNumber(number) {  
    display.value += number; // Append the number to the display  
}  

function appendDot() {  
    if (!display.value.includes('.')) { // Ensure only one dot exists  
        display.value += '.';  
    }  
}  

function calculateResult() {  
    try {  
        // Evaluate the expression safely  
        display.value = eval(display.value).toString();  
    } catch (error) {  
        display.value = 'Error'; // Display 'Error' if evaluation fails  
    }  
}

//COLALJO, JAVINAL, ELIPSE