#include <iostream>
using namespace std;

class Queue {
private:
    int* arr;
    int frontt;
    int rear;
    int sizeofArr;
public:
	Queue(int _sizeofArr=5){
        rear = frontt = 0;
        sizeofArr = _sizeofArr;
        arr = new int [sizeofArr];
    }

	void enqueue(int elem)
	{
		//If queue is full
		if (rear == sizeofArr) {
			cout<<"Queue is full" << endl;
		}
		//If queue is not full (apply enqueue)
		else {
			arr[rear] = elem;
			rear++;
		}
	}

	void dequeue()
	{
		//If queue is empty الاتنين لو شاورا على بعض مع انها كله خلص
		if (frontt == rear) {
			cout<<"Queue is empty\n";
		}
		//Shifting
		else {
			for (int i = 0; i < rear - 1; i++) {
				arr[i] = arr[i + 1];
			}
			rear--;
		}
	}

	//Print
	void display()
	{
		int i;
		if (frontt == rear) {
			cout<<"Queue is Empty\n";
			return;
		}

		// traverse front to rear and print elements
		for (i = frontt; i < rear; i++) {
			cout << arr[i] << endl;
		}
	}

};

int main()
{
	Queue q;
	//Enqueue
	q.enqueue(5);
	q.enqueue(10);
	q.enqueue(15);
	q.enqueue(20);
	q.enqueue(25);
	//Print (After enqueue)
    cout << "Testing 'Enqueue'" << endl;
	q.display();
	//Enqueue (Full)
	cout << endl << "Testing equeue at a full queue" << endl;
	q.enqueue(60);
	q.enqueue(60);

    //Dequeue
	q.dequeue();
	q.dequeue();
	//Print (After dequeue)
    cout << endl << "Testing 'Dequeue'" << endl;
	q.display();

	return 0;
}
