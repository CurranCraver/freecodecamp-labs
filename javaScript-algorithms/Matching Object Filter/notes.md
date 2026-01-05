# Symmetric Difference Function

## What I learned
- I learned about object lookup value and property methods and how to utilize them with high order functions
- I combined filter with every to make sure that every property was included because I was having issues using .includes for the property section

## My Solution
- I seperated the source value from the property values in order to check if each object only contained the correct property and value together
- I used .join to make sure to compare the values as strings but this didn't work for the properties
- Because this wasn't working for the properties I created an if statement to first ensure the value passed, then used every to ensure the property passed aswell, and only then would I return the object