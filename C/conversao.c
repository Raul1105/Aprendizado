#include <stdio.h>

int main (){

    float metros;
   
    printf("Digite um valor em metros: ");
    scanf("%f",&metros);
   
    double decimetros, centimetros, milimetros;
   
    decimetros = metros * 10;
    centimetros = metros * 100;
    milimetros = metros * 1000;
   
    printf("%.2f metros equivale a %.2f decimetros\n", metros, decimetros);
    printf("%.2f metros equivale a %.2f centimetros\n", metros, centimetros);
    printf("%.2f metros equivale a %.2f milimetros\n", metros, milimetros);

    system("pause");

    return 0;
}