class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("The updated balance: ", this.balance)
    }

    withdraw(amount){
        if(this.balance >= amount) {
    this.balance -= amount;
    console.log("Updated balance: ", this.balance);
    } else {
    throw new Error("Insufficient or invalid balance");
}
    } 

    getBalance(){
        return this.balance;
    }
}


const account = new BankAccount("Anas", 1000);
console.log(account.getBalance());
account.deposit(500);
account.withdraw(200);
console.log("The last updated balance is", account.getBalance());