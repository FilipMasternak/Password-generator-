const passwordInput: HTMLInputElement = document.querySelector('.range-input') as HTMLInputElement;
const passwordInputNumber: HTMLInputElement = document.querySelector('.range-number') as HTMLInputElement;
const passwordDisplay: HTMLSpanElement = document.querySelector('.password-card') as HTMLSpanElement;
const generateButton : HTMLButtonElement= document.querySelector('.generate-btn') as HTMLButtonElement;
const uppercaseCheck : HTMLInputElement = document.getElementById('uppercase') as HTMLInputElement;
const lowercaseCheck : HTMLInputElement = document.getElementById('lowercase')as HTMLInputElement;
const numbersCheck : HTMLInputElement= document.getElementById('numbers')as HTMLInputElement;
const symbolsCheck : HTMLInputElement= document.getElementById('symbols')as HTMLInputElement;
const copyButton : HTMLButtonElement= document.getElementById('copy-btn')as HTMLButtonElement;
const progressBar : HTMLProgressElement = document.getElementById('progress-bar') as HTMLProgressElement;
const info : HTMLDivElement= document.getElementById('password-info')as HTMLDivElement;

const lowerCaseSigns: string[] = 'qwertyuiopasdfghjklzxcvbnm'.split('');
const upperCaseSigns: string[] = lowerCaseSigns.map((el) => el.toUpperCase());
const symbols: string[] = '!@#$%^&*'.split('');
const numbers: string[] = '0123456789'.split('');

const changeLength = (e: Event): void => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    passwordInputNumber.innerHTML = target.value;
};


const generatePassword = (): void => {
    let num: number = parseInt(passwordInputNumber.innerHTML);
    let signs:string[] = [];
    let passwordResult:string[] = [];
    let progress: number = 0;

    if(passwordInputNumber.innerHTML === '' || uppercaseCheck.checked === false && lowercaseCheck.checked === false && numbersCheck.checked === false && symbolsCheck.checked === false ){
        alert('PASSWORD NEDDS TO HAVE AT LEAST 1 CHARACTER AND AT LEAST ONE BOX CHECKED');
    }
    if (uppercaseCheck.checked === true){
       signs =[...signs, ...upperCaseSigns];
       progress++;
    }
    if (lowercaseCheck.checked === true){
        signs = [...signs, ...lowerCaseSigns];
        progress++;
    }
    if (numbersCheck.checked === true){
        signs = [...signs, ...numbers];
        progress++;
    }
    if (symbolsCheck.checked === true){
        signs = [...signs, ...symbols];
        progress++;
    }

    if (num > 8 && progress === 4){
        info.innerHTML = 'PASSWORD STRONG ENOUGH';
    }
    else if (num > 5 && progress > 3){
        info.innerHTML = 'ALMOST PERFECT';
    }
    else if(num > 4 && progress > 2){
        info.innerHTML = 'ALMOST PERFECT';
    }
    else{
        info.innerHTML = 'PASSWORD SHOULD BE STRONGER';
    }
    progressBar.value = progress;

    signs.sort(() => {
        return Math.random() - 0.5;
    })

    for (let i: number = 0; i < num ; i++){
        passwordResult.push(signs[Math.floor(Math.random() * signs.length)]);     
    }
    passwordDisplay.innerHTML = passwordResult.join('');
};

passwordInput.addEventListener('input', changeLength);
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', () =>{
    navigator.clipboard.writeText(passwordDisplay.textContent as string);
    alert('PASSWORD COPIED SUCCESSFULLY');
});
