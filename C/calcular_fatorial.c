#include <stdio.h>

int main()
{
    int n1, n2, resultado;
   
    scanf("%d", &n1);
   
   
    for (n2 = n1; n2 >= 1; n2--) {
        resultado = n1 * n2;
        printf("%d X %d = %d\n", n1, n2, resultado);
    }

    return 0;
}