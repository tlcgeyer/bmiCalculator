function calculateBMI() {
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;

    if (age && weight) {
        const bmi = (weight / Math.pow((age / 100), 2)).toFixed(2);
        const resultContainer = document.getElementById('result-container');
        const resultElement = document.getElementById('result');
        const bmiRangeElement = document.getElementById('bmi-range');

        resultElement.textContent = `Your BMI is: ${bmi}`;
        resultContainer.style.display = 'block';

        if (bmi < 18.5) {
            bmiRangeElement.textContent = 'BMI RANGES: Under 18.5 - Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiRangeElement.textContent = 'BMI RANGES: 18.5 to 24.9 - Healthy Range';
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiRangeElement.textContent = 'BMI RANGES: 25 to 29.9 - Overweight';
        } else if (bmi >= 30 && bmi <= 39.9) {
            bmiRangeElement.textContent = 'BMI RANGES: 30 to 39.9 - Obesity';
        } else {
            bmiRangeElement.textContent = 'BMI RANGES: Above 39.9 - Extreme Obesity';
        }
    } else {
        alert('Please enter valid age and weight.');
    }
}
