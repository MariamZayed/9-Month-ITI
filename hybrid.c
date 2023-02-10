class HotMix{
    LinkedList * lists[26];
public:
    HotMix(){
        for(int i=0;i<26;i++)
            lists[i] = NULL;
    }
    int get_index(char* name){
        int index = toupper(name[0])-65;
        if (index >=26 || index < 0)
            return-1;
        return index;
    }
    void append(int id,char* name){
        int index = get_index(name);
        if (index == -1)
            return;
        if (!lists[index])
            lists[index] = new LinkedList;
        lists[index]->append(id,name);
    }
    void display(){
        for(int i=0;i<26;i++){
            if(lists[i]){
                cout<<"THIS LINKED LIST FOR ARRAY STARTS WITH CHAR ["<<(char)(i+65)<<"]"<<endl;
                lists[i]->display();
            }
        }
    }
    node searchByName(char* name){
        int index = get_index(name);
        if (index == -1){
            node temp;
            temp.id = -1;
            return temp;
        }else{
            return lists[index]->searchByName(name);
        }
    }
    void deleteByName(char* name){
        int index = get_index(name);
        if (index == -1) return;
        lists[index]->deleteByName(name);

    }
};
