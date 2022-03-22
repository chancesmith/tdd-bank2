import { Account } from "./bank";

describe.skip("Account", () => {
  it("sould create account with zero balance", () => {
    const account = new Account();
    expect(account.balance).toBe(0);
  });
  it("deposit 1000", () => {
    const account = new Account();
    const amount = 1000;
    account.deposit(amount);
    expect(account.balance).toBe(amount);
  });
  it("multiple deposits", () => {
    const account = new Account();
    const amount = 1000;
    const amount2 = 2000;
    account.deposit(amount);
    account.deposit(amount2);
    expect(account.balance).toBe(amount + amount2);
  });
  it("should withdraw", () => {
    const account = new Account();
    const amount = 1000;
    const amount2 = 2000;
    const withdrawAmmount = 500;
    account.deposit(amount);
    account.deposit(amount2);
    account.withdraw(withdrawAmmount);
    expect(account.balance).toBe(amount + amount2 - withdrawAmmount);
  });
  it("should get no withdrawls", () => {
    const account = new Account();
    expect(account.getWithdrawls().length).toBe(0);
  });
  it("should get all withdrawls", () => {
    const account = new Account();
    const amount = 1000;
    account.deposit(amount);
    account.withdraw(100);
    account.withdraw(500);
    const result = account.getWithdrawls();
    expect(result).toStrictEqual([100, 500]);
  });
  it("should get all deposits", () => {
    const account = new Account();
    const amount = 1000;
    account.deposit(amount);
    account.withdraw(100);
    account.deposit(amount);
    const result = account.getDeposits();
    expect(result).toStrictEqual([amount, amount]);
  });

  it("should get balance of all past transactions", () => {
    const account = new Account();
    const amount = 1000;
    account.deposit(amount);
    account.withdraw(100);
    account.deposit(amount);
    const result = account.getBalance();
    expect(result).toBe(amount - 100 + amount);
  });
});
