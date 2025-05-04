"use strict";
{
    // Learning function
    // Normal function
    // Arrow function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(2);
    // arrow function
    const addArrow = (num1, num2) => num1 + num2;
    addArrow(2, 4);
    // object --> function --> method
    const poorUser = {
        name: 'Monirul',
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        }
    };
    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.map((elem) => elem * elem);
}
