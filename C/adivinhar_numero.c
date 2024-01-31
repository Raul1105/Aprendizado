#include <stdio.h>
#include <stdlib.h>

int main() {

   int n1 = rand() % 101;
   int n2;
   
   
   while(n2 != n1) {
       scanf("%d", &n2);
       
       if (n2 != n1) {
           printf("Tente outro numero\n");
       }
   }
   
   printf("Voce acertou");

    return 0;
}   