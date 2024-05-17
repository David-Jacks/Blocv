// // assuming an array
// my_array = [5, 3, 2, 3, 6, 7, 10];

// // defining a function to compute max array element
// function maxInt(arr)
// {
//     let maxElement = arr[0]; //assume the first element to be the maximum element
//     let size = arr.length;
//     for (let i = 1; i < size; i++){
//         if (arr[i] > maxElement){
//             maxElement = arr[i]
//             // console.log(maxElement)
//         }
//     }
   
//     return maxElement
// }
// let maxVal = maxInt(my_array)
// console.log(maxVal)

// k is in the sequence
// find position of k
// assumtion: sequence is an array

// define a function to compute the position of k

// // writing first 5 prime numbers
// const my_arr = [1, 2, 3]
// // console.log(my_arr)
// function primeNumbers()
// {
//     const my_array = []
//     // understanding the question
//     // input: natural numbers starting from 2
//     let n = 2
//     for (var i = 0; i <= 10; i++)
//         {
//             flag = false
//            for (var j = 1; j <= n; j++)
//             {
//                 if ((j != 1) & (j != n))
//                     {
//                         if(n % j == 0)
//                             {
//                                 flag = true 
//                                 break
//                             }
//                     }
                
//             }
//             if (flag == false)
//                 {
//                     // my_array.push(n)
//                     console.log(n)
//                 }
//             n++
//         }
//     // process or an algorithm
//     // console.log(my_array)
//     // output: print out or return [2, 3, 5, 7, 11]
// }

// primeNumbers()


// const my_arr = [1, 1, 2, 5, 7, 8, 8, 8, 8, 8, 4, 7, 9, 6, 8]
// // console.log(my_arr.splice(0, 1))
// // console.log(my_arr)
// function dup_app(arr)
// {
//     let count = arr.length - 1;

//     for (let i = 0; i < arr.length; i++)
//         {
//             for (let j = i + 1; j < arr.length; j++)
//                 {
//                     if (arr[i] == arr[j]){
//                         arr[count] = arr[j]
//                         arr.pop()
//                     }
//                 }
//         }


//         for (let k = 0; k < arr.length; k++)
//             {
//                 if (firstIndex == arr[k])
//                     {
//                         arr.splice(k, 1)
//                     }
//             }

//         // console.log(arr.splice(firstIndex, count))
//         return arr
// }

// console.log(dup_app(my_arr))

// check for a palindrome number

// let x = 121; //x = "121" = ['1', '2', '1'] ; ans = ['1', '2', '1']

function check_palindrome(x)
{
    x = String(x);
    let size = x.length;
    let ans = "";

    for (let i = size - 1; i >= 0; i--)
        {
            ans = ans + x.charAt(i)
        }
        console.log(ans)
        return (x === ans)
}

console.log(check_palindrome(100))