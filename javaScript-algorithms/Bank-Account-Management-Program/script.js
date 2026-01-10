class BankAccount {
  constructor (balance) {
    this.balance = balance || 0;
    this.transactions = [];
    
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push(amount)
      this.balance = (this.balance + amount)
      return `Successfully deposited $${amount}. New balance: $${this.balance}`
    } else {
      return "Deposit amount must be greater than zero."
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance){
      this.balance = (this.balance - amount) 
      this.transactions.push(amount * -1)
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`
    } else {
      return "Insufficient balance or invalid amount."
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`
  }

  listAllDeposits(){
   return `Deposits: ${this.transactions.filter(transaction => transaction > 0)}`
    
  }

  listAllWithdrawals() {
    return `Withdrawals: ${this.transactions.filter(transaction => transaction < 0).map(transaction => Math.abs(transaction))}`
  }



}

const myAccount = new BankAccount(125);
const deposit1 = myAccount.deposit(100);
const deposit2 = myAccount.deposit(200);
const withdrawal1 = myAccount.withdraw(40);
const withdrawal2 = myAccount.withdraw(30);
myAccount.withdraw(1125);
const deposit3 = myAccount.deposit(120);

console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());