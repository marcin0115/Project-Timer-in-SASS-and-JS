const btnStart = document.querySelector('.start')
const btnReset = document.querySelector('.reset')
const divTime = document.querySelector('.time div')

let active = false;
let idI;
let number = 0;

const startStoper = ()=> {
    if(!active) {
        active = !active;
        btnStart.textContent = 'Pauza';
        btnStart.classList.add('correct');
        idI = setInterval(stoper, 10);
    } else {
        active = !active;
        btnStart.textContent = 'Start';
        btnStart.classList.remove('correct')
        clearInterval(idI)
    }
}

const stoper = ()=> {
    number++;
    divTime.textContent = (number/100).toFixed(2);
}

const resetStoper = ()=> {
    active = false;
    clearInterval(idI);
    btnStart.textContent = 'Start';
    btnStart.classList.remove('correct');
    number = 0;
    divTime.textContent = '---';
}

btnStart.addEventListener('click', startStoper);
btnReset.addEventListener('click', resetStoper);