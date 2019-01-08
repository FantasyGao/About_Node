#include <stdio.h>
#include <string.h>
#include <unistd.h>

int main()
{
    char buf[1024];

    memset(buf, '\0', sizeof(buf));

    fprintf(stdout, "start runing\n");
    setvbuf(stdout, buf, _IONBF, 1024);

    fprintf(stdout, "step1\n");
    fprintf(stdout, "step2\n");

    sleep(2);
    //fflush(stdout);

    fprintf(stdout, "step3\n");
    sleep(3);

    return 0;
}