#include <iostream>
using namespace std;

int sum (int arr[], int arrSize){
    //If the array is empty
    if(arrSize == 0){
        return 0;
    }
    //If the array consists of only one element
    if(arrSize == 1){
        return arr[0];
    }
    //If the array consists of more than one element
    else if (arrSize > 1){
        return arr[0] + sum(arr+1, arrSize-1);
    }
    //If the size is not valid
    else{
        cout << "Enter a valid Array Size, not: ";
        return arrSize;
    }
}

int main()
{
    int arr[]={5,10,2};
    int arraySize = sizeof(arr) / sizeof(arr[0]);
    cout << sum(arr, arraySize);
    return 0;
}
