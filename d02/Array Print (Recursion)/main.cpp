#include <iostream>
using namespace std;

void print (int arr[], int arrSize){
    //If the array is empty
    if(arrSize == 0){
        cout << "This Array is Empty" << endl;
        return;
    }
    //If the array consists of only one element
    if(arrSize == 1){
        cout << arr[0];
        return;
    }
    //If the array consists of more than one element
    else if (arrSize > 1){
        cout << arr[0] << ", ";
        print(arr+1, arrSize-1);
        return;
    }
    //If the size is not valid
    else{
        cout << "Enter a valid Array Size, not: " << arrSize;
        return;
    }
}

int main()
{
    int arr[]={2,5,1,6};
    int arraySize = sizeof(arr) / sizeof(arr[0]);
    print(arr, arraySize);
    return 0;
}
