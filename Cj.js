function nthMostRare(arr, n) {
    // Count occurrences of each element
    const countMap = new Map();
    arr.forEach(num => {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    });
  
    // Sort the unique elements based on their occurrence count
    const sortedItems = Array.from(countMap.entries()).sort((a, b) => a[1] - b[1]);
  
    // Return the nth rarest item
    if (n <= sortedItems.length) {
      return sortedItems[n - 1][0];
    } else {
      return null; // Return null if n is greater than the number of unique elements
    }
  }
  
  // Example usage
  const arr = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5];
  const n = 2;
  const result = nthMostRare(arr, n);
  console.log(result);
  