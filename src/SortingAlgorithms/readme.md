# Sorting Algorithms

- Arranging data in a collection based on a comparison algorithm
- Sorting Algorithms family:
  - Linear Sorting:: treats the sorting operation on the data collection as a whole
  - Divide and Conquer:: breaks down the data collection into independent collections to be sorted
- The cost of Comparisons and Swaps operations performed by a sorting algorithm is a major indicator of it's performance

## Bubble Sort

- Performs series of comparison-swap operations untill the collection is completely sorted
- Worst Case Performance:: O(n^2)
  - not suitable for large unsorted data sets
- Average Case Performace:: O(n^2)
  - not suitable for large unsorted data sets
- Best Case Performance:: O(n)
  - can efficiently sort small and nearly sorted data sets
- Space required:: O(n)
  - Bubble sort operates directly on the input array making it suitable for situations where minimizing space is important

## Insertion Sort

- Sorts each item in the array as they are encountered
- As the current item moves from left to right
  - Everything left of the item is known to be sorted
  - Everything to the right is unsorted
- Worst Case Performance:: O(n^2)
  - not suitable for large unsorted data sets
- Average Case Performace:: O(n^2)
  - not suitable for large unsorted data sets
- Best Case Performance:: O(n)
  - can efficiently sort small and nearly sorted data sets
- Space required:: O(n)
  - operates directly on the input array making it suitable for situations where minimizing space is important

## Selection Sort

- Worst Case Performance:: O(n^2)
  - not suitable for large unsorted data sets
- Average Case Performace:: O(n^2)
  - not suitable for large unsorted data sets
- Best Case Performance:: O(n^2)
  - not suitable for large unsorted data sets
- Space required:: O(n)
  - operates directly on the input array making it suitable for situations where minimizing space is important

## Merge Sort

- The array is recursively split in half
- Worst Case Performance:: O(n log n)
  - suitable for large data sets
  - Data splitting means that the algorithm can be made parallel
- Average Case Performace:: O(n log n)
  - suitable for large data sets
- Best Case Performance:: O(n log n)
  - suitable for large data sets
- Space required:: O(n)
  - splitting may use more space depending on how it is implemented

## Quick Sort

- Divide and Conquer 
- Picks a pivot value and partition the array
- Worst Case Performance:: O(n^2)
  - Not appropriate for large pathologically sorted(inverse sorted) data sets.
- Average Case Performace:: O(n log n)
  - Appropriate for large datasets
- Best Case Performance:: O(n log n)
  - can efficiently sort small and nearly sorted datasets
- Space required:: O(n)
  - Being a recursive algorithm, the array space as well as the stack space must be considered. 

Note:: in the end you probably won't be writing sorting algorithms but you ganna have to know which one to use
