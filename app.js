import Calculator from './calculator.js';


const calc = new Calculator();


const screen = document.getElementById('screen');
const historyList = document.getElementById('history-list');
const keypad = document.querySelector('.keypad');


const render = () => {
screen.textContent = calc.current;


// render history newest-first
historyList.innerHTML = '';
calc.history.forEach((item, i) => {
const li = document.createElement('li');
li.className = 'history-item';
li.tabIndex = 0;
li.textContent = `${item.expression} = ${item.result}`;
li.dataset.index = i;
historyList.appendChild(li);
});
};


// delegate keypad clicks
keypad.addEventListener('click', (e) => {
const d = e.target.dataset;
if (d.digit) {
calc.inputDigit(d.digit);
} else if (d.operator) {
calc.chooseOperator(d.operator);
} else if (d.action) {
handleAction(d.action);
}
render();
});


const handleAction = (action) => {
switch (action) {
case 'equals': calc.evaluate(); break;
case 'clear': calc.clear(); break;
case 'all-clear': calc.allClear(); break;
case 'backspace': calc.backspace(); break;
}
};


// keyboard support
window.addEventListener('keydown', (e) => {
const key = e.key;
if (/^[0-9]$/.test(key)) calc.inputDigit(key);
else if (key === '.') calc.inputDigit('.');
else if (['+', '-', '*', '/'].includes(key)) calc.chooseOperator(key);
else if (key === 'Enter') { e.preventDefault(); calc.evaluate(); }
else if (key === 'Backspace') calc.backspace();
else if (key === 'Escape') calc.allClear();
render();
});


// allow replay from history by clicking
historyList.addEventListener('click', (e) => {
const li = e.target.closest('li');
if (!li) return;
const { index } = li.dataset;
const item = calc.history[index];
if (!item) return;
// simple replay: put result as current
calc.current = item.result;
render();
});


// initial render
render();