# -JavaScript-Algorithms-and-Data-Structures

- Anagram -
First, it compares the lengths of the two input strings (first and second). If the lengths are different, it assumes that the strings cannot be anagrams of each other and returns false.

If the lengths of the strings are the same, it creates a lookup object to keep track of how many times each character appears in the strings. This object stores the count of each character. As it processes characters from the first string, it adds them to the lookup object, and increments their count.

Next, it iterates through the characters in the second string. If a character is not found in the lookup object or its count is zero, it concludes that the strings are not anagrams and returns false. If the character is found in the lookup object, its count is decreased.

After processing all the characters in the second string, if both strings have the same characters in the same quantities (they are anagrams), but in different orders, the function returns true. This object keeps track of the count of characters in both strings, and since the count of "m" in the second string is 1, the function determines that the two strings are anagrams and returns true.
