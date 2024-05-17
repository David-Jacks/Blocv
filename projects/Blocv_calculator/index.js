// javascript file to increase interactivity

// document.documentElement.setAttribute("data-theme", "dark")


function palindrome(x){
    x = String(x);
    let size = x.length;
    let ans = "";
    for (let j = size; j >= 0; j--)
        {
            ans += x.charAt(j);
        }

    return (x === ans)
    
}

function secondPalindrome(x)
{
    let argCopy = x;
    let remainder = 0;
    let ans = 0;
    while (argCopy > 0)
        {
            remainder = argCopy % 10;
            ans = (ans * 10) + remainder; 
            argCopy = Math.floor(argCopy / 10);
            console.log(argCopy);
        }
    console.log(ans);
    return ans === x
}
// console.log(palindrome(0));
console.log(secondPalindrome(121));
