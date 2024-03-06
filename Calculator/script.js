let displayValue = '';

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue !== '' && !isNaN(displayValue.charAt(displayValue.length - 1))) {
    displayValue += operator;
    updateDisplay();
  }
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
