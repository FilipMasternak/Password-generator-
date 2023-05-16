var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var passwordInput = document.querySelector('.range-input');
var passwordInputNumber = document.querySelector('.range-number');
var passwordDisplay = document.querySelector('.password-card');
var generateButton = document.querySelector('.generate-btn');
var uppercaseCheck = document.getElementById('uppercase');
var lowercaseCheck = document.getElementById('lowercase');
var numbersCheck = document.getElementById('numbers');
var symbolsCheck = document.getElementById('symbols');
var copyButton = document.getElementById('copy-btn');
var progressBar = document.getElementById('progress-bar');
var info = document.getElementById('password-info');
var lowerCaseSigns = 'qwertyuiopasdfghjklzxcvbnm'.split('');
var upperCaseSigns = lowerCaseSigns.map(function (el) { return el.toUpperCase(); });
var symbols = '!@#$%^&*'.split('');
var numbers = '0123456789'.split('');
var changeLength = function (e) {
    var target = e.target;
    passwordInputNumber.innerHTML = target.value;
};
var generatePassword = function () {
    var num = parseInt(passwordInputNumber.innerHTML);
    var signs = [];
    var passwordResult = [];
    var progress = 0;
    if (passwordInputNumber.innerHTML === '' || uppercaseCheck.checked === false && lowercaseCheck.checked === false && numbersCheck.checked === false && symbolsCheck.checked === false) {
        alert('PASSWORD NEDDS TO HAVE AT LEAST 1 CHARACTER AND AT LEAST ONE BOX CHECKED');
    }
    if (uppercaseCheck.checked === true) {
        signs = __spreadArray(__spreadArray([], signs, true), upperCaseSigns, true);
        progress++;
    }
    if (lowercaseCheck.checked === true) {
        signs = __spreadArray(__spreadArray([], signs, true), lowerCaseSigns, true);
        progress++;
    }
    if (numbersCheck.checked === true) {
        signs = __spreadArray(__spreadArray([], signs, true), numbers, true);
        progress++;
    }
    if (symbolsCheck.checked === true) {
        signs = __spreadArray(__spreadArray([], signs, true), symbols, true);
        progress++;
    }
    if (num > 8 && progress === 4) {
        info.innerHTML = 'PASSWORD STRONG ENOUGH';
    }
    else if (num > 5 && progress > 3) {
        info.innerHTML = 'ALMOST PERFECT';
    }
    else if (num > 4 && progress > 2) {
        info.innerHTML = 'ALMOST PERFECT';
    }
    else {
        info.innerHTML = 'PASSWORD SHOULD BE STRONGER';
    }
    progressBar.value = progress;
    signs.sort(function () {
        return Math.random() - 0.5;
    });
    for (var i = 0; i < num; i++) {
        passwordResult.push(signs[Math.floor(Math.random() * signs.length)]);
    }
    passwordDisplay.innerHTML = passwordResult.join('');
};
passwordInput.addEventListener('input', changeLength);
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', function () {
    navigator.clipboard.writeText(passwordDisplay.textContent);
    alert('PASSWORD COPIED SUCCESSFULLY');
});
