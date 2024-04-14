#include<stdio.h>
int main(){
    char trinhdo;
    printf("Nhập vào khả năng của bạn: \n");
    scanf("%c", &trinhdo);
    switch(trinhdo){
        case 'a':
            printf("Bạn thuộc ngôn ngữ: Ada\n");
            break;
        case 'b':
            printf("Bạn thuộc ngôn ngữ: Basic\n");
            break;
        case 'c':
            printf("Bạn thuộc ngôn ngữ: COBOL\n");
            break;
        case 'd':
            printf("Bạn thuộc ngôn ngữ: dBASEIII\n");
            break;
        case 'f':
            printf("Bạn thuộc ngôn ngữ: Fortran\n");
            break;
        case 'p':
            printf("Bạn thuộc ngôn ngữ: Pascal\n");
            break;
        case 'v':
            printf("Bạn thuộc ngôn ngữ: Visual C++\n");
            break;
        default:
            printf("Bạn không phải dân trong ngành\n");
    }
}
