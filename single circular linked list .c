#include <iostream>

using namespace std;

struct Node {
    int data;

    Node* next;
};

class CicularLinkendList
{
public:
    Node* last = new Node;
    // Last Will Be used in Many things   ;
    CicularLinkendList()
    {

        last->next = NULL ;
        // Last Refer to the First Element ,
        // When We Start  , No elements at All and Hence Last is null
        // Also All What we need is Use this "Last" For All Of Our Operations
    }

    void insertFromTop(int _data)
    {
        // This is a Single Circular List , We Can ONLY insert From One Direction
        // If We Have Next and Previous We Can insert From BOTH directions
    }

    void append(int _data)
    {
        Node* newNode = new Node ;
        newNode->data = _data ;
        newNode->next = NULL ;
        if ( last->next == NULL)
        {
            // LL is Empty
            last->next = newNode  ;
        }
        else
        {
            newNode -> next = last -> next;
            last -> next = newNode;
            last = newNode;
        }
    }


    void printCicle()
    {
        Node* temp = new Node ;
        temp = last ;
        while(temp->next != last )
        {
            temp = temp->next  ;
            if (temp == NULL)
                break;
            cout<<temp->data<<endl ;
        }
           cout<<"Printed From Last To Start and Reached Last Again"<<endl ;

    }
};


int main()
{
    CicularLinkendList CLL ;
    CLL.append(5) ;
    CLL.append(89) ;

    CLL.printCicle() ;

    return 0;
}
