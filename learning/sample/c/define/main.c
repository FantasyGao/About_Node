#include <stdio.h>
#define M int main
#define ADD(a,b) a+b

typedef int nit;

struct person{
    char *name;
    int age;
    float length;
};

typedef struct person2{
    char *name;
    int age;
    float length;
} person3;

M()
{
    int b;
    nit u;
    u=99;
    printf("start runing!\n");
    b = ADD(3, 5);
    printf("b is %d\n", u);

    struct person our[2] = {{"tingrong", 18, 1.75},{"Demi", 16, 1.66}};
    printf("%s, %d\n", our[0].name, our[1].age);

    person3 pr;
    pr.age = 88;
    printf("per %d", pr.age);
    return 0;
}