function addNumberToScreen(num){
    const screen = document.getElementById('calculator-screen');
    screen.value += num;
}

function eraseAll(){
    const screen = document.getElementById('calculator-screen');
    screen.value = '';
}

function erase(){
    const screen = document.getElementById('calculator-screen');
    if(screen.value.length > 0){
        screen.value = screen.value.slice(0,-1);
        screen.value = screen.value;
    }
}

function equal() {
    const screen = document.getElementById('calculator-screen');
    let screenValue = screen.value;
    if(screenValue.includes('%')){
        screenValue.replace('%','');
        screenValue = screenValue / 100;
    }
    if (screenValue.includes('÷')) {
        screenValue = screenValue.replace('÷', '/');
    }
    if (screenValue.includes('×')) {
        screenValue = screenValue.replace('×', '*');
    }
    screen.value = eval(screenValue);
}
