#include <bits/stdc++.h>
using namespace std;

void swap(int *a, int *b)
{
	int temp = *a;
	*a = *b;
	*b = temp;
}

void selectionSort(int arr[], int n)
{
	int i, j, min_index;
	for (i = 0; i < n-1; i++)
	{
		min_index = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[min_index])
			min_index = j;
		if(min_index!=i)
			swap(&arr[min_index], &arr[i]);
	}
}

void printArray(int arr[], int size)
{
	for (int i=0;i < size;i++)
		cout<<arr[i]<<" ";

}

int main()
{
	int arr[] = {8,3,1,5,9};
	selectionSort(arr, 5);
	printArray(arr,5);
	return 0;
}
