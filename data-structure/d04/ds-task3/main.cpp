#include <bits/stdc++.h>
using namespace std;

void swap(int* a, int* b)
{
	int t = *a;
	*a = *b;
	*b = t;
}

int partition(int arr[], int start, int endd)
{
	int pivot = arr[endd];
	int i = start- 1;
	for (int j=start;j<=endd- 1; j++) {
		if (arr[j] < pivot) {
			swap(&arr[i], &arr[j]);
		}
	}
	swap(&arr[i + 1], &arr[endd]);
	return (i + 1);
}

void quickSort(int arr[], int start, int endd)
{
	if (start < endd) {
		int piviot = partition(arr, start, endd);
		quickSort(arr, start, piviot - 1);
		quickSort(arr, piviot + 1, endd);
	}
}

void print(int arr[], int n)
{
	int i;
	for (i = 0; i < n; i++)
		cout << arr[i] << " ";
}


int main()
{
	int arr[] = { 10, 7, 8, 9, 1, 5 };
	quickSort(arr, 0, 5-1);
	print(arr, 5);
	return 0;
}
