# Chunky Monkey - Notes
This definitely wasn't the most condensed version but it worked none the less lol
## What I learned
- How to implement factorials into if statements
- Working and shifting around elements in the array
- Using variables to increment method call expressions


## My Solution Strategy
- I used NewNum and PrevNum with the += compound assignment operator to increment the .slice method by a factor of the number each time
- I use the condition (i % number = 0) to only run the pushing of the slice array into the new array by a factor of the number.  This made it so that that function only ran every Number of times ensuring that the elements in the array were always equal.
- I also realized that I had to use 0 as my initial conditional and not number so that if the elements in the initial array werent divisible by number, I could still fit the end of the array into the function because it would iterate an extra time before it was cut off.

