#include <iostream>

using namespace std;

class Queue{
private:
    int* arr;
    int sizeofArr;
    int frontt;
    int rear;
public:
    Queue(int _sizeofArr=5){
        rear = frontt = -1;
        sizeofArr = _sizeofArr;
        arr = new int [sizeofArr];
    }
    void enQueue(int value)
    {
        if ((front == 0 && rear == size-1) ||
                (rear == (front-1)%(size-1)))
        {
            printf("\nQueue is Full");
            return;
        }
     
        else if (front == -1) /* Insert First Element */
        {
            front = rear = 0;
            arr[rear] = value;
        }
     
        else if (rear == size-1 && front != 0)
        {
            rear = 0;
            arr[rear] = value;
        }
     
        else
        {
            rear++;
            arr[rear] = value;
        }
    }

    int dequeue (int &deletedElem){
        if (frontt == -1){
            cout << "No Data in Queue";
            return 0;
        }
        else{
            deletedElem = arr[frontt];
            if (frontt == rear){
                frontt = rear = -1;
            }
            else if(frontt == sizeofArr-1){
                frontt = 0;
            }
            else{
                frontt++;
            }
            return 1;
        }
    }
    void display(){
        for (int i = frontt; i <= rear; i++){
            cout << arr[i] << endl;
        }
    }
};

int main()
{
    Queue q;
    q.enqueue(5);
    q.enqueue(2);
    q.enqueue(10);
    q.enqueue(10);
    q.enqueue(10);
    q.enqueue(10);
    q.enqueue(10);
    cout<<"Queue after Equeue:"<<endl;
    q.display();
    int x;//pass by ref
    if (q.dequeue(x)==1){
        cout<<endl<<x<<" is dequeued"<<endl;
    }
    cout<<endl<<"Queue after Dequeue:"<<endl;
    q.display();
    return 0;
}
