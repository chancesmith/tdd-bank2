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
  transactions: Transaction[];

  constructor() {
    this.transactions = [];
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

  deposit(amount: number) {
    this.transactions.push({ amount, type: TRANSACTION_TYPE.DEPOSIT });
  }

  withdraw(amount: number) {
    const exceedsBalance = amount > this.getBalance();
    if (exceedsBalance) {
      throw new Error("not able to withdraw more than available balance");
    }

    this.transactions.push({ amount, type: TRANSACTION_TYPE.WITHDRAW });
  }
}
