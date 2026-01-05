# Pig Latin Converter

## What I Learned 
- I learned how to apply multiple capture groups with regex to transfer positioning of letters in my string 
- I used conditional logic with match regex props to detminine if my string started with consonants

## My Solution 
- The first group I used for the consonants selected all consonants by usng ^ to start the indexing from the begging of the string and the ^ inside the brackets as a NOT operator.  The second capture group was \w* to collect 0 or more of the characters inside the second group.