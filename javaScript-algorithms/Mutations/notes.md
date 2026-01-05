# Mutations Algorithim - Notes

## What I learned
- How iteration works in a for of loop
- Accessing elements in arrays in different ways, seeing the difference between forEach() and for of loops
- Practiced with arrow functions
- Experimented with arrays/string with .join() .split() .splice() and .splice() 

## My Solution Strategy
- I first split apart the array by assinging the two different words to a different index in the array, and standardized the comparison using toLowerCase()
- I then created the for of loop to iterate between the characters of word2 and checked to make sure that all of them were true using .includes() in an if statement.
- I used the NOT operator to check if any of the values were false instead of true because I realized that the code would stop at the return statement so I wanted code to stop at false, not true.