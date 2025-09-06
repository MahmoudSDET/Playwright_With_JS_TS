"use strict";
// BankAccount
// Depositing
// Withdrawing
// Balance - hidden - encapsulated
//bank.balance = 200
class BankAccount {
    _balance;
    constructor(initialbalance) {
        this._balance = initialbalance;
    }
    // Getter to get balance of the bank account
    get balance() {
        return this._balance;
    }
    // Method Deposit Money
    deposit(amount) {
        if (amount < 0) {
            console.log("Invalid deposit Amount");
            return;
        }
        this._balance += amount;
    }
    // Method to withdraw money
    withdraw(amount) {
        if (amount < 0) {
            console.log("Invalid withdrawal amount");
            return;
        }
        if (this._balance - amount < 0) {
            console.log("Insufficient Funds");
            return;
        }
        this._balance -= amount;
    }
}
const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Current balance: ", myAccount.balance);
