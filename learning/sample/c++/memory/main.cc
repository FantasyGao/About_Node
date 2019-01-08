#include <sys/types.h>
#include <sys/mman.h>
#include <err.h>
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main(void)
{
  const char str1[] = "string 1";
  const char str2[] = "string 2";

  printf("getpid()%d\n", getpid());
  pid_t parent_pid = getpid(), child_pid;
  printf("child_pid()%d\n", child_pid);

  char *anon;

  anon = (char *)mmap(NULL, 4096, PROT_READ | PROT_WRITE, MAP_ANON | MAP_SHARED, -1, 0);

  if (anon == MAP_FAILED)
    errx(1, "either mmap");

  strcpy(anon, str1);

  printf("PID %d:\tanonymous %s\n", parent_pid, anon);
  switch (child_pid = fork())
  {
  case -1:
    err(1, "fork");
    /* NOTREACHED */
  case 0:
    child_pid = getpid();
    printf("PID %d:\tanonymous %s\n", child_pid, anon);
    sleep(3);

    printf("PID %d:\tanonymous %s\n", child_pid, anon);
    munmap(anon, 4096);
    return EXIT_SUCCESS;
  }

  sleep(2);
  strcpy(anon, str2);

  printf("PID %d:\tanonymous %s\n", parent_pid, anon);
  munmap(anon, 4096);
  return EXIT_SUCCESS;
}