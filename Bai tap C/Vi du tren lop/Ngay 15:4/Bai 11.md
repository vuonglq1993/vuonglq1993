#include<stdio.h>
int main(){
    int num1, num2;
    float ketqua;
    char luachon;
    printf("Nhap so thu nhat: \t");
    scanf("%d", &num1);
    printf("Nhap so thu hai: \t");
    scanf("%d",  &num2);
    printf("\t\tMENU\t\t\n");
    printf("======================\n");
    printf("+\n");
    printf("-\n");
    printf("*\n");
    printf(":\n");
    printf("======================\n");
    printf("Chon: \n");
    scanf(" %c", &luachon);
    switch(luachon) {
        case '+':
            ketqua = num1 + num2;
            printf("Ket qua la: %.1f\n", ketqua);
            break;
        case '-':
            ketqua = num1 - num2;
            printf("ket qua la: %.1f\n", ketqua);
            break;
        case '*':
            ketqua = num1 * num2;
            printf("ket qua la:  %.1f\n", ketqua);
            break;
        case ':':
            ketqua = num1/num2;
            printf("ket qua la:  %.1f\n", ketqua);
            break;
        default:
            printf("Khong  co ket qua\n");
            break;
    }
}
