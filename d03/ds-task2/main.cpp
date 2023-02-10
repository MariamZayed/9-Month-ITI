#include <iostream>
using namespace std;

int psearch(string arr[],string key,int sizee){
    int start = 0;
    int endd = sizee-1;
    int mid;

    while(start <= endd){
        int mid = (start+endd)/2;
        if(key == arr[mid])
            return mid;
        else if(key[0] < arr[mid][0])
            endd = mid-1;
        else
            start = mid+1;
    }
    return -1;
}

int main()
{
    string arr[]= {"10","20","30","40","50"};
    cout<< psearch(arr,"10",5)<<endl;

    return 0;
}
