# Bank Account Management Program

## What I learned
- I learned how to work with method and use basic math logic to create are store instances of transactions in an array
- I learned that some methods need return statements, particularly ones where the results are needed to be used whereas if the results are not used, no return statement is necessary
- I worked with using template literal syntax with instances of objects to return current balances and transactions

## My Solution
- I started by created a class with a constructor that took one parameter being the initial balance in the account
- I assigned the instance of this property to the argument in the constructor and used an OR operater as a fallback with a value of 0 incase no intiliaze balanced was passed into a new BankAccount instance
- For my desposit method, I used one parameter to capture the amount deposited, if the amount was greater than 0, I pushed the amount into the transactions array and used the instance of balance to update the previous balance + amount deposited, and finilay returned a template literal indicating the amount deposited and the updated balance for the Bank Account
- For my withdrawal method, I used an if statement to ensure the withdrawal was more than zero but not greater than the total balance, then updates the current balance my assigning the instance of balance property to the balance - amount withdrawn.  In order to ensure that the values stored in the transaction's array were clearly withdrawals, I multiplied the amount * -1 before pushing the amount to update the transactions array.  
- The checkbalance method needed no parameters as it only required the insance of the current balance
- To capture all of the deposits for my listAllDeposits method, I used filter to return all of the positive transaction passed into my transactions array
- To capture all withdrawls in my listAllWithdrawals array, I used the same filter method, however I chained a map to modify each transaction to a positive number using Math.abs because the test required it.