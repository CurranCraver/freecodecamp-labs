# Range-Based LCM Calculator

## What I learned
- By far the hardest challenge I have done yet, this taught me how to create multiple helper function and put them all together within a highorder function to perform the task
- Not only did this lesson teach me combining a variety of concepts I was unsure about in coding, it also taught me a lot of math stuff I never knew
- I learned the formulas for solving for GCD and LCM as well as how to use .reduce() to combine them all together to get the LCM of a range of numbers

## My Solution
- To solve this I realized that I first had to get the GCD using the Eucilidean Algorithm which takes the remainder of a / b and sets the remainder = to b for the next iteration and a becomed the old b.  The formula I used to solve this was:
function findGCD(a,b){
    while(b !== 0) {
        const temp = b
        b = a % b
        a = temp
    } return a
}
- Once I have the GCD finding the LCM is simple, but requires another helper function:
function findLCM(a,b){
    const gcd = findGCD(a,b)
    return (a * b) / gcd
}
- At this point i used iteration to pass all the numbers in a range to an array so I could use the .reduce() high order funciton
- Setting up .reduce by using the lcm helper function as the accumulator so It would be continually passed on for each iteration unil after all the iterations it would return a result