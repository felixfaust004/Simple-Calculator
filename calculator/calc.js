let display = document.getElementById('display');

function appendToDisplay(value) {
    // Replace the asterisk with the HTML entity for multiplication
    value = value.replace('*', '×');
    value = value.replace('*', '÷');

    // Add the digit, non-operator, or modified operator to the display
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // Replace '×' with '*' and '÷' with '/' before evaluation
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval(expression);
    } catch (error) {
        // Handle errors
        display.value = 'Error';
    }
}



function darkmode() {
    // Toggle dark mode class on the body
    const body = document.body;
    body.classList.toggle("dark-mode");
}
