document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '';
            } else if (value === '=') {
                if (previousInput && currentInput && operator) {
                    currentInput = eval(`${previousInput}${operator}${currentInput}`);
                    display.value = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
