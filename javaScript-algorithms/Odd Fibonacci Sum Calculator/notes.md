# Odd Fibonacci Sum Calculator

## What I Learned
- First of all I learned what a fibonacci sum calculator even is, pretty cool!
- I learned how to solve the problem in bite size chunks, figuring things out one step at a time
- Looking back, if I hadent broken the problem down and really tried to visualize each step of the process with console.log, I would have spent hours staring blankly at my screen
- I familiarized myself with the remainder tool, for some reason I was getting tripped up a bit by it

## My Solution
- I started by using a for loop to get all the fibonaci numbers into one array, regardless of whether they were even, odd, or too big
- Once I had all of the elements in one big array, I used another for loop to index through every element in the array
- I used an if statement to check two conditions: is it odd (num % 2 !== 0), is it < num?
- Once I had these two conditions met I added them to the total!