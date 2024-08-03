class Account {
    #balance;

    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.#balance += amount;
        console.log(`Deposited: $${amount}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new Account(1000);

console.log(`Initial balance: $${myAccount.getBalance()}`);

myAccount.deposit(500);
console.log(`Balance after deposit: $${myAccount.getBalance()}`);

myAccount.withdraw(300);
console.log(`Balance after withdrawal: $${myAccount.getBalance()}`);

try {
    myAccount.withdraw(1500);
} catch (error) {
    console.error(error.message);
}

console.log(`Balance after failed withdrawal: $${myAccount.getBalance()}`);
