# Largest Number Finder Notes

## What I learned
- I battled with determining the scope of where to return my array.  Picked apart between whether to return it in the nested for loop or outside of both loops alltogether
- Setting the array to the first index instead of 0 was a big struggle for me, I couldn't figure out what was happening on account of the negative numbers
- Using .push outside of the nested for loop so it would just push all the values into the array

## My Solution
- Create a loop to iterate through the subarrays and nested for loop to iterate through the elements
- Define the first elements as the number to test instead of 0 to account for negatives
- Put the variable within the outer loop so the testing number doesn't stay in from the previous subarray test
- Use > and assingment operaters with an if statement to get the largest number