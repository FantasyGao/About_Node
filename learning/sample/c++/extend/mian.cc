#include <iostream>

namespace test {
    int a = 3;
}
int b=6;

namespace test {
    extern int b;
}

int main(){
    std::cout << test::a << '\n'<<std::endl;
    std::cout << test::b << '\n'<<std::endl;
}