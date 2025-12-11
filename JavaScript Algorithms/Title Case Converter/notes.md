# Title Case Converter

## What I Learned
- I definitly don't think this was by any means the most optimal solution, but I can tell that problem solving and work-arounds are becoming more apparent to me
- I was struggling with the .replace() method because it kept replacing the first found index for the letter I was trying to capitalize
- To work around this, I opted to try a completely different solution by using .slice() to slice every character out in the string
- I used an if statement to check if the previous character was a string, and if it was, I capitalized just that character.
- I used another if statement to capitalize the first word in the sentence by asking if the length of the iteration was 0. 
- I also had to convert all the text to lowercase at the beginning to make sure it passed all tests

## My Solution
- I opted to use .slice adding each character to a new string
- I checked two things with two different if statements: Is this the first character? Did the character before this have a space?
- In either of those cases I converted the current sliced character to upperCase
- I make sure to use a continue after the first index because it was true for both the if statement and else statement, which would have added the first character twice.