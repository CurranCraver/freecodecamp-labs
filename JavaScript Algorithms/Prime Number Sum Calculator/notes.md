# Prime Number Sum Calc

## What I learned
- Today I was reminded what a prime number even is, so figuring this out took me quite a while
- I mainly worked through combining math formulas with practicing iteration
- The main thing I was lacking was my lack of knowledge in working with nested loops
- I learned about flag variables, which signal that a condition has been met inside the nested loop, without all of the times the element meets the condition in the nested loop getting compiled in.

## My Solution
- Use the outer loop to check through all of the possible variations of prime combinations below that number
- Use the nested loop to check that each number is prime by iterating up until the square root of the original number
- Use a flag variable to singal that a variable has failed the prime conditions, then pass in the true values after the nested loops finished running
- Use .reduce to create a sum of all the total values