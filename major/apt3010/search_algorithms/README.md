# Search Algorithms

* Linear Search Algorithm
<p>Is a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set. It is the easiest searching algorithm</p>

* Binary Search Algorithm
<p>Begin with the mid element of the whole array as a search key. If the value of the search key is equal to the item then return an index of the search key or if the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half, otherwise, narrow it to the upper half. Repeatedly check from the second point until the value is found or the interval is empty.

* Jump Search Algorithm
<p>Like Binary Search, Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements. For example, suppose we have an array arr[] of size n and a block (to be jumped) of size m. Then we search in the indexes arr[0], arr[m], arr[2m]…..arr[km] and so on. Once we find the interval (arr[km] < x < arr[(k+1)m]), we perform a linear search operation from the index km to find the element x.
Let’s consider the following array: (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610). The length of the array is 16. The Jump search will find the value of 55 with the following steps assuming that the block size to be jumped is 4.
STEP 1: Jump from index 0 to index 4;
STEP 2: Jump from index 4 to index 8;
STEP 3: Jump from index 8 to index 12;
STEP 4: Since the element at index 12 is greater than 55, we will jump back a step to come to index 8.
STEP 5: Perform a linear search from index 8 to get the element 55.
Performance in comparison to linear and binary search:
If we compare it with linear and binary search then it comes out then it is better than linear search but not better than binary search.
The increasing order of performance is:
linear search  <  jump search  <  binary search. What is the optimal block size to be skipped?
In the worst case, we have to do n/m jumps, and if the last checked value is greater than the element to be searched for, we perform m-1 comparisons more for linear search. Therefore, the total number of comparisons in the worst case will be ((n/m) + m-1). The value of the function ((n/m) + m-1) will be minimum when m = √n. Therefore, the best step size is m = √n. Works only with sorted arrays. The optimal size of a block to be jumped is (√ n). This makes the time complexity of Jump Search O(√ n). The time complexity of Jump Search is between Linear Search ((O(n)) and Binary Search (O(Log n)). Binary Search is better than Jump Search, but Jump Search has the advantage that we traverse back only once (Binary Search may require up to O(Log n) jumps, consider a situation where the element to be searched is the smallest element or just bigger than the smallest). So, in a system where binary search is costly, we use Jump Search.</p>

* Interpolation Search
<p>Given a sorted array of n uniformly distributed values arr[], write a function to search for a particular element x in the array.
Linear Search finds the element in O(n) time, Jump Search takes O(√ n) time and Binary Search takes O(log n) time.
The Interpolation Search is an improvement over Binary Search for instances, where the values in a sorted array are uniformly distributed. Interpolation constructs new data points within the range of a discrete set of known data points. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to different locations according to the value of the key being searched. For example, if the value of the key is closer to the last element, interpolation search is likely to start search toward the end side.
To find the position to be searched, it uses the following formula.
// The idea of formula is to return higher value of pos
// when element to be searched is closer to arr[hi]. And
// smaller value when closer to arr[lo]
pos = lo + [ \frac{(x-arr[lo])*(hi-lo) }{ (arr[hi]-arr[Lo]) }]arr[] ==> Array where elements need to be searchedx     ==> Element to be searchedlo    ==> Starting index in arr[]hi    ==> Ending index in arr[]
There are many different interpolation methods and one such is known as linear interpolation. Linear interpolation takes two data points which we assume as (x1,y1) and (x2,y2) and the formula is :  at point(x,y). This algorithm works in a way we search for a word in a dictionary. The interpolation search algorithm improves the binary search algorithm.  The formula for finding a value is: K = data-low/high-low. K is a constant which is used to narrow the search space. In the case of binary search, the value for this constant is: K=(low+high)/2.
The formula for pos can be derived as follows. Let's assume that the elements of the array are linearly distributed.

General equation of line : y = m*x + c.
y is the value in the array and x is its index.

Now putting value of lo,hi and x in the equation
arr[hi] = m*hi+c ----(1)
arr[lo] = m*lo+c ----(2)
x = m*pos + c     ----(3)

m = (arr[hi] - arr[lo] )/ (hi - lo)

subtracting eqxn (2) from (3)
x - arr[lo] = m * (pos - lo)
lo + (x - arr[lo])/m = pos
pos = lo + (x - arr[lo]) *(hi - lo)/(arr[hi] - arr[lo]). Algorithm
The rest of the Interpolation algorithm is the same except for the above partition logic.
Step1: In a loop, calculate the value of “pos” using the probe position formula.
Step2: If it is a match, return the index of the item, and exit.
Step3: If the item is less than arr[pos], calculate the probe position of the left sub-array. Otherwise, calculate the same in the right sub-array.
Step4: Repeat until a match is found or the sub-array reduces to zero.
</p>

* Exponential Search
<p> it works in O(Log n) time. The name comes from the way it searches an element. Given a sorted array, and an element x to be
searched, find position of x in the array.

Input:  arr[] = {10, 20, 40, 45, 55}
        x = 45
Output: Element found at index 3

Input:  arr[] = {10, 15, 25, 45, 55}
        x = 15
Output: Element found at index 1
How to find the range where element may be present?
The idea is to start with subarray size 1, compare its last element with x, then try size 2, then 4 and so on until last element of a subarray is not greater.
Once we find an index i (after repeated doubling of i), we know that the element must be present between i/2 and i (Why i/2? because we could not find a greater value in previous iteration)
Applications of Exponential Search:
Exponential Binary Search is particularly useful for unbounded searches, where size of array is infinite. Please refer Unbounded Binary Search for an example.
It works better than Binary Search for bounded arrays, and also when the element to be searched is closer to the first element.</p>