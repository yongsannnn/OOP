// Q4

class BankAccount {
    constructor(name, account_number,current_balance){
        if(name.length < 3){
            throw "Name is less than 3 characters"
        }
        if(account_number.toString().length < 5){
            throw "Account Number is less than 5 characters"
        }
        if (parseFloat(current_balance)< 0){
            throw "Current Balance cannot be negative. "
        }
        this.name = name,
        this.account_number = parseInt(account_number),
        this.current_balance = parseFloat(current_balance)

    }

    add(amount){
        this.current_balance += parseFloat(amount)
    }

    deduct(amount){
        if (this.current_balance - parseFloat(amount) < 0){
            return "Unable to deduct. Balance will go negative"
        } else {
            this.current_balance -= parseFloat(amount)
        }
    }
}

let newBank = new BankAccount("Personal Account", 29126, 1000)

console.log(newBank)

newBank.add(2000.12)

console.log(newBank)

newBank.deduct(500)

console.log(newBank)
