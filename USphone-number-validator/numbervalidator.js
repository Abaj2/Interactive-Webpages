const inputNumber = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

checkButton.onclick = function() {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
    if (regex.test(inputNumber.value)) {
        results.innerText = `Valid US number: ${inputNumber.value}`
    }
    else if (inputNumber.value === "") {
        alert("Please provide a phone number")
        
    }
    else {
        results.innerText = `Invalid US number: ${inputNumber.value}`
    }
}
clearButton.onclick = function() {
    results.innerText = ""
}
