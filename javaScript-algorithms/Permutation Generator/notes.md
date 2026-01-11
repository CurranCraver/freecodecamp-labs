# Permutation Generator

## What I Learned
- I learned that calling a recursive function inside a for loop can iterate over different characters in the string
- Used default values in the functions parameters to initialize the prefix and array parameters, without overwriting the values retrieved from recursive calls
- I learned how to decipher between an empty string function call that was passed in initially to the function vs when the string was empty due to the recursive slicing by using the and operator to check if both the prefix AND the string were empty, because in the recursive functions one of the other would contain characters
 - I learned how to use slice() to isolate each character by combining slice(0,i) and slice(i+1), which extracts everything except the character at the current loop index.

 ## My Solution
 - I used defualt values assigned to my prefix and array parameters to initialize their values
 - I used the && operator in my if statement to check for empty strings by requiring both prefix and string value to contain no characters
 - I used the string.legnth = 0 as the base case for my recursive statement, along with the !includes method to only pass in unique values into the array
 - I iterated through the length of the string, which tested each character as a stored prefixed while other other characters were modified with the recursive function, which built up the stored prefix variable and was pushed through a shared array once there were no more character to test in the original string


 # AI description (for my understanding)
 - The algorithm Iterates through each character in the string, selecting one to add to the string while recursively processing the remaining characters.  This builds up the prefix one by one character at a time.  When no character remain (string is empty), the complete permutation stored in the prefix is pushed to the shared array.  The loop at each recursion ensures all possible character ordering have been explored