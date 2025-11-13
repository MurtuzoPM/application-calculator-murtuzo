// calculator.js
export default class Calculator {
constructor({ maxHistory = 10 } = {}) {
this.current = '0';
this.operand = null;
this.operator = null;
this.history = [];
this.maxHistory = maxHistory;
}


// input a digit or dot
inputDigit = (digit) => {
if (digit === '.' && this.current.includes('.')) return;
this.current = this.current === '0' && digit !== '.' ? digit : `${this.current}${digit}`;
}


chooseOperator = (op) => {
if (this.operator && this.operand != null) {
// chain evaluation left-to-right
this.evaluate();
}
this.operator = op;
this.operand = parseFloat(this.current);
this.current = '0';
}


evaluate = () => {
const a = this.operand;
const b = parseFloat(this.current);
if (a == null || this.operator == null) return;


let result;
try {
switch (this.operator) {
case '+': result = a + b; break;
case '-': result = a - b; break;
case '*': result = a * b; break;
case '/':
if (b === 0) throw new Error('Cannot divide by zero');
result = a / b; break;
default: throw new Error('Unknown operator');
}
} catch (err) {
this.current = err.message;
return;
}


// normalize result: remove trailing zeros
const normalized = Number.isFinite(result) ? +parseFloat(result.toFixed(12)) : result;


// push to history (newest first)
this.history.unshift({ expression: `${a} ${this.operator} ${b}`, result: String(normalized) });
if (this.history.length > this.maxHistory) this.history.pop();


this.current = String(normalized);
this.operand = null;
this.operator = null;
}


clear = () => { this.current = '0'; }
allClear = () => { this.current = '0'; this.operand = null; this.operator = null; this.history = []; }


backspace = () => {
if (this.current.length <= 1) this.current = '0';
else this.current = this.current.slice(0, -1);
}


}