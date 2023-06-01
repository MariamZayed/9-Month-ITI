#include <iostream>
#include <string.h>
using namespace std;
struct node{
    int id;
    char* name[30];
    int* next;
    int* prev;
};

class LL{
    int* head;
    int* tail;
    public:
    LL(){//first create node nicknames and combine them in one (by taking the null value)
        head = tail = NULL;
    }


    void append(int id, char* name){
        node* temp =new node;//create a template node untill we assign it
        temp->next=NULL;//it flies in the fadaa
        temp->prev=NULL//it flies in the fadaa
        temp->id=id;
        strcpy(temp->name,name);

        if(head==NULL){//if head takes null means that there's no node created till now
            head=tail=NULL;//means we have one node //هى هياها الهيد وهى هياها التايل
        }
        else{//we have seperated different nodes
            temp->prev=tail ;//prev is pointing to address of tail
            tail->next=temp; // will point to the new temp, this because we're dealing with double ll
            tail= temp;
        }
    }

    void display(){
        node* temp_node = new node;
        while(temp_node != NULL){//if we didn't reach for the Null for the last one yet
            cout<<temp_node->id<<":"<<temp_node->name<<endl;
            temp_node=temp_node->next;//change the address of this node and make it the address of the next node
        }
    }

    node* searchById(int _id){
        node* temp_node = head; //make temp_node points to the head node
        while(temp_node != NULL){//if we didn't reach for the Null for the last one yet
            if(_id==temp_node->id){
                return temp_node;
            }
            else{
                temp_node=temp_node->next;
            }
        }
    }

    node* searchByName(char* _name){
        node* temp_node = head;
        while(temp_node != false){
            if(_name==temp_node.name){
                return temp_node;
            }
            else{
                temp_node=temp_node->next;
            }
        }
    }
    int count(){
        int counter=0;
        node* temp_node = head;
        while(temp_node != false){
            counter++;
            temp_node=temp_node->next;
        }
        return counter;
    }

    node* deletebyid (int _id)
    {
        node* r = searchbyid(_id);
        r->next->prev = r->prev;
        r->prev->next = r->next;
        delete(r);
    }

    node* deletebyname(char nn[])
    {
        node* r1 = searchbyname(nn);
        cout << r1->id << endl;
        //r1->next->prev = r1->prev;
        //r1->prev->next = r1->next;
        delete(r1);
    }

    void insertAfter(Node* prev_node, int new_data)
{
    Node* new_node = new Node();
    new_node->data = new_data;
    new_node->next = prev_node->next;
    prev_node->next = new_node; 
    new_node->prev = prev_node;

    /* 7. Change previous of new_node's next node */
    if (new_node->next != NULL)
        new_node->next->prev = new_node;
}


};

int main()
{
    LL* l1 = new LL();
    l1->append(145564,"ahmedssdgafhadfhsdh");
    l1->append(50,"mohamed");
    l1->append(50,"lasjfgkndf;gkjang");
    l1->append(10,"ahmed");
    l1->display();
    l1->deletebyid(50);
    l1->insertِAfter(l1->searchbyid2(145564),7,"samir");
    l1->count();
    l1->display();
}
