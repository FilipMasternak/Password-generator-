// const passwordInput = document.querySelector('.range-input');
// const passwordInputNumber = document.querySelector('.range-number');
// const passwordDisplay = document.querySelector('.password-card');
// const generateButton = document.querySelector('.generate-btn');
// const uppercaseCheck = document.getElementById('uppercase');
// const lowercaseCheck = document.getElementById('lowercase');
// const numbersCheck = document.getElementById('numbers');
// const symbolsCheck = document.getElementById('symbols');
// const copyButton = document.getElementById('copy-btn');
// let progressBar = document.getElementById('progress-bar');
// const info = document.getElementById('password-info');

// const lowerCaseSigns = 'qwertyuiopasdfghjklzxcvbnm'.split('');
// const upperCaseSigns = lowerCaseSigns.map(el => el.toUpperCase());
// const symbols = '!@#$%^&*'.split('');
// const numbers = '0123456789'.split('');

// const changeLength = (e) => {
//     passwordInputNumber.innerHTML = e.target.value;
// };


// const generatePassword = () => {
//     let num = passwordInputNumber.innerHTML;
//     let display = passwordDisplay.innerHTML;
//     let signs = [];
//     let passwordResult = [];
//     let progress = 0;

//     if(num === '' || uppercaseCheck.checked === false && lowercaseCheck.checked === false && numbersCheck.checked === false && symbolsCheck.checked === false ){
//         alert('PASSWORD NEDDS TO HAVE AT LEAST 1 CHARACTER AND AT LEAST ONE BOX CHECKED')
//     }
//     if (uppercaseCheck.checked === true){
//        signs =[...signs, ...upperCaseSigns];
//        progress++;
//     }
//     if (lowercaseCheck.checked === true){
//         signs = [...signs, ...lowerCaseSigns];
//         progress++;
//     }
//     if (numbersCheck.checked === true){
//         signs = [...signs, ...numbers];
//         progress++;
//     }
//     if (symbolsCheck.checked === true){
//         signs = [...signs, ...symbols];
//         progress++;
//     }

//     if (num > 8 && progress === 4){
//         info.innerHTML = 'PASSWORD STRONG ENOUGH';
//     }
//     else if (num > 5 && progress > 3){
//         info.innerHTML = 'ALMOST PERFECT';
//     }
//     else if(num > 4 && progress > 2){
//         info.innerHTML = 'ALMOST PERFECT';
//     }
//     else{
//         info.innerHTML = 'PASSWORD SHOULD BE STRONGER';
//     }
//     progressBar.value = progress;

//     signs.sort(()=> {
//         return Math.random() - 0.5;
//     })

//     for (i=0; i < num ; i++){
//         passwordResult.push(signs[Math.floor(Math.random() * signs.length)]);     
//     }
//     passwordDisplay.innerHTML = passwordResult.join('');
// };

// passwordInput.addEventListener('input', changeLength);
// generateButton.addEventListener('click', generatePassword);
// copyButton.addEventListener('click', () =>{
//     navigator.clipboard.writeText(passwordDisplay.textContent);
//     alert('PASSWORD COPIED SUCCESSFULLY');
// });
