#include <iostream>  
using namespace std;  
  
class X  
{  
public:  
      static int count;
      int func();
};  
int X::count = 10;                // define static data member  
  
int main ()  
{  
      int X = 0;                  // hides class type X  
      cout << X::count << endl;   // use static member of class X  
};