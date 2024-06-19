# MyBank - A Simple OOP Bank Application
 Welcome to MyBank, a simple command-line bank application built using Object-Oriented Programming (OOP) principles. This application allows users to perform basic banking operations such as depositing money, withdrawing money, and checking their balance.

### Objectives
- Create a Simple Bank Account System: Develop a basic bank account system using OOP principles.
- Interactive User Interface: Provide an interactive command-line interface for users to perform transactions.
- Input Validation: Implement input validation to ensure the correctness of user inputs.
- Separation of Concerns: Maintain a clear separation of concerns using classes and methods.

Features
1. BankAccount Class:
- balance: A property to hold the account balance.
- constructor(initialBalance: number = 0): Initializes a new bank account with an optional initial balance.
- deposit(amount: number): Allows the user to deposit a specified amount into the account.
- withdraw(amount: number): Allows the user to withdraw a specified amount from the account.
- showBalance(): Displays the current balance of the account.


2. Customer Class:
- name: A property to hold the customer's name.
- account: A property to hold the customer's bank account.
- constructor(name: string, account: BankAccount): Initializes a new customer with a name and a bank account.
- performTransaction(action: string): Allows the customer to perform a specified transaction (deposit, withdraw, check balance).


3. Main Function:
- main(): The entry point of the application. It initializes the customer and handles the transaction loop.


### Examples

1. Creating a New Account:
- User is prompted to enter their name.
- User is prompted to enter an initial balance (optional).

2. Depositing Money:
- User selects the "DEPOSIT" action.
- User is prompted to enter the deposit amount.
- The amount is added to the account balance and the new balance is displayed.

3. Withdrawing Money:
- User selects the "WITHDRAW" action.
- User is prompted to enter the withdrawal amount.
- If the amount is valid and there are sufficient funds, the amount is deducted from the account balance and the new balance is displayed.

4. Checking Balance:
- User selects the "CHECK BALANCE" action.
- The current account balance is displayed.


**Happy Banking with MyBank!** 🚀