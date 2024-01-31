#include <stdio.h>

int main()
{

   double fahrenheit;
   int celsius, convertido;
   
   celsius = 32;
   
   printf("Digite um valor em fahrenheit: ");
   scanf("%lf", &fahrenheit);
   
   convertido = (fahrenheit - 32) * 5/9;

    printf("%.2d", convertido);  
   
    return 0;
}