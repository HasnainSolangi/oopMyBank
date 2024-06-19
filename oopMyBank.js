#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class BankAccount {
    balance;
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    async deposit(amount) {
        if (amount <= 0 || isNaN(amount)) {
            console.log(chalk.red("Invalid deposit amount. Please enter a positive numeric value."));
            return;
        }
        this.balance += amount;
        console.log(chalk.green(`${amount} deposited to your account!`));
        this.showBalance();
    }
    async withdraw(amount) {
        if (amount <= 0 || isNaN(amount)) {
            console.log(chalk.red("Invalid withdrawal amount. Please enter a positive numeric value."));
            return;
        }
        if (amount > this.balance) {
            console.log(chalk.yellow("Insufficient funds. Withdrawal denied."));
            return;
        }
        this.balance -= amount;
        console.log(chalk.blue(`${amount} withdrawn from your account.`));
        this.showBalance();
    }
    showBalance() {
        console.log(chalk.cyan(`Your current balance is: ${this.balance}`));
    }
}
class Customer {
    name;
    account;
    constructor(name, account) {
        this.name = name;
        this.account = account;
    }
    async performTransaction(action) {
        switch (action.toUpperCase()) {
            case "DEPOSIT":
                const { depositAmount } = await inquirer.prompt({
                    type: "input",
                    name: "depositAmount",
                    message: "Enter amount to deposit:",
                });
                await this.account.deposit(parseFloat(depositAmount));
                break;
            case "WITHDRAW":
                const { withdrawAmount } = await inquirer.prompt({
                    type: "input",
                    name: "withdrawAmount",
                    message: "Enter amount to withdraw:",
                });
                await this.account.withdraw(parseFloat(withdrawAmount));
                break;
            case "CHECK BALANCE":
                this.account.showBalance();
                break;
            default:
                console.log(chalk.yellow("Invalid action. Please try again."));
        }
    }
}
async function main() {
    const { customerName } = await inquirer.prompt({
        type: "input",
        name: "customerName",
        message: "Enter your name:",
    });
    const { initialBalance } = await inquirer.prompt({
        type: "input",
        name: "initialBalance",
        message: "Enter your initial balance (optional):",
    });
    const parsedInitialBalance = parseFloat(initialBalance) || 0;
    const customer = new Customer(customerName, new BankAccount(parsedInitialBalance));
    let shouldContinue = true;
    while (shouldContinue) {
        const { action } = await inquirer.prompt({
            type: "list",
            name: "action",
            message: chalk.magenta.bold("What do you want to do?"),
            choices: [
                { name: chalk.blue.italic.bold("DEPOSIT"), value: "DEPOSIT" },
                { name: chalk.green.italic.bold("WITHDRAW"), value: "WITHDRAW" },
                { name: chalk.yellow.italic.bold("CHECK BALANCE"), value: "CHECK BALANCE" },
                { name: chalk.cyan.italic.bold("EXIT"), value: "EXIT" },
            ],
        });
        if (action.toUpperCase() === "EXIT") {
            shouldContinue = false;
        }
        else {
            await customer.performTransaction(action);
            const { continueTransaction } = await inquirer.prompt({
                type: "confirm",
                name: "continueTransaction",
                message: "Do you want to perform another transaction?",
            });
            shouldContinue = continueTransaction;
        }
    }
    console.log(chalk.green(` !!THANK YOU FOR BANKING WITH US, ${customer.name}!!`));
}
main();
