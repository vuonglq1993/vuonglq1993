#include<stdio.h>
int main(){
    int a,b;
//    Nhập 2 số bất kỳ
    printf("Nhập số thứ nhất: \n");
    scanf("%d", &a);
    printf("Nhập số thứ hai: \n");
    scanf("%d", &b);
//    Xét tích của 2 số
    if (a*b>1000)
    {
        printf("Tích của 2 số lớn hơn 1000");
    }
    else
    {
        printf("Tích của 2 số nhỏ hơn hoặc bằng 1000");
    }
    return 0;
}
