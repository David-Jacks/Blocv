// Write a program that inputs three different
// integers from the keyboard, then prints the sum, the average, the product, the smallest and the larg
// est of these numbers. Use only the single-selection form of the if statement you learned in this chap
// ter. The screen dialogue should appear as follows:
//  Enter three different integers: 13 27 14
//  Sum is 54
//  Average is 18
//  Product is 4914
//  Smallest is 13
//  Largest is 27


#include <stdio.h>

int main()
{
    // declaring and initializing variables
    int int1, int2, int3, sum, aver_age, product, smal_est, larg_est;

    // dealing with input
    printf("Enter three different integers: ");
    scanf("%d %d %d", &int1, &int2, &int3);

    // algorithm
    sum = int1 + int2 + int3;

    aver_age = sum / 3;

    product = int1 * int2 * int3;

    smal_est = int1;//assuming the first integer to be the smallest

    if (int2 < smal_est)
    {
        smal_est = int2;
    }

    if (int3 < smal_est)
    {
        smal_est = int3;
    }

    larg_est = int1;

    if (int2 > larg_est)
    {
        larg_est =int2;
    }

    if (int3 > larg_est)
    {
        larg_est = int3;
    }


    // outputs
    printf("Sum is %d \nAverage is %d \nProduct is %d \nSmallest is %d \nLargest is %d\n", sum, aver_age, product, smal_est, larg_est);


    return (0);
}

