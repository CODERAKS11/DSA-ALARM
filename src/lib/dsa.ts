export type Question = {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string | null;
  practiceLink: string | null;
};

export type Category = {
  name: string;
  lectures: {
    name: string;
    questions: Question[];
  }[];
};

const rawData = [
  {
    "step_name": "Step 1 : Learn the basics",
    "lectures": [
      {
        "lecture_name": "Lec 1: Things to Know in C++/Java/Python or any language",
        "problems": [
          {
            "name": "User Input / Output",
            "post_link": "https://takeuforward.org/c/c-basic-input-output/",
            "practice_link": null
          },
          {
            "name": "Data Types",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "If Else statements",
            "post_link": "https://takeuforward.org/if-else/if-else-statements/",
            "practice_link": null
          },
          {
            "name": "Switch Statement",
            "post_link": "https://takeuforward.org/switch-case/switch-case-statements/",
            "practice_link": null
          },
          {
            "name": "What are arrays, strings?",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "For loops",
            "post_link": "https://takeuforward.org/for-loop/understanding-for-loop/",
            "practice_link": null
          },
          {
            "name": "While loops",
            "post_link": "https://takeuforward.org/while-loop/while-loops-in-programming/",
            "practice_link": null
          },
          {
            "name": "Functions (Pass by Reference and Value)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Time Complexity [Learn Basics, and then analyse in next Steps]",
            "post_link": "https://takeuforward.org/time-complexity/time-and-space-complexity-strivers-a2z-dsa-course/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Build-up Logical Thinking",
        "problems": [
          {
            "name": "Patterns",
            "post_link": "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 3: Learn STL/Java-Collections or similar thing in your language",
        "problems": [
          {
            "name": "C++ STL",
            "post_link": "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/",
            "practice_link": null
          },
          {
            "name": "Java Collections",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 4: Know Basic Maths",
        "problems": [
          {
            "name": "Count Digits",
            "post_link": "https://takeuforward.org/data-structure/count-digits-in-a-number/",
            "practice_link": "https://leetcode.com/problems/armstrong-number/"
          },
          {
            "name": "Reverse a Number",
            "post_link": "https://takeuforward.org/maths/reverse-digits-of-a-number",
            "practice_link": "https://leetcode.com/problems/reverse-integer/"
          },
          {
            "name": "Check Palindrome",
            "post_link": "https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/",
            "practice_link": "https://leetcode.com/problems/palindrome-number/"
          },
          {
            "name": "GCD Or HCF",
            "post_link": "https://takeuforward.org/data-structure/find-gcd-of-two-numbers/",
            "practice_link": null
          },
          {
            "name": "Armstrong Numbers",
            "post_link": "https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/",
            "practice_link": "https://leetcode.com/problems/armstrong-number/"
          },
          {
            "name": "Print all Divisors",
            "post_link": "https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/",
            "practice_link": null
          },
          {
            "name": "Check for Prime",
            "post_link": "https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 5: Learn Basic Recursion",
        "problems": [
          {
            "name": "Understand recursion by print something N times",
            "post_link": "https://takeuforward.org/recursion/introduction-to-recursion-understand-recursion-by-printing-something-n-times/",
            "practice_link": null
          },
          {
            "name": "Print name N times using recursion",
            "post_link": "https://takeuforward.org/recursion/print-name-n-times-using-recursion/",
            "practice_link": null
          },
          {
            "name": "Print 1 to N using recursion",
            "post_link": "https://takeuforward.org/recursion/print-1-to-n-using-recursion/",
            "practice_link": null
          },
          {
            "name": "Print N to 1 using recursion",
            "post_link": "https://takeuforward.org/recursion/print-n-to-1-using-recursion/",
            "practice_link": null
          },
          {
            "name": "Sum of first N numbers",
            "post_link": "https://takeuforward.org/data-structure/sum-of-first-n-natural-numbers/",
            "practice_link": null
          },
          {
            "name": "Factorial of N numbers",
            "post_link": "https://takeuforward.org/data-structure/factorial-of-a-number-iterative-and-recursive/",
            "practice_link": null
          },
          {
            "name": "Reverse an array",
            "post_link": "https://takeuforward.org/data-structure/reverse-a-given-array/",
            "practice_link": null
          },
          {
            "name": "Check if a string is palindrome or not",
            "post_link": "https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/",
            "practice_link": "https://leetcode.com/problems/valid-palindrome/"
          },
          {
            "name": "Fibonacci Number",
            "post_link": "https://takeuforward.org/arrays/print-fibonacci-series-up-to-nth-term/",
            "practice_link": "https://leetcode.com/problems/fibonacci-number/"
          }
        ]
      },
      {
        "lecture_name": "Lec 6: Learn Basic Hashing",
        "problems": [
          {
            "name": "Hashing Theory",
            "post_link": "https://takeuforward.org/hashing/hashing-maps-time-complexity-collisions-division-rule-of-hashing-strivers-a2z-dsa-course/",
            "practice_link": null
          },
          {
            "name": "Counting frequencies of array elements",
            "post_link": "https://takeuforward.org/data-structure/count-frequency-of-each-element-in-the-array/",
            "practice_link": null
          },
          {
            "name": "Find the highest/lowest frequency element",
            "post_link": "https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/",
            "practice_link": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/"
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 2 : Learn Important Sorting Techniques",
    "lectures": [
      {
        "lecture_name": "Lec 1: Sorting-I",
        "problems": [
          {
            "name": "Selection Sort",
            "post_link": "https://takeuforward.org/sorting/selection-sort-algorithm/",
            "practice_link": null
          },
          {
            "name": "Bubble Sort",
            "post_link": "https://takeuforward.org/data-structure/bubble-sort-algorithm/",
            "practice_link": null
          },
          {
            "name": "Insertion Sort",
            "post_link": "https://takeuforward.org/data-structure/insertion-sort-algorithm/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Sorting-II",
        "problems": [
          {
            "name": "Merge Sort",
            "post_link": "https://takeuforward.org/data-structure/merge-sort-algorithm/",
            "practice_link": null
          },
          {
            "name": "Recursive Bubble Sort",
            "post_link": "https://takeuforward.org/arrays/recursive-bubble-sort-algorithm/",
            "practice_link": null
          },
          {
            "name": "Recursive Insertion Sort",
            "post_link": "https://takeuforward.org/arrays/recursive-insertion-sort-algorithm/",
            "practice_link": null
          },
          {
            "name": "Quick Sort",
            "post_link": "https://takeuforward.org/data-structure/quick-sort-algorithm/",
            "practice_link": null
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 3 : Solve Problems on Arrays [Easy -> Medium -> Hard]",
    "lectures": [
      {
        "lecture_name": "Lec 1: Easy",
        "problems": [
          {
            "name": "Largest Element in an Array",
            "post_link": "https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/",
            "practice_link": null
          },
          {
            "name": "Second Largest Element in an Array without sorting",
            "post_link": "https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/",
            "practice_link": null
          },
          {
            "name": "Check if the array is sorted",
            "post_link": "https://takeuforward.org/data-structure/check-if-an-array-is-sorted/",
            "practice_link": "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/#:~:text=Input%3A%20nums%20%3D%20%5B2%2C,no%20rotation)%20to%20make%20nums."
          },
          {
            "name": "Remove duplicates from Sorted array",
            "post_link": "https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/",
            "practice_link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/#:~:text=Input%3A%20nums%20%3D%20%5B0%2C,%2C%203%2C%20and%204%20respectively."
          },
          {
            "name": "Left Rotate an array by one place",
            "post_link": "https://takeuforward.org/data-structure/left-rotate-the-array-by-one/",
            "practice_link": "https://leetcode.com/problems/rotate-array/"
          },
          {
            "name": "Left rotate an array by D places",
            "post_link": "https://takeuforward.org/data-structure/rotate-array-by-k-elements/",
            "practice_link": "https://leetcode.com/problems/rotate-array/"
          },
          {
            "name": "Move Zeros to end",
            "post_link": "https://takeuforward.org/data-structure/move-all-zeros-to-the-end-of-the-array/",
            "practice_link": "https://leetcode.com/problems/move-zeroes/"
          },
          {
            "name": "Linear Search",
            "post_link": "https://takeuforward.org/data-structure/linear-search-in-c/",
            "practice_link": null
          },
          {
            "name": "Find the Union",
            "post_link": "https://takeuforward.org/data-structure/union-of-two-sorted-arrays/",
            "practice_link": null
          },
          {
            "name": "Find missing number in an array",
            "post_link": "https://takeuforward.org/arrays/find-the-missing-number-in-an-array/",
            "practice_link": "https://leetcode.com/problems/missing-number/"
          },
          {
            "name": "Maximum Consecutive Ones",
            "post_link": "https://takeuforward.org/data-structure/count-maximum-consecutive-ones-in-the-array/",
            "practice_link": "https://leetcode.com/problems/max-consecutive-ones/"
          },
          {
            "name": "Find the number that appears once, and other numbers twice.",
            "post_link": "https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/",
            "practice_link": "https://leetcode.com/problems/single-number/"
          },
          {
            "name": "Longest subarray with given sum K(positives)",
            "post_link": "https://takeuforward.org/data-structure/longest-subarray-with-given-sum-k/",
            "practice_link": null
          },
          {
            "name": "Longest subarray with sum K (Positives + Negatives)",
            "post_link": "https://takeuforward.org/arrays/longest-subarray-with-sum-k-postives-and-negatives/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Medium",
        "problems": [
          {
            "name": "2Sum Problem",
            "post_link": "https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/",
            "practice_link": "https://leetcode.com/problems/two-sum/"
          },
          {
            "name": "Sort an array of 0's 1's and 2's",
            "post_link": "https://takeuforward.org/data-structure/sort-an-array-of-0s-1s-and-2s/",
            "practice_link": "https://leetcode.com/problems/sort-colors/"
          },
          {
            "name": "Majority Element (>n/2 times)",
            "post_link": "https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/",
            "practice_link": "https://leetcode.com/problems/majority-element/"
          },
          {
            "name": "Kadane's Algorithm, maximum subarray sum",
            "post_link": "https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/",
            "practice_link": "https://leetcode.com/problems/maximum-subarray/"
          },
          {
            "name": "Print subarray with maximum subarray sum (extended version of above problem)",
            "post_link": "https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/",
            "practice_link": null
          },
          {
            "name": "Stock Buy and Sell",
            "post_link": "https://takeuforward.org/data-structure/stock-buy-and-sell/",
            "practice_link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
          },
          {
            "name": "Rearrange the array in alternating positive and negative items",
            "post_link": "https://takeuforward.org/arrays/rearrange-array-elements-by-sign/",
            "practice_link": "https://leetcode.com/problems/rearrange-array-elements-by-sign/"
          },
          {
            "name": "Next Permutation",
            "post_link": "https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/",
            "practice_link": "https://leetcode.com/problems/next-permutation/"
          },
          {
            "name": "Leaders in an Array problem",
            "post_link": "https://takeuforward.org/data-structure/leaders-in-an-array/",
            "practice_link": null
          },
          {
            "name": "Longest Consecutive Sequence in an Array",
            "post_link": "https://takeuforward.org/data-structure/longest-consecutive-sequence-in-an-array/",
            "practice_link": "https://leetcode.com/problems/longest-consecutive-sequence/solution/"
          },
          {
            "name": "Set Matrix Zeros",
            "post_link": "https://takeuforward.org/data-structure/set-matrix-zero/",
            "practice_link": "https://leetcode.com/problems/set-matrix-zeroes/"
          },
          {
            "name": "Rotate Matrix by 90 degrees",
            "post_link": "https://takeuforward.org/data-structure/rotate-image-by-90-degree/",
            "practice_link": "https://leetcode.com/problems/rotate-image/"
          },
          {
            "name": "Print the matrix in spiral manner",
            "post_link": "https://takeuforward.org/data-structure/spiral-traversal-of-matrix/",
            "practice_link": "https://leetcode.com/problems/spiral-matrix/"
          },
          {
            "name": "Count subarrays with given sum",
            "post_link": "https://takeuforward.org/arrays/count-subarray-sum-equals-k/",
            "practice_link": "https://leetcode.com/problems/subarray-sum-equals-k/"
          }
        ]
      },
      {
        "lecture_name": "Lec 3: Hard",
        "problems": [
          {
            "name": "Pascal's Triangle",
            "post_link": "https://takeuforward.org/data-structure/program-to-generate-pascals-triangle/",
            "practice_link": "https://leetcode.com/problems/pascals-triangle/"
          },
          {
            "name": "Majority Element (n/3 times)",
            "post_link": "https://takeuforward.org/data-structure/majority-elementsn-3-times-find-the-elements-that-appears-more-than-n-3-times-in-the-array/",
            "practice_link": "https://leetcode.com/problems/majority-element-ii/"
          },
          {
            "name": "3-Sum Problem",
            "post_link": "https://takeuforward.org/data-structure/3-sum-find-triplets-that-add-up-to-a-zero/",
            "practice_link": "https://leetcode.com/problems/3sum/"
          },
          {
            "name": "4-Sum Problem",
            "post_link": "https://takeuforward.org/data-structure/4-sum-find-quads-that-add-up-to-a-target-value/",
            "practice_link": "https://leetcode.com/problems/4sum/"
          },
          {
            "name": "Largest Subarray with 0 Sum",
            "post_link": "https://takeuforward.org/data-structure/length-of-the-longest-subarray-with-zero-sum/",
            "practice_link": null
          },
          {
            "name": "Count number of subarrays with given xor K",
            "post_link": "https://takeuforward.org/data-structure/count-the-number-of-subarrays-with-given-xor-k/",
            "practice_link": null
          },
          {
            "name": "Merge Overlapping Subintervals",
            "post_link": "https://takeuforward.org/data-structure/merge-overlapping-sub-intervals/",
            "practice_link": "https://leetcode.com/problems/merge-intervals/"
          },
          {
            "name": "Merge two sorted arrays without extra space",
            "post_link": "https://takeuforward.org/data-structure/merge-two-sorted-arrays-without-extra-space/",
            "practice_link": "https://leetcode.com/problems/merge-sorted-array/"
          },
          {
            "name": "Find the repeating and missing number",
            "post_link": "https://takeuforward.org/data-structure/find-the-repeating-and-missing-numbers/",
            "practice_link": null
          },
          {
            "name": "Count Inversions",
            "post_link": "https://takeuforward.org/data-structure/count-inversions-in-an-array/",
            "practice_link": null
          },
          {
            "name": "Reverse Pairs",
            "post_link": "https://takeuforward.org/data-structure/count-reverse-pairs/",
            "practice_link": "https://leetcode.com/problems/reverse-pairs/"
          },
          {
            "name": "Maximum Product Subarray",
            "post_link": "https://takeuforward.org/data-structure/maximum-product-subarray-in-an-array/",
            "practice_link": "https://leetcode.com/problems/maximum-product-subarray/"
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 4 : Binary Search [1D, 2D Arrays, Search Space]",
    "lectures": [
      {
        "lecture_name": "Lec 1: BS on 1D Arrays",
        "problems": [
          {
            "name": "Binary Search to find X in sorted array",
            "post_link": "https://takeuforward.org/data-structure/binary-search-explained/",
            "practice_link": "https://leetcode.com/problems/binary-search/"
          },
          {
            "name": "Implement Lower Bound",
            "post_link": "https://takeuforward.org/arrays/implement-lower-bound-bs-2/",
            "practice_link": null
          },
          {
            "name": "Implement Upper Bound",
            "post_link": "https://takeuforward.org/arrays/implement-upper-bound/",
            "practice_link": null
          },
          {
            "name": "Search Insert Position",
            "post_link": "https://takeuforward.org/arrays/search-insert-position/",
            "practice_link": "https://leetcode.com/problems/search-insert-position/#:~:text=Search%20Insert%20Position%20%2D%20LeetCode&text=Given%20a%20sorted%20array%20of,(log%20n)%20runtime%20complexity."
          },
          {
            "name": "Floor/Ceil in Sorted Array",
            "post_link": "https://takeuforward.org/arrays/floor-and-ceil-in-sorted-array/",
            "practice_link": null
          },
          {
            "name": "Find the first or last occurrence of a given number in a sorted array",
            "post_link": "https://takeuforward.org/data-structure/last-occurrence-in-a-sorted-array/",
            "practice_link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
          },
          {
            "name": "Count occurrences of a number in a sorted array with duplicates",
            "post_link": "https://takeuforward.org/data-structure/count-occurrences-in-sorted-array/",
            "practice_link": null
          },
          {
            "name": "Search in Rotated Sorted Array I",
            "post_link": "https://takeuforward.org/data-structure/search-element-in-a-rotated-sorted-array/",
            "practice_link": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
          },
          {
            "name": "Search in Rotated Sorted Array II",
            "post_link": "https://takeuforward.org/arrays/search-element-in-rotated-sorted-array-ii/",
            "practice_link": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/"
          },
          {
            "name": "Find minimum in Rotated Sorted Array",
            "post_link": "https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/",
            "practice_link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
          },
          {
            "name": "Find out how many times has an array been rotated",
            "post_link": "https://takeuforward.org/arrays/find-out-how-many-times-the-array-has-been-rotated/",
            "practice_link": null
          },
          {
            "name": "Single element in a Sorted Array",
            "post_link": "https://takeuforward.org/data-structure/search-single-element-in-a-sorted-array/",
            "practice_link": "https://leetcode.com/problems/single-element-in-a-sorted-array/"
          },
          {
            "name": "Find peak element",
            "post_link": "https://takeuforward.org/data-structure/peak-element-in-array/",
            "practice_link": "https://leetcode.com/problems/find-peak-element/#:~:text=Find%20Peak%20Element%20%2D%20LeetCode&text=A%20peak%20element%20is%20an,to%20any%20of%20the%20peaks."
          }
        ]
      },
      {
        "lecture_name": "Lec 2: BS on Answers",
        "problems": [
          {
            "name": "Find square root of a number in log n",
            "post_link": "https://takeuforward.org/binary-search/finding-sqrt-of-a-number-using-binary-search/",
            "practice_link": null
          },
          {
            "name": "Find the Nth root of a number using binary search",
            "post_link": "https://takeuforward.org/data-structure/nth-root-of-a-number-using-binary-search/",
            "practice_link": null
          },
          {
            "name": "Koko Eating Bananas",
            "post_link": "https://takeuforward.org/binary-search/koko-eating-bananas/",
            "practice_link": "https://leetcode.com/problems/koko-eating-bananas/"
          },
          {
            "name": "Minimum days to make M bouquets",
            "post_link": "https://takeuforward.org/arrays/minimum-days-to-make-m-bouquets/",
            "practice_link": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/"
          },
          {
            "name": "Find the smallest Divisor",
            "post_link": "https://takeuforward.org/arrays/find-the-smallest-divisor-given-a-threshold/",
            "practice_link": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/"
          },
          {
            "name": "Capacity to Ship Packages within D Days",
            "post_link": "https://takeuforward.org/arrays/capacity-to-ship-packages-within-d-days/",
            "practice_link": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
          },
          {
            "name": "Aggressive Cows",
            "post_link": "https://takeuforward.org/binary-search/aggressive-cows-problem/",
            "practice_link": null
          },
          {
            "name": "Book Allocation Problem",
            "post_link": "https://takeuforward.org/data-structure/allocate-minimum-number-of-pages/",
            "practice_link": null
          },
          {
            "name": "Split array - Largest Sum",
            "post_link": "https://takeuforward.org/arrays/split-array-largest-sum/",
            "practice_link": "https://leetcode.com/problems/split-array-largest-sum/"
          },
          {
            "name": "Kth Missing Positive Number",
            "post_link": "https://takeuforward.org/arrays/kth-missing-positive-number/",
            "practice_link": null
          },
          {
            "name": "Find the number of subarrays with product less than K",
            "post_link": "https://takeuforward.org/arrays/number-of-subarrays-with-product-less-than-k/",
            "practice_link": null
          },
          {
            "name": "Find the number of elements in a sorted array less than or equal to a given value",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Find the number of elements in a sorted array greater than or equal to a given value",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Find the number of elements in a sorted array within a given range",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 3: BS on 2D Arrays",
        "problems": [
          {
            "name": "Row with maximum number of ones",
            "post_link": "https://takeuforward.org/arrays/row-with-maximum-number-of-ones/",
            "practice_link": null
          },
          {
            "name": "Search in a 2D Matrix",
            "post_link": "https://takeuforward.org/arrays/search-element-in-a-matrix/",
            "practice_link": null
          },
          {
            "name": "Search in a 2D Matrix II",
            "post_link": "https://takeuforward.org/arrays/search-element-in-a-matrix-ii/",
            "practice_link": null
          },
          {
            "name": "Find a peak element in 2D Matrix",
            "post_link": "https://takeuforward.org/arrays/find-peak-element-in-2d-matrix/",
            "practice_link": null
          },
          {
            "name": "Median in a row-wise sorted matrix",
            "post_link": "https://takeuforward.org/arrays/median-in-row-wise-sorted-matrix/",
            "practice_link": null
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 5: Strings",
    "lectures": [
      {
        "lecture_name": "Lec 1: Basic and Easy String Problems",
        "problems": [
          {
            "name": "Remove outermost Paranthesis",
            "post_link": null,
            "practice_link": "https://leetcode.com/problems/remove-outermost-parentheses/"
          },
          {
            "name": "Reverse Every Word in A String",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Isomorphic String",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Check whether one string is a rotation of another",
            "post_link": null,
            "practice_link": "https://leetcode.com/problems/rotate-string/"
          },
          {
            "name": "Longest Common Prefix",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Valid Anagram",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Sort Characters by Frequency",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Medium String Problems",
        "problems": [
          {
            "name": "Longest Substring Without Repeating Characters",
            "post_link": "https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/",
            "practice_link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
          },
          {
            "name": "Longest Palindromic Substring [Do it without DP]",
            "post_link": null,
            "practice_link": "https://leetcode.com/problems/longest-palindromic-substring/"
          },
          {
            "name": "Count Number of Substrings",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Repeating Character Replacement",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "String to Integer (atoi)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Implement Atoi",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Valid Palindrome",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Roman to Integer",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 3: Hard String Problems",
        "problems": [
          {
            "name": "Minimum Window Substring",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Count Palindromic Substrings",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Happy Prefix",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Shortest Palindrome",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Text Justification",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Basic Calculator II",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Integer to Roman",
            "post_link": null,
            "practice_link": null
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 6: Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]",
    "lectures": [
      {
        "lecture_name": "Lec 1: Learn 1D LinkedList",
        "problems": [
          {
            "name": "Introduction to LinkedList, learn about struct, and how is node represented",
            "post_link": "https://takeuforward.org/linked-list/linked-list-introduction",
            "practice_link": null
          },
          {
            "name": "Inserting a node in LinkedList",
            "post_link": "https://takeuforward.org/linked-list/insert-at-the-head-of-a-linked-list",
            "practice_link": null
          },
          {
            "name": "Deleting a node in LinkedList",
            "post_link": "https://takeuforward.org/data-structure/delete-last-node-of-linked-list",
            "practice_link": "https://leetcode.com/problems/delete-node-in-a-linked-list/"
          },
          {
            "name": "Find the length of the linkedlist [learn traversal]",
            "post_link": "https://takeuforward.org/linked-list/find-the-length-of-a-linked-list",
            "practice_link": null
          },
          {
            "name": "Search an element in the LL",
            "post_link": "https://takeuforward.org/linked-list/search-an-element-in-a-linked-list",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Learn Doubly LinkedList",
        "problems": [
          {
            "name": "Introduction to DLL, learn about struct, and how is node represented",
            "post_link": "https://takeuforward.org/linked-list/introduction-to-doubly-linked-list",
            "practice_link": null
          },
          {
            "name": "Insert a node in DLL",
            "post_link": "https://takeuforward.org/data-structure/insert-at-end-of-doubly-linked-list",
            "practice_link": null
          },
          {
            "name": "Delete a node in DLL",
            "post_link": "https://takeuforward.org/data-structure/delete-last-node-of-a-doubly-linked-list",
            "practice_link": null
          },
          {
            "name": "Reverse a DLL",
            "post_link": "https://takeuforward.org/data-structure/reverse-a-doubly-linked-list",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 3: Medium Problems of LL",
        "problems": [
          {
            "name": "Middle of a LinkedList [Tortoise & Hare Method]",
            "post_link": "https://takeuforward.org/data-structure/find-middle-element-in-a-linked-list",
            "practice_link": "https://leetcode.com/problems/middle-of-the-linked-list/"
          },
          {
            "name": "Reverse a LinkedList",
            "post_link": "https://takeuforward.org/linked-list/reverse-a-linked-list-iterative-recursive",
            "practice_link": "https://leetcode.com/problems/reverse-linked-list/"
          },
          {
            "name": "Reverse a LinkedList in groups of K",
            "post_link": "https://takeuforward.org/linked-list/reverse-linked-list-in-groups-of-k/",
            "practice_link": "https://leetcode.com/problems/reverse-nodes-in-k-group/"
          },
          {
            "name": "Detect a Cycle in LinkedList",
            "post_link": "https://takeuforward.org/linked-list/detect-a-cycle-in-linked-list",
            "practice_link": "https://leetcode.com/problems/linked-list-cycle/"
          },
          {
            "name": "Detect a Cycle in LinkedList (Return Node)",
            "post_link": "https://takeuforward.org/linked-list/detect-cycle-in-linked-list-return-node",
            "practice_link": "https://leetcode.com/problems/linked-list-cycle-ii/"
          },
          {
            "name": "Length of Loop in LinkedList",
            "post_link": "https://takeuforward.org/linked-list/find-length-of-loop-in-linked-list",
            "practice_link": null
          },
          {
            "name": "Check if LinkedList is Palindrome",
            "post_link": "https://takeuforward.org/data-structure/check-if-given-linked-list-is-plaindrome/",
            "practice_link": "https://leetcode.com/problems/palindrome-linked-list/"
          },
          {
            "name": "Odd Even LinkedList",
            "post_link": "https://takeuforward.org/linked-list/odd-even-linked-list",
            "practice_link": "https://leetcode.com/problems/odd-even-linked-list/"
          },
          {
            "name": "Remove Nth node from the back of the LL",
            "post_link": "https://takeuforward.org/linked-list/remove-nth-node-from-back-of-linked-list",
            "practice_link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
          },
          {
            "name": "Delete the middle node of LL",
            "post_link": "https://takeuforward.org/linked-list/delete-the-middle-node-of-the-linked-list",
            "practice_link": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/#:~:text=You%20are%20given%20the%20head,than%20or%20equal%20to%20x%20."
          },
          {
            "name": "Sort LL",
            "post_link": "https://takeuforward.org/linked-list/sort-a-linked-list",
            "practice_link": "https://leetcode.com/problems/sort-list/"
          },
          {
            "name": "Sort a LL of 0's 1's and 2's by changing links",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Find the intersection point of Y LL",
            "post_link": "https://takeuforward.org/data-structure/find-intersection-of-two-linked-lists",
            "practice_link": "https://leetcode.com/problems/intersection-of-two-linked-lists/"
          },
          {
            "name": "Add two numbers as LinkedList",
            "post_link": "https://takeuforward.org/linked-list/add-two-numbers-as-linked-list",
            "practice_link": "https://leetcode.com/problems/add-two-numbers/"
          },
          {
            "name": "Delete all occurrences of a key in LL",
            "post_link": "https://takeuforward.org/linked-list/delete-all-occurrences-of-a-key-in-linked-list",
            "practice_link": "https://leetcode.com/problems/remove-linked-list-elements/"
          }
        ]
      },
      {
        "lecture_name": "Lec 4: Medium Problems of DLL",
        "problems": [
          {
            "name": "Delete all occurrences of a key in DLL",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Find pairs with given sum in DLL",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Remove duplicates from sorted DLL",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 5: Hard Problems of LL",
        "problems": [
          {
            "name": "Rotate a LinkedList",
            "post_link": "https://takeuforward.org/linked-list/rotate-linked-list",
            "practice_link": "https://leetcode.com/problems/rotate-list/"
          },
          {
            "name": "Flattening a LinkedList",
            "post_link": "https://takeuforward.org/data-structure/flattening-a-linked-list/",
            "practice_link": null
          },
          {
            "name": "Flatten a Multilevel Doubly LinkedList",
            "post_link": "https://takeuforward.org/linked-list/flatten-a-multilevel-doubly-linked-list",
            "practice_link": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/"
          },
          {
            "name": "Delete N nodes after M nodes of a LinkedList",
            "post_link": "https://takeuforward.org/linked-list/delete-n-nodes-after-m-nodes-of-a-linked-list",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 6: Clone LL",
        "problems": [
          {
            "name": "Clone a LinkedList with random and next pointer",
            "post_link": "https://takeuforward.org/linked-list/clone-linked-list-with-random-and-next-pointer",
            "practice_link": "https://leetcode.com/problems/copy-list-with-random-pointer/"
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 7: Learn Recursion and Backtracking",
    "lectures": [
      {
        "lecture_name": "Lec 1: Basic Recursion Problems",
        "problems": [
          {
            "name": "Subsequences Pattern",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Generate all binary strings",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Generate Paranthesis",
            "post_link": null,
            "practice_link": "https://leetcode.com/problems/generate-parentheses/"
          },
          {
            "name": "Print all subsequences/Power Set",
            "post_link": "https://takeuforward.org/data-structure/power-set-print-all-the-possible-subsequences-of-the-string/",
            "practice_link": "https://leetcode.com/problems/subsets/"
          },
          {
            "name": "Learn All Patterns of Subsequences (Theory)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Count all subsequences with sum K",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Check if there exists a subsequence with sum K",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Medium Recursion Problems",
        "problems": [
          {
            "name": "Combination Sum",
            "post_link": "https://takeuforward.org/data-structure/combination-sum-1/",
            "practice_link": "https://leetcode.com/problems/combination-sum/"
          },
          {
            "name": "Combination Sum-II",
            "post_link": "https://takeuforward.org/data-structure/combination-sum-ii-find-all-unique-combinations/",
            "practice_link": "https://leetcode.com/problems/combination-sum-ii/"
          },
          {
            "name": "Subset Sum",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Combinations",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Permutations",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "N Queen",
            "post_link": "https://takeuforward.org/data-structure/n-queen-problem-return-all-distinct-solutions-to-the-n-queens-puzzle/",
            "practice_link": null
          },
          {
            "name": "Sudoku Solver",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "M-Coloring Problem",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Rat in a Maze Problem",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Word Search",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Palindromic Partitioning",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "K-th Permutation Sequence",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 3: Hard Recursion Problems",
        "problems": [
          {
            "name": "Print all permutations of a string/array",
            "post_link": "https://takeuforward.org/recursion/print-all-permutations-of-a-string-array/",
            "practice_link": null
          },
          {
            "name": "N-Queens Problem",
            "post_link": "https://takeuforward.org/data-structure/n-queen-problem-return-all-distinct-solutions-to-the-n-queens-puzzle/",
            "practice_link": null
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 8: Learn Bit Manipulation",
    "lectures": [
      {
        "lecture_name": "Lec 1: Basic Bit Manipulation",
        "problems": [
          {
            "name": "Check if the i-th bit is set or not",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Set the i-th bit",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Clear the i-th bit",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Toggle the i-th bit",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Remove the last set bit",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Check if a number is power of 2 or not",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Count set bits",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Find the number that appears odd number of times",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Power Set",
            "post_link": null,
            "practice_link": "https://leetcode.com/problems/subsets/"
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 9: Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]",
    "lectures": [
      {
        "lecture_name": "Lec 1: Learning",
        "problems": [
          {
            "name": "Implement Stack using Arrays",
            "post_link": "https://takeuforward.org/data-structure/implement-stack-using-array/",
            "practice_link": null
          },
          {
            "name": "Implement Queue using Arrays",
            "post_link": "https://takeuforward.org/data-structure/implement-queue-using-array/",
            "practice_link": null
          },
          {
            "name": "Implement Stack using Queue",
            "post_link": "https://takeuforward.org/data-structure/implement-stack-using-single-queue/",
            "practice_link": "https://leetcode.com/problems/implement-stack-using-queues/"
          },
          {
            "name": "Implement Queue using Stack",
            "post_link": "https://takeuforward.org/data-structure/implement-queue-using-stack/",
            "practice_link": "https://leetcode.com/problems/implement-queue-using-stacks/"
          },
          {
            "name": "Implement Deque",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Implement Circular Queue",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Implement Min Stack",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Implement Queue using Circular Array",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Medium/Hard",
        "problems": [
          {
            "name": "Valid Paranthesis Checker",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Next Greater Element",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Next Greater Element 2",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Next Smaller Element",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Number of NGEs to the right",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Trapping Rainwater",
            "post_link": "https://takeuforward.org/data-structure/trapping-rainwater/",
            "practice_link": "https://leetcode.com/problems/trapping-rain-water/"
          },
          {
            "name": "Sum of subarray minimum",
            "post_link": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "practice_link": "https://leetcode.com/problems/sum-of-subarray-minimums/"
          },
          {
            "name": "Stock span problem",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "The Celebrity Problem",
            "post_link": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "practice_link": "https://leetcode.com/accounts/login/?next=/problems/find-the-celebrity/"
          },
          {
            "name": "Largest Rectangle in Histogram",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Maximal Rectangle",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 3: Prefix, Infix, Postfix",
        "problems": [
          {
            "name": "Infix to Postfix",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Postfix to Infix",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Prefix to Infix",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 4: Sliding Window & Two Pointer Combined Problems",
        "problems": [
          {
            "name": "Longest Substring Without Repeating Characters",
            "post_link": "https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/",
            "practice_link": null
          },
          {
            "name": "Longest Substring with K Unique Characters",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with At Most K Distinct Characters",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with At Most Two Distinct Characters",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with At Least K Repeating Characters",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with Exactly K Distinct Characters",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with All Unique Characters",
            "post_link": null,
            "practice_link": null
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 10: Sliding Window & Two Pointer Combined Problems",
    "lectures": [
      {
        "lecture_name": "Lec 1: Medium Problems",
        "problems": [
          {
            "name": "Longest Substring Without Repeating Characters",
            "post_link": "https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/",
            "practice_link": null
          },
          {
            "name": "Longest Substring with K Unique Characters",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with At Most K Distinct Characters",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with At Most Two Distinct Characters",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with At Least K Repeating Characters",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with Exactly K Distinct Characters",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with All Unique Characters",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Hard Problems",
        "problems": [
          {
            "name": "Minimum Window Subsequence",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Count Number of Substrings",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Repeating Character Replacement",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest Substring with At Most K Distinct Characters",
            "post_link": null,
            "practice_link": null
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 11: Greedy Algorithms",
    "lectures": [
      {
        "lecture_name": "Lec 1: Medium Problems",
        "problems": [
          {
            "name": "N meetings in one room",
            "post_link": "https://takeuforward.org/Greedy/n-meetings-in-one-room",
            "practice_link": null
          },
          {
            "name": "Jump Game",
            "post_link": "https://takeuforward.org/Greedy/jump-game-i",
            "practice_link": null
          },
          {
            "name": "Jump Game 2",
            "post_link": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "practice_link": "https://leetcode.com/problems/jump-game-ii/"
          },
          {
            "name": "Fractional Knapsack",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Minimum Platforms",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Job Sequencing Problem",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Coin Change Problem",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Activity Selection Problem",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Hard Problems",
        "problems": [
          {
            "name": "Candy",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Assign Cookies",
            "post_link": null,
            "practice_link": "https://leetcode.com/problems/assign-cookies/"
          },
          {
            "name": "Gas Station",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Lemonade Change",
            "post_link": null,
            "practice_link": null
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 12: Backtracking",
    "lectures": [
      {
        "lecture_name": "Lec 1: Medium Problems",
        "problems": [
          {
            "name": "Permutations",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "N-Queens Problem",
            "post_link": "https://takeuforward.org/data-structure/n-queen-problem-return-all-distinct-solutions-to-the-n-queens-puzzle/",
            "practice_link": null
          },
          {
            "name": "Sudoku Solver",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "M-Coloring Problem",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Rat in a Maze Problem",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Word Search",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Palindromic Partitioning",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "K-th Permutation Sequence",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Hard Problems",
        "problems": [
          {
            "name": "Combination Sum III",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Combinations",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Permutations II",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Subsets II",
            "post_link": null,
            "practice_link": null
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 13 : Binary Trees [Traversals, Medium and Hard Problems]",
    "lectures": [
      {
        "lecture_name": "Lec 1: Traversals",
        "problems": [
          {
            "name": "Introduction to Trees",
            "post_link": "https://takeuforward.org/binary-tree/introduction-to-trees/",
            "practice_link": null
          },
          {
            "name": "Binary Tree Representation in C++",
            "post_link": "https://takeuforward.org/binary-tree/binary-tree-representation-in-c/",
            "practice_link": null
          },
          {
            "name": "Binary Tree Representation in Java",
            "post_link": "https://takeuforward.org/binary-tree/binary-tree-representation-in-java/",
            "practice_link": null
          },
          {
            "name": "Preorder Traversal of Binary Tree",
            "post_link": "https://takeuforward.org/data-structure/preorder-traversal-of-binary-tree/",
            "practice_link": "https://leetcode.com/problems/binary-tree-preorder-traversal/"
          },
          {
            "name": "Inorder Traversal of Binary Tree",
            "post_link": "https://takeuforward.org/data-structure/inorder-traversal-of-binary-tree/",
            "practice_link": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
          },
          {
            "name": "Post-order Traversal of Binary Tree",
            "post_link": "https://takeuforward.org/data-structure/post-order-traversal-of-binary-tree/",
            "practice_link": "https://leetcode.com/problems/binary-tree-postorder-traversal/"
          },
          {
            "name": "Level order Traversal of Binary Tree",
            "post_link": "https://takeuforward.org/binary-tree/level-order-traversal-of-a-binary-tree/",
            "practice_link": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
          },
          {
            "name": "Iterative Preorder Traversal of Binary Tree",
            "post_link": "https://takeuforward.org/data-structure/iterative-preorder-traversal-of-binary-tree/",
            "practice_link": null
          },
          {
            "name": "Iterative Inorder Traversal of Binary Tree",
            "post_link": "https://takeuforward.org/data-structure/inorder-traversal-of-binary-tree/",
            "practice_link": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
          },
          {
            "name": "Post-order Traversal of Binary Tree using 2 stack",
            "post_link": "https://takeuforward.org/data-structure/iterative-postorder-traversal-of-binary-tree-using-2-stack",
            "practice_link": "https://leetcode.com/problems/binary-tree-postorder-traversal/"
          },
          {
            "name": "Post-order Traversal of Binary Tree using 1 stack",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Zig Zag Traversal of Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Boundary Traversal of Binary Tree",
            "post_link": "https://takeuforward.org/data-structure/boundary-traversal-of-a-binary-tree/",
            "practice_link": "https://leetcode.com/problems/boundary-of-binary-tree/"
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Medium Problems",
        "problems": [
          {
            "name": "Vertical Order Traversal of Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Top View of Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Bottom View of Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Right/Left View of Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Symmetric Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Maximum path sum in Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Diameter of Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Height of Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Check if Binary Tree is Balanced",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "LCA in Binary Tree",
            "post_link": "https://takeuforward.org/data-structure/lowest-common-ancestor-for-two-given-nodes/",
            "practice_link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
          },
          {
            "name": "Maximum Width of Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Count total Nodes in a COMPLETE Binary Tree",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 3: Hard Problems",
        "problems": [
          {
            "name": "Root to Node Path in Binary Tree",
            "post_link": "https://takeuforward.org/data-structure/print-root-to-node-path-in-a-binary-tree/",
            "practice_link": null
          },
          {
            "name": "Requirements needed to construct a Unique Binary Tree | Theory",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Construct Binary Tree from inorder and preorder",
            "post_link": "https://takeuforward.org/data-structure/construct-a-binary-tree-from-inorder-and-preorder-traversal/",
            "practice_link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
          },
          {
            "name": "Construct the Binary Tree from Postorder and Inorder Traversal",
            "post_link": "https://takeuforward.org/data-structure/construct-binary-tree-from-inorder-and-postorder-traversal/",
            "practice_link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"
          },
          {
            "name": "Serialize and deserialize Binary Tree",
            "post_link": "https://takeuforward.org/data-structure/serialize-and-deserialize-a-binary-tree/",
            "practice_link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
          },
          {
            "name": "Flatten Binary Tree to LinkedList",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Children Sum Property",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "All Nodes Distance K in Binary Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Burn Tree",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Count Complete Tree Nodes",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Construct Binary Tree from Preorder and Postorder Traversal",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Construct Binary Tree from Inorder and Level Order Traversal",
            "post_link": null,
            "practice_link": null
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 14: Binary Search Trees [Concept and Problems]",
    "lectures": [
      {
        "lecture_name": "Lec 1: Concepts",
        "problems": [
          {
            "name": "Introduction to BST",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Search in a BST",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Insert a given Node in Binary Search Tree",
            "post_link": null,
            "practice_link": "https://leetcode.com/problems/insert-into-a-binary-search-tree/"
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Medium Problems",
        "problems": [
          {
            "name": "Delete a Node in BST",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Minimum value in BST",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Maximum value in BST",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "LCA in Binary Search Tree",
            "post_link": null,
            "practice_link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
          },
          {
            "name": "Construct a BST from a preorder traversal",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Validate Binary Search Tree",
            "post_link": null,
            "practice_link": "https://leetcode.com/problems/validate-binary-search-tree/"
          },
          {
            "name": "Two Sum In BST | Check if there exists a pair with Sum K",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Kth Smallest Element in a BST",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Kth Largest Element in a BST",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Ceil in BST",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Floor in BST",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Inorder Successor in BST",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Inorder Predecessor in BST",
            "post_link": null,
            "practice_link": null
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 15: Graphs",
    "lectures": [
      {
        "lecture_name": "Lec 1: BFS/DFS",
        "problems": [
          {
            "name": "BFS",
            "post_link": "https://takeuforward.org/graph/breadth-first-search-bfs-level-order-traversal/",
            "practice_link": null
          },
          {
            "name": "DFS",
            "post_link": "https://takeuforward.org/data-structure/depth-first-search-dfs/",
            "practice_link": null
          },
          {
            "name": "Number of provinces (leetcode)",
            "post_link": "https://takeuforward.org/data-structure/number-of-provinces/",
            "practice_link": "https://leetcode.com/problems/number-of-provinces/#:~:text=A%20province%20is%20a%20group,the%20total%20number%20of%20provinces."
          },
          {
            "name": "Connected Components in a Graph",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Number of Islands (BFS)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Flood Fill Algorithm",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Rotten Oranges",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Cycle Detection in Undirected Graph (BFS)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Cycle Detection in Undirected Graph (DFS)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Distance of nearest cell having 1",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Surrounded Regions (dfs)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Number of Enclaves [flood fill implementation - multisource]",
            "post_link": "https://takeuforward.org/graph/number-of-enclaves/",
            "practice_link": "https://leetcode.com/problems/number-of-enclaves/"
          },
          {
            "name": "Word ladder - 1",
            "post_link": "https://takeuforward.org/graph/word-ladder-i-g-29/",
            "practice_link": "https://leetcode.com/problems/word-ladder/"
          },
          {
            "name": "Bipartite Graph (BFS/DFS)",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 2: Topological Sort and Problems",
        "problems": [
          {
            "name": "Topo Sort",
            "post_link": "https://takeuforward.org/data-structure/topological-sort-algorithm-dfs-g-21/",
            "practice_link": null
          },
          {
            "name": "Kahn's Algorithm",
            "post_link": "https://takeuforward.org/data-structure/kahns-algorithm-topological-sort-algorithm-bfs-g-22/",
            "practice_link": null
          },
          {
            "name": "Cycle Detection in Directed Graph (BFS)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Course Schedule - I",
            "post_link": "https://takeuforward.org/data-structure/course-schedule-i-and-ii-pre-requisite-tasks-topological-sort-g-24/",
            "practice_link": "https://leetcode.com/problems/course-schedule/"
          },
          {
            "name": "Course Schedule - II",
            "post_link": "https://takeuforward.org/data-structure/course-schedule-i-and-ii-pre-requisite-tasks-topological-sort-g-24/",
            "practice_link": "https://leetcode.com/problems/course-schedule-ii/"
          },
          {
            "name": "Alien Dictionary",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 3: Shortest Path Algorithms and Problems",
        "problems": [
          {
            "name": "Shortest Path in UG with unit weights",
            "post_link": "https://takeuforward.org/graph/shortest-path-in-undirected-graph-with-unit-distance-g-28/",
            "practice_link": null
          },
          {
            "name": "Shortest Path in DAG",
            "post_link": "https://takeuforward.org/data-structure/shortest-path-in-directed-acyclic-graph-topological-sort-g-27/",
            "practice_link": null
          },
          {
            "name": "Djisktra's Algorithm",
            "post_link": "https://takeuforward.org/data-structure/dijkstras-algorithm-using-set-g-33/",
            "practice_link": null
          },
          {
            "name": "Bellman Ford Algorithm",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Floyd Warshall Algorithm",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Minimum Spanning Tree (Prim's Algorithm)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Minimum Spanning Tree (Kruskal's Algorithm)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Number of Ways to Arrive at Destination",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Cheapest Flights Within K Stops",
            "post_link": "https://takeuforward.org/data-structure/g-38-cheapest-flights-within-k-stops/",
            "practice_link": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
          },
          {
            "name": "Network Delay Time",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Path with Minimum Effort",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Swim in rising water",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Most stones removed with same rows or columns",
            "post_link": "https://takeuforward.org/data-structure/most-stones-removed-with-same-row-or-column-dsu-g-53/",
            "practice_link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
          }
        ]
      },
      {
        "lecture_name": "Lec 4: Other Algorithms",
        "problems": [
          {
            "name": "Bridges in Graph",
            "post_link": "https://takeuforward.org/graph/bridges-in-graph-using-tarjans-algorithm-of-time-in-and-low-time-g-55/",
            "practice_link": null
          },
          {
            "name": "Articulation Point in Graph",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Tarjan's Algorithm for SCC",
            "post_link": null,
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 5: Disjoint Set Union (DSU)",
        "problems": [
          {
            "name": "Number of Connected Components in an Undirected Graph",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Number of Provinces (Union-Find)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Accounts merge",
            "post_link": "https://takeuforward.org/data-structure/accounts-merge-dsu-g-50/",
            "practice_link": "https://leetcode.com/problems/accounts-merge/"
          },
          {
            "name": "Number of islands II",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Most stones removed with same rows or columns",
            "post_link": "https://takeuforward.org/data-structure/most-stones-removed-with-same-row-or-column-dsu-g-53/",
            "practice_link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
          }
        ]
      }
    ]
  },
  {
    "step_name": "Step 16: Dynamic Programming",
    "lectures": [
      {
        "lecture_name": "Lec 1: Introduction to DP",
        "problems": [
          {
            "name": "Climbing Stairs (DP 1)",
            "post_link": "https://takeuforward.org/dynamic-programming/climbing-stairs-dp-1/",
            "practice_link": "https://leetcode.com/problems/climbing-stairs/"
          },
          {
            "name": "Frog Jump (DP 3)",
            "post_link": "https://takeuforward.org/dynamic-programming/frog-jump-dp-3/",
            "practice_link": null
          },
          {
            "name": "Max Sum of Non-Adjacent Elements (DP 4)",
            "post_link": "https://takeuforward.org/dynamic-programming/maximum-sum-of-non-adjacent-elements-dp-4/",
            "practice_link": null
          },
          {
            "name": "House Robber (DP 6)",
            "post_link": "https://takeuforward.org/dynamic-programming/house-robber-dp-6/",
            "practice_link": "https://leetcode.com/problems/house-robber/"
          },
          {
            "name": "Ninja's Training (DP 7)",
            "post_link": "https://takeuforward.org/dynamic-programming/ninja-training-dp-7/",
            "practice_link": null
          },
          {
            "name": "Grid Unique Paths (DP 8)",
            "post_link": "https://takeuforward.org/data-structure/grid-unique-paths-dp-8/",
            "practice_link": "https://leetcode.com/problems/unique-paths/"
          },
          {
            "name": "Grid Unique Paths 2 (DP 9)",
            "post_link": "https://takeuforward.org/data-structure/grid-unique-paths-2-dp-9/",
            "practice_link": "https://leetcode.com/problems/unique-paths-ii/"
          },
          {
            "name": "Minimum Path Sum in Grid (DP 10)",
            "post_link": "https://takeuforward.org/dynamic-programming/minimum-path-sum-in-grid-dp-10/",
            "practice_link": "https://leetcode.com/problems/minimum-path-sum/"
          },
          {
            "name": "Triangle (DP 11)",
            "post_link": "https://takeuforward.org/dynamic-programming/triangle-dp-11/",
            "practice_link": "https://leetcode.com/problems/triangle/"
          },
          {
            "name": "Minimum Falling Path Sum (DP 12)",
            "post_link": "https://takeuforward.org/dynamic-programming/minimum-falling-path-sum-dp-12/",
            "practice_link": null
          },
          {
            "name": "Cherry Pickup (DP 13)",
            "post_link": "https://takeuforward.org/dynamic-programming/cherry-pickup-dp-13/",
            "practice_link": null
          },
          {
            "name": "Longest Common Subsequence (DP 25)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-common-subsequence-dp-25/",
            "practice_link": "https://leetcode.com/problems/longest-common-subsequence/"
          }
        ]
      },
      {
        "lecture_name": "Lec 2: DP on Subsequences",
        "problems": [
          {
            "name": "Subset sum equal to target (DP- 14)",
            "post_link": "https://takeuforward.org/data-structure/subset-sum-equal-to-target-dp-14/",
            "practice_link": null
          },
          {
            "name": "Partition Equal Subset Sum (DP- 15)",
            "post_link": "https://takeuforward.org/data-structure/partition-equal-subset-sum-dp-15/",
            "practice_link": null
          },
          {
            "name": "Partition Set Into 2 Subsets With Min Absolute Sum Diff (DP- 16)",
            "post_link": "https://takeuforward.org/data-structure/partition-set-into-2-subsets-with-min-absolute-sum-diff-dp-16/",
            "practice_link": null
          },
          {
            "name": "Count Partitions With Given Difference (DP- 17)",
            "post_link": "https://takeuforward.org/dynamic-programming/count-partitions-with-given-difference-dp-17/",
            "practice_link": null
          },
          {
            "name": "Count Subsets With Sum K (DP- 18)",
            "post_link": "https://takeuforward.org/dynamic-programming/count-subsets-with-sum-k-dp-18/",
            "practice_link": null
          },
          {
            "name": "0/1 Knapsack (DP- 19)",
            "post_link": "https://takeuforward.org/dynamic-programming/0-1-knapsack-problem-dp-19/",
            "practice_link": null
          },
          {
            "name": "Minimum Coins (DP - 20)",
            "post_link": "https://takeuforward.org/dynamic-programming/minimum-coins-dp-20/",
            "practice_link": null
          },
          {
            "name": "Target Sum (DP - 21)",
            "post_link": "https://takeuforward.org/data-structure/target-sum-dp-21/",
            "practice_link": "https://leetcode.com/problems/target-sum/"
          },
          {
            "name": "Coin Change 2 (DP - 22)",
            "post_link": "https://takeuforward.org/dynamic-programming/coin-change-2-dp-22/",
            "practice_link": null
          },
          {
            "name": "Unbounded Knapsack (DP - 23)",
            "post_link": "https://takeuforward.org/dynamic-programming/unbounded-knapsack-dp-23/",
            "practice_link": null
          },
          {
            "name": "Rod Cutting Problem (DP - 24)",
            "post_link": "https://takeuforward.org/dynamic-programming/rod-cutting-problem-dp-24/",
            "practice_link": null
          },
          {
            "name": "Longest Common Substring (DP - 26)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-common-substring-dp-26/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 3: DP on Strings",
        "problems": [
          {
            "name": "Longest Common Subsequence (DP 25)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-common-subsequence-dp-25/",
            "practice_link": "https://leetcode.com/problems/longest-common-subsequence/"
          },
          {
            "name": "Longest Common Substring (DP 26)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-common-substring-dp-26/",
            "practice_link": null
          },
          {
            "name": "Longest Palindromic Subsequence (DP 27)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-palindromic-subsequence-dp-27/",
            "practice_link": null
          },
          {
            "name": "Minimum Insertions to Make String Palindrome (DP 28)",
            "post_link": "https://takeuforward.org/dynamic-programming/minimum-insertions-to-make-string-palindrome-dp-28/",
            "practice_link": null
          },
          {
            "name": "Minimum Deletions to Make String Palindrome (DP 29)",
            "post_link": "https://takeuforward.org/dynamic-programming/minimum-deletions-to-make-string-palindrome-dp-29/",
            "practice_link": null
          },
          {
            "name": "Shortest Common Supersequence (DP 30)",
            "post_link": "https://takeuforward.org/dynamic-programming/shortest-common-supersequence-dp-30/",
            "practice_link": null
          },
          {
            "name": "Distinct Subsequences (DP 31)",
            "post_link": "https://takeuforward.org/dynamic-programming/distinct-subsequences-dp-31/",
            "practice_link": null
          },
          {
            "name": "Edit Distance (DP 32)",
            "post_link": "https://takeuforward.org/dynamic-programming/edit-distance-dp-32/",
            "practice_link": null
          },
          {
            "name": "Wildcard Matching (DP 33)",
            "post_link": "https://takeuforward.org/dynamic-programming/wildcard-matching-dp-33/",
            "practice_link": null
          },
          {
            "name": "Longest Palindromic Substring (DP 34)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-palindromic-substring-dp-34/",
            "practice_link": null
          },
          {
            "name": "Longest Common Subsequence of 3 Strings (DP 35)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-common-subsequence-of-3-strings-dp-35/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 4: DP on Longest Increasing Subsequence",
        "problems": [
          {
            "name": "Longest Increasing Subsequence (DP 36)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-increasing-subsequence-dp-36/",
            "practice_link": null
          },
          {
            "name": "Print Longest Increasing Subsequence (DP 37)",
            "post_link": "https://takeuforward.org/dynamic-programming/print-longest-increasing-subsequence-dp-37/",
            "practice_link": null
          },
          {
            "name": "Largest Divisible Subset (DP-44)",
            "post_link": null,
            "practice_link": null
          },
          {
            "name": "Longest String Chain (DP-45)",
            "post_link": "https://takeuforward.org/data-structure/longest-string-chain-dp-45/",
            "practice_link": "https://leetcode.com/problems/longest-string-chain/"
          },
          {
            "name": "Longest Bitonic Subsequence (DP 46)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-bitonic-subsequence-dp-46/",
            "practice_link": null
          },
          {
            "name": "Number of Longest Increasing Subsequence (DP 47)",
            "post_link": "https://takeuforward.org/dynamic-programming/number-of-longest-increasing-subsequence-dp-47/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 5: DP on LIS",
        "problems": [
          {
            "name": "Maximum Sum Increasing Subsequence (DP 38)",
            "post_link": "https://takeuforward.org/dynamic-programming/maximum-sum-increasing-subsequence-dp-38/",
            "practice_link": null
          },
          {
            "name": "Longest Divisible Subset (DP 44)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-divisible-subset-dp-44/",
            "practice_link": null
          },
          {
            "name": "Longest String Chain (DP 45)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-string-chain-dp-45/",
            "practice_link": null
          },
          {
            "name": "Longest Bitonic Subsequence (DP 46)",
            "post_link": "https://takeuforward.org/dynamic-programming/longest-bitonic-subsequence-dp-46/",
            "practice_link": null
          },
          {
            "name": "Number of Longest Increasing Subsequence (DP 47)",
            "post_link": "https://takeuforward.org/dynamic-programming/number-of-longest-increasing-subsequence-dp-47/",
            "practice_link": null
          },
          {
            "name": "Russian Doll Envelopes (DP 48)",
            "post_link": "https://takeuforward.org/dynamic-programming/russian-doll-envelopes-dp-48/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 6: DP on Matrix Chain Multiplication",
        "problems": [
          {
            "name": "Matrix Chain Multiplication (DP 49)",
            "post_link": "https://takeuforward.org/dynamic-programming/matrix-chain-multiplication-dp-49/",
            "practice_link": null
          },
          {
            "name": "Minimum Cost to Cut a Stick (DP 50)",
            "post_link": "https://takeuforward.org/dynamic-programming/minimum-cost-to-cut-a-stick-dp-50/",
            "practice_link": null
          },
          {
            "name": "Burst Balloons (DP 51)",
            "post_link": "https://takeuforward.org/dynamic-programming/burst-balloons-dp-51/",
            "practice_link": null
          },
          {
            "name": "Evaluate Boolean Expression to True (DP 52)",
            "post_link": "https://takeuforward.org/data-structure/evaluate-boolean-expression-to-true-partition-dp-dp-52/",
            "practice_link": "https://leetcode.com/problems/parsing-a-boolean-expression/"
          },
          {
            "name": "Palindrome Partitioning II (DP 53)",
            "post_link": "https://takeuforward.org/dynamic-programming/palindrome-partitioning-ii-dp-53/",
            "practice_link": null
          },
          {
            "name": "Partition Array for Maximum Sum (DP 54)",
            "post_link": "https://takeuforward.org/dynamic-programming/partition-array-for-maximum-sum-dp-54/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 7: DP on Squares",
        "problems": [
          {
            "name": "Maximal Square (DP 56)",
            "post_link": "https://takeuforward.org/dynamic-programming/maximal-square-dp-56/",
            "practice_link": null
          },
          {
            "name": "Count Square Submatrices with All Ones (DP 57)",
            "post_link": "https://takeuforward.org/data-structure/count-square-submatrices-with-all-1s-dp-on-rectangles-dp-56/",
            "practice_link": "https://leetcode.com/problems/count-square-submatrices-with-all-ones/"
          }
        ]
      },
      {
        "lecture_name": "Lec 8: DP on Grids",
        "problems": [
          {
            "name": "Minimum Path Sum in Grid (DP 10)",
            "post_link": "https://takeuforward.org/dynamic-programming/minimum-path-sum-in-grid-dp-10/",
            "practice_link": null
          },
          {
            "name": "Triangle (DP 11)",
            "post_link": "https://takeuforward.org/dynamic-programming/triangle-dp-11/",
            "practice_link": null
          }
        ]
      },
      {
        "lecture_name": "Lec 9: DP on Trees",
        "problems": [
          {
            "name": "Diameter of Binary Tree (DP 58)",
            "post_link": "https://takeuforward.org/dynamic-programming/diameter-of-binary-tree-dp-58/",
            "practice_link": null
          },
          {
            "name": "Maximum Path Sum in Binary Tree (DP 59)",
            "post_link": "https://takeuforward.org/dynamic-programming/maximum-path-sum-in-binary-tree-dp-59/",
            "practice_link": null
          }
        ]
      }
    ]
  }
];

let questionIdCounter = 0;
const dsaQuestions: Category[] = rawData.map((step, stepIndex) => ({
  name: step.step_name,
  lectures: step.lectures.map((lecture, lectureIndex) => ({
    name: lecture.lecture_name,
    questions: lecture.problems.map((problem, problemIndex) => {
      questionIdCounter++;
      return {
        id: `q-${stepIndex}-${lectureIndex}-${problemIndex}`,
        title: problem.name,
        description: lecture.lecture_name,
        category: step.step_name,
        link: problem.post_link || null,
        practiceLink: problem.practice_link || null,
      };
    }),
  })),
}));


export const allQuestions: Question[] = dsaQuestions.flatMap(category => 
    category.lectures.flatMap(lecture => lecture.questions)
);

export const getQuestionById = (id: string): Question | undefined => allQuestions.find(q => q.id === id);

export default dsaQuestions;
