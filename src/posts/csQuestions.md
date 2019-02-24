---
path: '/cs-questions'
date: '2019-01-13'
title: 'Computer Science'
---

[Great place to study up!](https://www.interviewcake.com/article/javascript/logarithms?section=algorithmic-thinking&course=fc1)

Any time you divide something by half by half by half what type of formula is that?
Any time you keep dividing a number again and again and again...Could even be thirds or fourths (proportional amounts).
It's a Logarithm

logN just means you divided n (a number of things) things again and again and again.

Linear time: The length of time it takes to solve the problem corrolates directly to the size of the problem.
Logarithmic time: divide and divide and divide the problem to solve.

What is Big-O?

The O in "Big O" refers to as "Order"(or precisely "order of")
so you could get its idea literally that it's used to order something to compare them.

- "Big O" does two things:
  1. Estimates how many steps of the method your computer applies to accomplish a task.
  2. Facilitate the process to compare with others in order to determine whether it's good or not?

"Big O' achieves the above two with standardized Notations.

![alt text](https://i.stack.imgur.com/6zHEt.png)

Summary
"Big O" describes the algorithm's performance and evaluates it.
"Big O" classifies the algorithms and standardize the comparison process.
"Big O" notation gives you a rough idea of how your function scales as the input to that function gets larger and larger.

Excellent Resource:
https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c

**O(1)**
Time complexity: Constant time
Given an input of size n, it only takes a single step for the algorithm to accomplish the task.
Example:
Value look ups when you know the key (objects) or the index (arrays) always take one step, and are thus constant time.

**O(log n) **
Time complexity: Logarithmic time
given an input of size n, the number of steps it takes to accomplish the task are decreased by some factor with each step.
Example:
If you know which side of the array to look on for an item, you save time by cutting out the other half. You can decrease the amount of work you have to do with each step.

**O(n)**
Time complexity: Linear time
O of n is a linear process
Given an input of size n, the number of of steps required is directly related (1 to 1).
Example:
You have to look at every item in the array or list to accomplish the task. Single for loops are almost always linear time. Also array methods like indexOf are also linear time. You’re just abstracted away from the looping process.

**O(n²)** 
Time complexity:  Quadratic Time
Given an input of size n, the number of steps it takes to accomplish a task is square of n.
Example:
Nested for loops are quadratic time, because you’re running a linear operation within another linear operation (or n\*n = n²).

**O(C^n) **
Time complexity: Exponential Time
Given an input of size n, the number of steps it takes to accomplish a task is a constant to the n power (pretty large number).
Example:
Exponential time is usually for situations where you don’t know that much, and you have to try every possible combination or permutation.
The number of steps it takes to accomplish a task is a constant to the n power.
Trying to find every combination of letters for a password of length n.

Time complexity isn't the only thing that you should consider when evaluating a solution to your problem. You should also consider how easy it is to read your code and how much memory each of your potential solutions consumes.

---

- Define the following and determine Big-O time for each:

  - Linked lists

    > In this clip David Malan questions the limitations of an array and goes into describing how a linked list works: https://youtu.be/ed2lnJNf7HU?list=PLhQjrBD2T382eX9-tF75Wa4lmlC7sxNDH&t=2180

    > Here's a summary on the linked list. When & why to use it: https://youtu.be/ed2lnJNf7HU?list=PLhQjrBD2T382eX9-tF75Wa4lmlC7sxNDH&t=3506

  - Binary trees

    > Great explanation of a binary tree here: https://youtu.be/ed2lnJNf7HU?list=PLhQjrBD2T382eX9-tF75Wa4lmlC7sxNDH&t=6687

  - Tries

    > Great explanation of a trie (short for retrieval) here: https://youtu.be/ed2lnJNf7HU?list=PLhQjrBD2T382eX9-tF75Wa4lmlC7sxNDH&t=6887

  - Stacks
  - Queues
  - Dynamic arrays
  - Hash tables/maps

    > An example of a hash table could be an array with 26 slots, each representing a character in the English alphabet. Each slot contains a linked list (actually a memory reference to the first item in the linked list), and this linked list would contain all of the "A" names of students in a classroom or all of the "B" names, etc. This makes finding a name SO much more efficient than if all of the names were just in a standard array.

  - Breadth first search
  - Depth first search
  - Binary Search

    > O(log n) worst case time complexity. Works well so long as the list you're searching is ordered. Split the list in half and determine which half you need to keep and split again and again until you've found what you're searching for.

  - Merge sort

    > Ο(n log n) worst case time complexity. Merge sort is a sorting technique based on divide and conquer technique. Merge sort first divides the array into equal halves and then combines them in a sorted manner.

  - Quick sort
  - Tree insert/find/etc
  - Linear search

    > O(n) time complexity. Search through the phonebook one page at a time.

  - Bubble sort

    > O(n2) time complexity. Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent pairs and swaps them if they are in the wrong order. Although the algorithm is simple, it is too slow and impractical for most problems.

  - Selection sort

    > O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

  - Recursion

---

### Prep Opinion 1

---

How can one prepare for a computer science job interview?

You must know a relatively small subset of algorithms and data structures. There are a few exceptions, which I list below under "Advanced preparation". The nice thing is that as you grow older, the core material won't change much, even if the problems become more difficult.

Here I primarily address long-term technical preparation.

You'll definitely need to know:

- Linked lists, binary trees, tries, stacks, queues, dynamic arrays, hash tables/maps
- Breadth first search, depth first search, binary search, merge sort, quick sort, tree insert/find/etc
- Recursion
- Big-O time on all of the above
- How to identify choices that will result in big performance gains/losses (i.e. don't worry about minor gains/losses), especially if that choice would mean the difference between a feasible solution and an infeasible solution
- OOP design principles

General preparation:

- Read Cracking the Coding Interview by Gayle Laakmann McDowell. It is the canonical book to prepare for technical interviews and covers just about everything you absolutely must know.
- There are more practice problems on Career Cup, Glassdoor, and leetcode. Getting involved in competitive programming is also an excellent way to prepare for interviews.
- Work on interesting personal projects. Consider attending hackathons or making open-source contributions.

Advanced preparation:

Especially at smaller companies, and in interviews for specialized roles or research positions, some questions don't fall into any of the above categories and are often considerably more difficult (e.g. dynamic programming, distributed systems, etc). For specialized roles, I would stress doing personal projects, making open-source contributions, doing research, taking classes in the subject, etc. For general software developer roles in companies known for difficult questions, I would stress staying active in competitive programming and gaining experience in any domains important to the particular company.

Techniques for technical questions:

- The first hurdle is that you should NOT jump the gun and begin coding until: (1) you are confident that the route you are planning to take will solve all or most of the problem and not just the first few lines of it; and (2) you have resolved any obvious ambiguities needed to solve the problem. If you start coding before completing this first step, it will come off as a red flag to the interviewer.
- If you know of an obvious brute force solution and only have a hazy idea about a possibly better solution, start with the brute force solution and explain to the interviewer that you’re starting with a simple brute force approach and will see if you can improve it after you have something working. Something is better than nothing, and incrementally improving your code will suggest you have a clear, algorithmic thought process.
- You must speak clearly and calmly and keep talking to let the interviewer know what you're thinking, where you're going, and what problems you're encountering.
- Always listen to an interviewer’s hints.
- If you’re unsure about a specific function or feature of the language you’re using that isn't common knowledge, ask the interviewer if you can assume that a certain functionality exists and behaves in certain way. Often the interviewer will allow you to make that assumption (even if it doesn’t exist) with little or no penalty.
- If you get stuck, tell the interviewer you are stuck and explain why.
- When you are done, DO NOT worry about taking too long to test your code for correctness unless the interviewer CLEARLY indicates your solution is correct. The interviewer will usually only give you one chance to test for correctness.

---

### Prep Opinion 2

---

Minimum knowledge for Software Engineer Positions
If anyone were to ask me what I felt would be areas to focus on, I’d suggest the following:

- Learn to write code by hand on paper and a whiteboard first and then throw it into an IDE for syntax highlighting, this should become second nature to you.
- Develop deep knowledge of data structures, their strengths, and weaknesses in comparison to each other. I discovered that implementing data structures and their behaviors from scratch taught me so much more than what I knew from their abstract concepts.
- Completely understand Big O notation for both time and space complexities, this will pair perfectly with your algorithm and sorting questions.
- Grasp all major sorting algorithms because the difference in time/space complexities have the potential to derail your optimum solution for an algorithm you’re trying to solve.

---

### Notes

---

1 byte is 8 bits
so
4 bytes is 32 bits

It's common in programming languages for a floating point number to require 32 bits to store it in memory.
Roughly speaking, a floating point number is only accurate up to about 7 decimal places.
To get more precise when programming in C, you must use something called double which would give you more precision but requires twice as much memory to store (64 bits).

With 8 bits you can count up to 256
With 32 bits you can count up to roughly 4 billion

---

A "Pointer" is just a buzz word for "address on memory".
char \* is saying "I want a variable that doesn't store a char, it stores the address of the char." That address is just going to be called a pointer.

---

TCP/IP
A pair of protocols. "Languages" that computers speak in order to transmit information from one computer to another. This is what makes most of the internet today work.

IP stands for Internet Protocol so an IP address is an Internet Protocol Address.
