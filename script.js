// Access the display element where results and inputs are shown
const display = document.getElementById('display');
// Initialize variables to store the operation type and operand values
let operation = '';
let operand1 = null;
let operand2 = null;

// Add event listeners to number buttons
document.querySelectorAll('.key-num').forEach(button => {
    button.addEventListener('click', () => {
        // Append the number of the pressed button to the display value
        display.value += button.getAttribute('data-num');
    });
});

// Add event listeners to operation buttons (+, -, *, /)
document.querySelectorAll('.key-op').forEach(button => {
    button.addEventListener('click', () => {
        // If operand1 is not set, read the current display value as operand1
        // and prepare for the next input
        if (!operand1) {
            operand1 = parseFloat(display.value); // Convert string to number
            operation = button.getAttribute('data-op'); // Save the operation
            display.value = ''; // Clear display for next number
        }
    });
});

// Add event listener to the equals button
document.querySelector('.key-eq').addEventListener('click', () => {
    // Perform calculation if operand1 is set and display is not empty
    if (operand1) {
        operand2 = parseFloat(display.value); // Get the second operand
        let result;
        switch (operation) {
            case '+':
                result = operand1 + operand2; // Add
                break;
            case '-':
                result = operand1 - operand2; // Subtract
                break;
            case '*':
                result = operand1 * operand2; // Multiply
                break;
            case '/':
                result = operand1 / operand2; // Divide
                break;
        }
        display.value = result; // Show result in display
        operand1 = result; // Store result for further calculations
        operand2 = null;
        operation = ''; // Clear operation
    }
});

// Add event listener to the clear button
document.querySelector('.key-clear').addEventListener('click', () => {
    // Clear the display and reset all operands and operation
    display.value = '';
    operand1 = null;
    operand2 = null;
    operation = '';
});
