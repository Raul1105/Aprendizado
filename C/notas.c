#include <stdio.h>

int main()
{
    float aline, sergio, shirley;
    char mario[] = "" ;
   
   
    printf("Digite a nota de Aline: ");
    scanf("%f",&aline);
   
    printf("Escreva por extenso a nota de Mario: ");
    scanf("%s", mario);
   
    printf("Digite a nota de Sergio: ");
    scanf("%f",&sergio);

    printf("Digite a nota de Shirley: ");
    scanf("%f",&shirley);
   
    printf("Aluno(a)       Nota\n");
    printf("========       =====\n");
    printf("Aline          %.1f\n", aline);
    printf("Mario          %s\n", mario);
    printf("Sergio         %.1f\n", sergio);
    printf("Shirley        %.1f\n", shirley);
   
    return 0;
}