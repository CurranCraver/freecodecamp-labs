# Missing Letter Detector

## What I Learned
- I learned how to use the ASCII value of a string to compare letters
- I learned that this probably would have been easier if I had just used .includes()
- I learned a sneaky way to compare the current length in the string to the next length with for loops

## My Solution
- I used a for loop to index through each letter in the string
- I assigned to variables 1 to the current ASCII value in the string and 1 to the next
- I used the if statement to check if there was a gap more than 1 from the current letter to the next letter
- If there was a gap, I returned the value of the ASCII value that was missing by using .fromCharCode(nextCode-1)