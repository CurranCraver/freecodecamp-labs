# Inventory Management Program

## What I Learned
- This lab really solidified my understanding of working with object properties and how to work with nested objects
- Extracting quantities from within objects and adding values to an object pre-existing value
- Using if else statements with objects to return correct properties

## My Solution
- I used a count incrementation to return the correct index of the array for which name matched the corresponding object in the array
- The problem I initially had with this system was that if the name passed into the parameters didn't exist, the count would still go up.  I solved this by using a checker variable that would be passed in once the name matched the object and the loop would stop iterating.
- I then used an if else to ensure that the checker had been added (meaning that the objects name did exist) and if not I would just return -1
- Also throughout this whole process I knew that having an actual array similar to one that would be tested was important to help me visually process what was happening.
- In my last function to ensure that if the quantity was subtracted if positive, object deleted if 0 left after subtraction, and not subtracted if not enough quantity, I set up three different if/else statements
- For the object deletion if the result of subtraction was zero, I used splice because I knew it would mutate the original array and it worked perfectly with the indexing I was doing