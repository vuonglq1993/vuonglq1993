#include<stdio.h>
int main(){
    float r , c , s;
    printf("bán kính hình tròn là r = ");
    scanf("%f", &r);
    c = 6.28 * r; // 2 pi * r
    s = 3.14 * r * r; // pi * r bình phương
    printf("\n");
    printf("Kết quả tính chu vi và diện tích hình tròn là \n");
    printf("-_-_-_-_-_-_-_-_-_-_-_-_-_-\n");
    printf("Bán kính hình tròn là : r = %8.1f met \n", r);
    printf("Chu vi hình tròn là: c = %8.2f met \n", c);
    printf("Diện tích hình tròn là: s = %8.3f met \n", s);
    printf("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n\n");
//=========== Ví dụ 2 =============
    printf("Data Type               \t |    Size of byte \n");
    printf("int                     \t |    %d byte \n", sizeof(int));
    printf("float                   \t |    %d byte \n", sizeof(float));
    printf("unsigned int            \t |    %d byte \n", sizeof(unsigned int));
    printf("short int               \t |    %d byte \n", sizeof(short int));
    printf("long int                \t |    %d byte \n", sizeof(long int));
    printf("double                  \t |    %d byte \n", sizeof(double));

    return 1;


