#include <stdio.h>

int main()
{
   
    float horas, minutos, segundos;
 
    printf("Digite os segundos: ");
    scanf("%f", &segundos);
   
    horas = segundos / 3600;
    minutos = segundos / 60;
   
    printf("%.0f segundos equivale a %.1f minutos\n", segundos, minutos);
    printf("%.0f segundos equivale a %.1f horas\n", segundos, horas);
   
    return 0;
}