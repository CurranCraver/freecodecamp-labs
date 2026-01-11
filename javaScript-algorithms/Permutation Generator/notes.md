# Permutation Generator

## What I Learned
- I learned that calling a recursive function inside a for loop can iterate over different characters in the string
- Used default values in the functions parameters to initialize the prefix and array parameters, without overwriting the values retrieved from recursive calls
- I learned how to decipher between an empty string function call that was passed in initially to the function vs when the string was empty due to the recursive slicing by using the and operator to check if both the prefix AND the string were empty, because in the recursive functions one of the other would contain characters
 - I learned how to use slice() to isolate each character by combining slice(0,i) and slice(i+1), which extracts everything except the character at the current loop index.