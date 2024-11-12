const input = document.getElementById('text-input')
const result = document.querySelector('.result')
const checkBtn = document.getElementById('check-btn')

function isPalindrome() {
  const inputValue = input.value.trim().toLowerCase();
  if (inputValue === "") {
    alert("Please input a value")
    return;
  }
  const cleanedValue = inputValue.replace(/[^a-z0-9]/g, '');
  if (cleanedValue === cleanedValue.split('').reverse().join('')) {
    result.innerHTML = `<strong>${inputValue}</strong> is a palindrome`
  }
  else {
    result.innerHTML = `<strong>${inputValue}</strong> is not a palindrome!`
  }



}

const dropdownToggle = document.getElementById('dropdown-toggle');
const palindromeRules = document.getElementById('palindrome-rules');
const rules = document.getElementById('rules')
dropdownToggle.onclick = function() {
  const isVisible = palindromeRules.style.display === 'block';
  
  palindromeRules.style.display = isVisible ? 'none' : 'block';

  rules.style.height = isVisible ? 'auto' : '180px';
  dropdownToggle.querySelector('.arrow').innerHTML = isVisible ? '&#9660;' : '&#9650;';
};
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkBtn.click();
  }
});
checkBtn.onclick = isPalindrome;