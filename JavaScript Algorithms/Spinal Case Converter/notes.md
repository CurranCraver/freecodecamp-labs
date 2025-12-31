# Spinal Case Converter

## What I Learned
- I learned about capturing matches in regex and using them in replace statements with $1 which uses the first capture
-I learned how to use different regex properties to extract and replace unwanted case values wtih kebab-case

## My Solution
- I created a capturing group for any capital letter using parenthesis and brackets with a hyphen grabbing all letter a-z.  I then was able to call the capturing group with $1 and use a - before it in the second replace argument
- I also replaced all spaces and underscores with hyphens using the global flag to ensure I replaced ALL matches instead of merely the first match
- I used -+ to check for any edge cases where there could be a Capital letter and a space in the text
- I used the ^ to ensure the first - was removed by replacing the value with an empty string