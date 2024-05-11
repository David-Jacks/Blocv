// assuming an array
my_array = [5, 3, 2, 3, 6, 7, 10];

// defining a function to compute max array element
function maxInt(arr)
{
    let maxElement = arr[0]; //assume the first element to be the maximum element
    let size = arr.length;
    for (let i = 1; i < size; i++){
        if (arr[i] > maxElement){
            maxElement = arr[i]
            // console.log(maxElement)
        }
    }
   
    return maxElement
}
let maxVal = maxInt(my_array)
console.log(maxVal)

// k is in the sequence
// find position of k
// assumtion: sequence is an array

// define a function to compute the position of k

