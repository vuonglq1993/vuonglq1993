//  Viết chương trình in ra hình chữ nhật với chiều daiv và chiều rộng do người dùng nhập
#include<stdio.h>
int  main(){
    int  a, b, x, y;
    char chieudai, chieurong;
    chieudai = '*';
    chieurong = '*';
    printf("Nhập chiều dài hình chữ nhật: \t");
    scanf("%d", &a);
    printf("Nhập chiều rộng hình chữ nhật: \t");
    scanf("%d", &b);
    for(x = 1; x< b; x++){
        for(y = 1; y< a; y++){
            printf("%c\t", chieudai);
        }
        printf("%c\n", chieurong);
    }
}
