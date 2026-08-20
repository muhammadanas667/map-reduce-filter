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

class SavingsAccount extends BankAccount {
    constructor(owner, balance, interestRate){
        super(owner,balance)
        this.interestRate = interestRate
    }

    addInterest(){
        this.balance += this.balance *(this.interestRate / 100);
    }
}

const account = new BankAccount("Anas", 1000);
console.log(account.getBalance());
account.deposit(500);
account.withdraw(200);
console.log("The last updated balance is", account.getBalance()); 

const savings = new SavingsAccount("Anas" , 1000, 5);
console.log(savings.getBalance());
savings.addInterest();
console.log(savings.getBalance());
savings.deposit(500);
console.log(savings.getBalance())