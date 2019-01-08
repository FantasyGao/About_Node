#include <iostream>
#include "test.cc"

// extern int gtr;

// namespace tes
// {
//     void func2(){
//         cout << "Inside2 second_space" << endl;
//     }
// };

int main()
{
    // tes::func();
    // tes::func2();
    // char b[]="srds";
    char const *b="sdsa";
    std::cout << Start(b) << std::endl;
    //std::cout << gtr << std::endl;
    std::cout << "end" << std::endl;
}