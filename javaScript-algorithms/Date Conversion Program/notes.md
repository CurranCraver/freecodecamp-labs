# Date Conversion Program

## What I learned 
- I learned how to convert and work with dates using .getDate() to get the specific day of the month, .getDay() which returns a 0-6 of the day of the week, .getMonth() which gives a 0 index of the current month, and .getFullYear() which returns the full year
- I also learned about using .padStart() which is a powerfull function that kind of works like an unshift operator for strings except I can actually specficy the number of characters I want the string to be and values to enter into it if there aren't that many number which is very useful for entering in 0's for dates like months and days which often are not double digits.
- I learned how to work with month counts and indexing the month to convert month numbers into names
- I learned how to convert currentDate into local time using .toLocaleString('en-US')

## My Solution
- To solve this I first assigned my currentDate variable to the current date by calling the new Date() function
- To convert my current date to local I using .toLocaleString('en-US')
- In the formatting date function I made sure to increase the count of the months by one because it is on a 0 index.
- To covert the month to a name value in the second function I created an array list of the names and used the current month number to index the array