// Q4

class BankAccount {
    constructor(name, account_number,current_balance){
        this.name = name,
        this.account_number = account_number,
        this.current_balance = current_balance

    }

    add(amount){
        this.current_balance += amount
    }

    deduct(amount){
        if (this.current_balance - amount < 0){
            return "Unable to deduct. Balance will go negative"
        } else {
            this.current_balance -= amount
        }
    }
}

let newBank = new BankAccount("Personal Account", "29126", 1000)

console.log(newBank)

newBank.add(2000)

console.log(newBank)

newBank.deduct(500)

console.log(newBank)