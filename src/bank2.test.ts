import { Account } from "./bank2";

describe("Account", () => {
  it("sould create account with zero balance", () => {
    const account = new Account();
    const result = account.getBalance();
    expect(result).toBe(0);
  });
  it("deposit 1000", () => {
    const account = new Account();
    const amount = 1000;
    account.deposit(amount);
    const result = account.getBalance();
    expect(result).toBe(amount);
  });
  it("multiple deposits", () => {
    const account = new Account();
    const amount = 1000;
    const amount2 = 2000;
    account.deposit(amount);
    account.deposit(amount2);
    const result = account.getBalance();
    expect(result).toBe(amount + amount2);
  });
  it("should withdraw", () => {
    const account = new Account();
    const amount = 1000;
    const amount2 = 2000;
    const withdrawAmount = 500;
    account.deposit(amount);
    account.deposit(amount2);
    account.withdraw(withdrawAmount);
    const result = account.getBalance();
    expect(result).toBe(amount + amount2 - withdrawAmount);
  });
  // adam
  // 🦖
  // chance
  it("should not withdraw more than available balance", () => {
    const account = new Account();
    const amount = 1000;
    const withdrawAmount = 1000;
    const withdrawAmount2 = 1;
    account.deposit(amount);
    account.withdraw(withdrawAmount);
    expect(() => account.withdraw(withdrawAmount2)).toThrow(
      "not able to withdraw more than available balance"
    );
  });
  // it("should get no withdrawls", () => {
  //   const account = new Account();
  //   expect(account.getWithdrawls().length).toBe(0);
  // });
  // it("should get all withdrawls", () => {
  //   const account = new Account();
  //   const amount = 1000;
  //   account.deposit(amount);
  //   account.withdraw(100);
  //   account.withdraw(500);
  //   const result = account.getWithdrawls();
  //   expect(result).toStrictEqual([100, 500]);
  // });
  // it("should get all deposits", () => {
  //   const account = new Account();
  //   const amount = 1000;
  //   account.deposit(amount);
  //   account.withdraw(100);
  //   account.deposit(amount);
  //   const result = account.getDeposits();
  //   expect(result).toStrictEqual([amount, amount]);
  // });

  // it("should get balance of all past transactions", () => {
  //   const account = new Account();
  //   const amount = 1000;
  //   account.deposit(amount);
  //   account.withdraw(100);
  //   account.deposit(amount);
  //   const result = account.getBalance();
  //   expect(result).toBe(amount - 100 + amount);
  // });
});
