// general rules
// Don’t use the ELSE keyword
// Don’t abbreviate
// Keep all entities small (50 lines)
// No classes with more than two instance variables
// No getters/setters/properties

// steps
// 1. Given a client makes a deposit of 1000 on 10-01-2012
// 2. And a deposit of 2000 on 13-01-2012
// 3. And a withdrawal of 500 on 14-01-2012
// 4. When she prints her bank statement

// Then she would see
// date || credit || debit || balance
// 14/01/2012 || || 500.00 || 2500.00
// 13/01/2012 || 2000.00 || || 3000.00
// 10/01/2012 || 1000.00 || || 1000.00

enum TRANSACTION_TYPE {
  DEPOSIT = "DEPOSIT",
  WITHDRAW = "WITHDRAW"
}

interface Transaction {
  amount: number;
  type: TRANSACTION_TYPE;
}

export class Account {
  balance: number;
  transactions: Transaction[];

  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount: number) {
    this.balance += amount;
    const newTransaction = {
      amount,
      type: TRANSACTION_TYPE.DEPOSIT
    } as Transaction;
    this.transactions = [...this.transactions, newTransaction];
  }

  withdraw(amount: number) {
    this.balance -= amount;
    const newTransaction = {
      amount,
      type: TRANSACTION_TYPE.WITHDRAW
    } as Transaction;
    this.transactions = [...this.transactions, newTransaction];
  }

  getWithdrawls() {
    return this.transactions
      .filter((transaction) => transaction.type === TRANSACTION_TYPE.WITHDRAW)
      .map((transaction) => transaction.amount);
  }

  getDeposits() {
    return this.transactions
      .filter((transaction) => transaction.type === TRANSACTION_TYPE.DEPOSIT)
      .map((transaction) => transaction.amount);
  }

  getBalance() {
    return this.transactions.reduce((acc, transaction) => {
      if (transaction.type === TRANSACTION_TYPE.DEPOSIT) {
        return acc + transaction.amount;
      } else {
        return acc - transaction.amount;
      }
    }, 0);
  }
}
