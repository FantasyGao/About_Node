#include <iostream>
using namespace std;

int gtr = 456;

int Start(char const *a) {
    return gtr;
};

int Start(int b) {
    return gtr+1;
};

namespace tes
{
    void func(){
        cout << "Inside second_space" << endl;
    }
};