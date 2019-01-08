#include <iostream>

using namespace std;

class A {
    public:
        static int count;
        static int getCount(){
            //cout<<"static"<<t<<endl;
            return count;
        };
        int getT(){
            return t;
        };
    A(int p){
        cout<<"析构函数\n"<<endl;
        t=p;
        count++;
    };
    ~A(){
        cout<<"析构函数完成\n"<<endl;
    };
    private:
      int t;
};

int A::count=0;

int main(){
    cout<<"start runing\n"<<endl;
    A a(4);
    A b(5);
    cout<<a.getCount()<<endl;
    cout<<b.getCount()<<endl;
    cout<<"A::getCount()"<<A::getCount()<<endl;
    cout<<a.getT()<<endl;
}
