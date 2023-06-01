#include <iostream>
using namespace std;

int psearch(int arr[],int key,int sizee){
    int start = 0;
    int endd = sizee-1;
    int mid;

    while(start <= endd){
        int mid = (start+endd)/2;
        if(key == arr[mid])
            return mid;
        else if(key < arr[mid])
             endd = mid-1;
        else
             start = mid+1;
        }
        return -1;
}

int main()
{
    int arr[] = {10,20,30,40,50};
    cout<< psearch(arr,30,5)<<endl;

    return 0;
}
