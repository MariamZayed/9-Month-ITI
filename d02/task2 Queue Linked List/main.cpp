#include <iostream>
#include <string.h>
using namespace std;

struct node{
    int id;
    char name[30];
    node* next;
};

class Queue{
private:
    node* rear;
    node* frontt;
public:
    //Constructor
    Queue(){
        rear = frontt = NULL;
    }
    //Enqueue, add form rare
    void enqueue (int id, char name[]){
        node* temp = new node;
        if ( temp == NULL ){
            cout << "Memory is Full";
        }else{
            temp -> id = id;
            strcpy (temp -> name, name);
            temp -> next = NULL;//لانها اخر واحده فديما هتبقى اخر واحده
        }
        //Adding node #1
        if (frontt == NULL){
            frontt = rear = temp;
        }
        // Add the new node at the end of queue and change rear
        else{
            rear -> next = temp;
            rear = temp;
        }
    }
    //Dequeue
    void deQueue()
    {
        // If queue is empty, return NULL.
        if (front == NULL)
            return;
        //(means queue only has one node)
        else if (front == rear = NULL;)
            delete (front);
            front == rear = NULL //رجع الكيو زي مكانت الفرونت = الرير والاتنين مش بيشاور على حاجه
        else{
            // Store previous front and
            // move front one node ahead
            QNode* temp = front;
            front = front->next;
            delete (temp);
        }
    }
};
    //Print
    void display(){
        cout << "Queue:" << endl;
        node* temp = frontt;
        while(temp != NULL){
            cout << temp -> id << " " << temp -> name << endl;
            temp = temp -> next;
        }
    }
};
int main()
{
    Queue q;
    //Enqueue
    cout << "Testing 'Enqueue':" << endl;
    q.enqueue(5, "Enas");
    q.enqueue(10, "Eman");
    q.enqueue(15, "Aml");
    q.display();
    //Dequeue
    cout << endl << "Testing 'Dequeue':" << endl;
    node n;
    if (q.dequeue(n)){
        cout << "Dequeue: " << n.id << " " << n.name << endl << endl;
    }
    q.display();
    return 0;
}
