#include <bits/stdc++.h>
using namespace std;

struct Node {
    int id;
    char* name;
    int data;
    Node* next;
};

class Stack{
private:
	Node* top;

public:
	Stack(){
	    top = NULL;
	    }
	    
	void push(int data) {
		Node* temp = new Node;
		//If the stack is full
		if (temp == NULL) {
			cout << endl <<"This Stack is Full (Stack Overflow)";
			exit(1);    
		}
		temp -> data = data;
		temp -> next = top;
		top = temp;
	}

	//Return top element in a stack
	int peek(){
	    if (top == NULL){
              return 0;
	    }
	    else{
               return top -> data;
		}
	}
	
	void pop(){
		Node* temp;
		// Check for stack underflow
		if (top == NULL) {
			cout << endl << "Stack Underflow" << endl;
		}
		else {
			temp = top;
			top = top -> next;
			delete(temp);
		}
	}

	//Print
	void display(){
		Node* temp;
		// Check for stack underflow
		if (top == NULL) {
			cout << endl << "Stack Underflow" << endl;
		}
		else {
			temp = top;
			while (temp) {
				cout << temp -> elem << endl;
				temp = temp -> next;
			}
		}
	}
};

int main()
{
	Stack s;
	//Push
	cout << "Testing 'Push':" << endl;
	s.push(5);
	s.push(10);
	s.push(15);

	//Display
	s.display();

	//Print top element of stack
	cout << endl <<"Top: " << s.peek() << endl << endl;

	// Delete top
	cout << "Testing 'Pop':" << endl;
	s.pop();

	// Display
	s.display();

	// Print top
	cout << endl << "Top:" << s.peek() << endl;
	return 0;
}
